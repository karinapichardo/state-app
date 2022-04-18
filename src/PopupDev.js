import React from "react";
import "devextreme/dist/css/dx.light.css";
import { Popup } from "devextreme-react/popup";
import { Button } from "devextreme-react/button";

class PopupDev extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isPopupVisible: false,
      textareaVisible: true,
      textBody: "testt",
      commentary: "",
      buttonPushed: false,
      buttonText: "Continue",
    };
    this.showPopup = this.showPopup.bind(this);
    this.hidePopup = this.hidePopup.bind(this);
  }

  handleChange = (e) => {
    this.setState({ commentary: e.target.value });
  };

  buttonPushedHandler = () => {
    this.setState({
      buttonPushed: true,
      buttonText: "Confirm",
      textareaVisible: false,
      textBody: "",
    });
  };

  renderContent = () => {
    let userInput = null;
    if (this.state.buttonPushed) {
      userInput = <h3>{this.state.commentary}</h3>;
    }
    return (
      <div>
        <h4>Reasoning</h4>
        <textarea
          placeholder={this.state.textBody}
          visible={this.state.textareaVisible}
          onChange={this.handleChange}
        ></textarea>
        <br />
        <button onClick={this.buttonPushedHandler}>
          {this.state.buttonText}
        </button>
        {userInput}
      </div>
    );
  };

  showPopup() {
    this.setState({
      isPopupVisible: true,
    });
  }

  hidePopup() {
    this.setState({
      isPopupVisible: false,
      commentary: "",
    });
  }

  render() {
    return (
      <div>
        <Popup
          width={500}
          title="Popup title"
          visible={this.state.isPopupVisible}
          contentRender={this.renderContent}
          onHiding={this.hidePopup}
        >
          <p></p>
        </Popup>

        <Button text="Show the Popup" onClick={this.showPopup} />

        <br />
        <br />
        <br />
      </div>
    );
  }
}

export default PopupDev;

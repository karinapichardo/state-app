import React, { Component } from "react";
import { useState } from "react";
import Modal from "./Modal";

const MODAL_STYLES = {
  position: "fixed",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  backgroundColor: "#FFF",
  padding: "50px",
  zIndex: 1000,
};

const OVERLAY_STYLES = {
  position: "fixed",
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundColor: "rgba(0, 0, 0, .7",
};

export default function PopUp() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div style={OVERLAY_STYLES}>
      <div style={MODAL_STYLES}>
        <button onClick={() => setIsOpen(true)}>open modal</button>
        <Modal open={isOpen} onClose={() => setIsOpen(false)}>
          fancy
        </Modal>
      </div>
    </div>
  );
}

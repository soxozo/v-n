'use client'

import { useState } from "react";
import AddCandidate from "@/components/addcandidates";

export default function AddCandidatePage() {
  const [showModal, setShowModal] = useState(false);

  const openModal = () => setShowModal(true);
  const closeModal = () => setShowModal(false);

  return (
    <div>
      <h1>Add Candidate</h1>
      <button onClick={openModal}>Open Add Candidate Form</button>

      {showModal && (
        <div style={modalOverlayStyles}>
          <div style={modalStyles}>
            <button style={closeButtonStyles} onClick={closeModal}>X</button>
            <AddCandidate />
          </div>
        </div>
      )}
    </div>
  );
}

// Styles for the modal
const modalOverlayStyles: React.CSSProperties = {
  position: "fixed",
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundColor: "rgba(0, 0, 0, 0.5)",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  zIndex: 1000,
};

const modalStyles: React.CSSProperties = {
  backgroundColor: "white",
  padding: "20px",
  borderRadius: "8px",
  width: "500px",
  maxWidth: "90%",
  position: "relative",
};

const closeButtonStyles: React.CSSProperties = {
  position: "absolute",
  top: "10px",
  right: "10px",
  background: "transparent",
  border: "none",
  fontSize: "16px",
  cursor: "pointer",
};

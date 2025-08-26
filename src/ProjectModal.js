import React from "react";

export default function ProjectModal({ show, onClose, project }) {
  if (!show) return null;

  return (
    <div className="modal-backdrop">
      <div className="modal">
        <h2>{project.title}</h2>
        <p>{project.description}</p>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
}

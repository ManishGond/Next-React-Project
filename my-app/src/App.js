import React, { useState } from "react";
import Modal from "./components/Modal";

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <div>
      <h1>Welcome to react portal</h1>
      <button
        onClick={() => {
          setIsModalOpen(true);
        }}
      >
        Open Modal
      </button>
      <Modal isOpen={isModalOpen}>
        <h1>This is a modal</h1>
        <button
          onClick={() => {
            setIsModalOpen(false);
          }}
        >
          Close Modal
        </button>
      </Modal>
    </div>
  );
}

export default App;

import React, { useState } from 'react';

function useInitialState() {
  const [showModal, setShowModal] = useState(false);
  const openModal = () => {
    setShowModal(true);
  };
  const closeModal = () => {
    setShowModal(false);
  };
  return {
    showModal,
    openModal,
    closeModal,
  };
}

export { useInitialState };

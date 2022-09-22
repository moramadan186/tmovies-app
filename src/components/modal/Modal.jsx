import React, { useRef } from "react";
import PropTypes from "prop-types";
import { ModalCont, Content, CloseIcon } from "./modal-style";

const Modal = ({ id, active, children }) => {
  return (
    <ModalCont id={id} className={`${active ? "active" : ""}`}>
      {children}
    </ModalCont>
  );
};

Modal.propTypes = {
  id: PropTypes.string,
  active: PropTypes.bool,
};

export const ModalContent = ({ children, onClose }) => {
  const contentRef = useRef(null);
  const closeModal = () => {
    contentRef.current.parentNode.classList.remove("active");
    if (onClose) {
      onClose();
    }
  };

  return (
    <Content ref={contentRef} className="modal__content">
      {children}
      <CloseIcon onClick={closeModal}>✖</CloseIcon>
    </Content>
  );
};
export default Modal;

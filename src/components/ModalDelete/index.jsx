import React from "react";
import "./styles.scss";

export const ModalDelete = ({
  handleClose,
  show,
  description,
  title,
  onConfirm,
}) => {
  const showHideClassName = show ? "modal display-block" : "modal display-none";

  return (
    <div className={showHideClassName}>
      <section className="modal-main">
        <h1 className="modal-main-title">{title}</h1>
        <p className="modal-main-description">{description}</p>
        <button className="modal-main-btn" type="button" onClick={handleClose}>
          X
        </button>
        <div className="container_button">
          <button type="button" onClick={onConfirm}>
            Confirm
          </button>
        </div>
      </section>
    </div>
  );
};

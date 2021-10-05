import React from "react";
import "./styles.scss";

export const Modal = ({ handleClose, show, children, title }) => {
  const showHideClassName = show ? "modal display-block" : "modal display-none";

  return (
    <div className={showHideClassName}>
      <section className="modal-main-add-movie">
        <h1 className="modal-main-title">{title}</h1>
        {children}
        <button className="modal-main-btn" type="button" onClick={handleClose}>
          X
        </button>
      </section>
    </div>
  );
};

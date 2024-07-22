import React from "react";
import { testimonialData } from "../../contants";
import quote from "../../assets/images/icon-quote.svg";

const Modal = ({ isOpen, closeModal, id, message }) => {
  const data = id
    ? testimonialData.find((item) => item.id == id)
    : { desc: message };
  return (
    <div
      className={`modal-container ${isOpen ? "active" : ""}`}
      data-modal-container
    >
      <div
        className={`overlay  ${isOpen && "active"}`}
        data-overlay
        onClick={closeModal}
      ></div>
      {isOpen ? (
        <section className="testimonials-modal">
          <button
            className="modal-close-btn"
            data-modal-close-btn
            onClick={closeModal}
          >
            <ion-icon name="close-outline"></ion-icon>
          </button>
          <div className="modal-img-wrapper">
            {id && (
              <figure className="modal-avatar-box">
                <img src={data.icon} alt={`avatar-${id}`} width="80" />
              </figure>
            )}
            <img src={quote} alt="quote icon" />
          </div>
          <div className="modal-content">
            {id && <h4 className="h3 modal-title">{data.name}</h4>}
            {id && <time datetime="2021-06-23">{data.time}</time>}
            <div className="modal-text">
              <p>{data.desc}</p>
            </div>
          </div>
        </section>
      ) : null}
    </div>
  );
};

export default Modal;

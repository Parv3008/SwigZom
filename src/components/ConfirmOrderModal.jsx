import React from "react";
import '../styles/ConfirmOrderModal.scss'
import { FormattedMessage } from "react-intl";

const ConfirmOrderModal = ({ onCancel, onConfirm }) => {
  return (
    <div className="order-modal-overlay">
      <div className="order-modal">
        <h4><FormattedMessage id="confirmOrder"/></h4>
        <img
          src="https://swigzom.netlify.app/static/media/like.842ea078ff99d274cc76.png"
          alt="Thumbs Up"
          className="thumb-icon"
        />
        <p>
          <FormattedMessage id="massage"/>
        </p>
        <div className="modal-buttons">
          <button className="cancel-btn" onClick={onCancel}>
            <FormattedMessage id="cancel"/>
          </button>
          <button className="place-btn" onClick={onConfirm}>
            <FormattedMessage id="placeOrder"/>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmOrderModal;

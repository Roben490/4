import React from "react";
import { PopUpProp } from "../../interface/PopUpProp";

export default function PopUp({
  onConfirm,
  onCancel,
  textInConfirm,
  textInCancel,
}: PopUpProp) {
  return (
    <div>
      <div className="popup-container">
        <div className="popup-body">
          <p>Are you sure to delete it?</p>
          <button onClick={onConfirm}>{textInConfirm}</button>
          <button onClick={onCancel}>{textInCancel}</button>
        </div>
      </div>
    </div>
  );
}

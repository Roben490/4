import { useState } from "react";
import PopUp from "../../../PopUps/PopUp";
import { MdCancel, MdDelete } from "react-icons/md";

export default function DeleteDriver(state: boolean) {
  const [isVisiblePopUp, setIsVisiblePopUp] = useState(state);

  const handleDelete = () => {
    console.log('היוזר נמחק!');
    setIsVisiblePopUp(false);
  };

  // פונקציה לסגירת הפופאפ אם המשתמש בחר "ביטול"
  const handleCancel = () => {
    setIsVisiblePopUp(false);
  };


  return (
    <div>
      {isVisiblePopUp ? (
        <PopUp
          onConfirm={handleDelete}
          onCancel={handleCancel}
          textInCancel={<MdCancel color="red" size="20px" />}
          textInConfirm={<MdDelete color="red" size="20px" />}
        />
      ) : (
        <></>
      )}
    </div>
  );
}

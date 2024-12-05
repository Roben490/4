import React from "react";
import PopUp from "../../../PopUps/PopUp";
import { MdCancel, MdDelete } from "react-icons/md";
import { deleteBus, deleteDriver } from "../../../../services/dataService";

interface StatusProp {
    isDelete: boolean,
    id: string,
    setIsDelete: React.Dispatch<React.SetStateAction<boolean>>
}

export default function DeleteBus({isDelete, id, setIsDelete}: StatusProp) {
  const handleDelete = async () => {
    
    await deleteBus(id)
    setIsDelete(false);
  };

  const handleCancel = () => {
    setIsDelete(false);
  };


  return (
    <div>
      {isDelete && (
        <PopUp
          onConfirm={handleDelete}
          onCancel={handleCancel}
          textInCancel={<MdCancel color="red" size="20px" />}
          textInConfirm={<MdDelete color="red" size="20px" />}
        />
      )}
    </div>
  );
};

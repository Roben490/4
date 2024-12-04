import React, { Dispatch, useState } from "react";
import PopUp from "../../../PopUps/PopUp";
import { MdCancel, MdDelete } from "react-icons/md";
import { useParams } from "react-router-dom";
import { deleteDriver } from "../../../../services/dataService";

interface StatusProp {
    isDelete: boolean,
    setIsDelete: React.Dispatch<React.SetStateAction<boolean>>
}

export default function DeleteDriver({isDelete, setIsDelete}: StatusProp) {
  const { id } = useParams();

  const handleDelete = async () => {
    await deleteDriver(id!)
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
}

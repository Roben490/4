import { useEffect, useState } from "react";
import { User } from "../../../../interface/User";
import axios from "axios";
import { MdDelete, MdEdit } from "react-icons/md";
import '../ControlArea.style.css'
import { useNavigate } from "react-router-dom";
import { LuUserPlus } from "react-icons/lu";


export default function Drivers() {
  const [drivers, setDrivers] = useState<User[]>([]);
  const navigate = useNavigate();
  const getAllDrivers = async () => {
    const response = await axios.get<User[]>(
      `http://localhost:4444/api/getAllUsers`,
      { withCredentials: true }
    );
    setDrivers(response.data);
  };
  useEffect(() => {
    getAllDrivers();
  }, []);
  return (
    <div>
      <button className="add-d" onClick={() => navigate(`/addDriver`)}><LuUserPlus size='25px'/></button>
      {drivers.map((driver) => (
        <div className="card">
          <img src="src\assets\driver.png" alt="driver" />
          <div className="card-a">
            <b>{driver.name}</b>
            <p>{driver.email}</p>
            <p>{driver.role}</p>
          </div>
          <div className="card-b">
            <button onClick={() => navigate(`/editDriver/${driver._id}`)}>
              <MdEdit size="20px" />
            </button>
            <button>
              <MdDelete color="red" size="20px" />
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

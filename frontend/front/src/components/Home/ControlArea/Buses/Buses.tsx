import { useEffect, useState } from "react";
import axios from "axios";
import { Bus } from "../../../../interface/Bus";
import { MdDelete, MdEdit } from "react-icons/md";
import './Buses.style.css'

export default function Drivers() {
  const [buses, setBuses] = useState<Bus[]>([]);
  const getAllBuses = async () => {
    const response = await axios.get<Bus[]>(
      `http://localhost:4444/api/getAllBuses`,
      { withCredentials: true }
    );
    setBuses(response.data);
  };
  useEffect(() => {
    getAllBuses();
  }, [buses]);

  
  return (
    <div>
      {buses.map((bus) => (
        <div className="card">
          <img src="src\assets\bus.png" alt="bus" />
          <div className="card-a">
            <b>{bus.busModel}</b>
            <p>{bus.capacity}</p>
          </div>
          <div className="card-b">
            <button>
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

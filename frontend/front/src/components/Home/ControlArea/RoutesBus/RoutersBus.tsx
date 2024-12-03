import { useEffect, useState } from "react";
import axios from "axios";
import { Lines } from "../../../../interface/Lines";
import { MdDelete, MdOutlinePostAdd } from "react-icons/md";
import { MdEdit } from "react-icons/md";
import './Routes.style.css'
import { useNavigate } from "react-router-dom";


export default function RoutersBus() {
  const [routers, setRouters] = useState<Lines[]>([]);
  const navigate = useNavigate()
  const getAllDrivers = async () => {
    const response = await axios.get<Lines[]>(
      `http://localhost:4444/api/getAllRoutes`,
      { withCredentials: true }
    );
    setRouters(response.data);
  };
  useEffect(() => {
    getAllDrivers();
  }, []);
  return (
    <div>
      <button className="add-lines" onClick={() => navigate(`/addLines`)}><MdOutlinePostAdd size='25px'/></button>
      {routers.map((router) => (
        <div className="card">
          <img src="src\assets\stop.png" alt="stop" />
          <div className="card-a">
            <b>{router.name}</b>
            <p>{router.lineNumber}</p>
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

import { FC, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { addBus } from "../../../../services/logService";
import { IoAddCircle } from "react-icons/io5";
import { TiArrowBack } from "react-icons/ti";
import { busStatus } from "../../../../enums/busStatus";
import { User } from "../../../../interface/User";
import { Lines } from "../../../../interface/Lines";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";


const AddBus: FC = () => {
  const [licensePlate, setLicensePlate] = useState("");
  const [busModel, setBusModel] = useState("");
  const [capacity, setCapacity] = useState(0);
  const [status, setStatus] = useState(busStatus.outOfService);
  const [driverId, setDriverId] = useState("");
  const [routeId, setRouteId] = useState("");

  const navigate = useNavigate();

  const [drivers, setDrivers] = useState<User[]>([]);
  const [routes, setRoutes] = useState<Lines[]>([]);
  useEffect(() => {
    getAllDrivers();
    getAllRoutes();
  }, []);

  const getAllDrivers = async () => {
    const response = await axios.get<User[]>(
      `http://localhost:4444/api/getAllUsers`,
      { withCredentials: true }
    );
    setDrivers(response.data);
  };

  const getAllRoutes = async () => {
    const response = await axios.get<Lines[]>(
      `http://localhost:4444/api/getAllRoutes`,
      { withCredentials: true }
    );
    setRoutes(response.data);
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    try {
      const newBus = {
        licensePlate,
        busModel,
        capacity,
        status,
        driverId,
        routeId,
    };
      const response = await addBus(newBus);
      if (response) {
        toast.success("Update Driver Successfully", {
            position: "bottom-center",
          });
        <ToastContainer autoClose={2000} />;
        navigate("/");
      } else {
        //לזכור שצריך כאן לעבוד על סניק בר אולי...
        navigate("/AddBus");
      }
    } catch (error) {
      console.error(error);
    }
  };
  
  return (
    <div className="register-form">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={licensePlate}
          placeholder="License Plate"
          required
          onChange={(e) => setLicensePlate(e.target.value)}
        />
        <input
          type="text"
          value={busModel}
          placeholder="Bus Model"
          required
          onChange={(e) => setBusModel(e.target.value)}
        />
        <input
          type="number"
          value={capacity}
          placeholder="Capacity"
          required
          onChange={(e) => setCapacity(Number(e.target.value))}
        />
        <select
          onChange={(e) => setStatus(e.target.value as busStatus)}
        >
          Select Status
          <option value={busStatus.inService}>{busStatus.inService}</option>
          <option value={busStatus.maintenance}>{busStatus.maintenance}</option>
          <option value={busStatus.outOfService}>{busStatus.outOfService}</option>
        </select>
        <select onChange={(e) => setDriverId(e.target.value)}>
          Select Driver
          {drivers.map((driver) => (
            <option value={driver._id}>{driver.name}</option>
          ))}
        </select>
        <select onChange={(e) => setRouteId(e.target.value)}>
          Select Routes
          {routes.map((rout) => (
            <option value={rout._id}>
              {rout.lineNumber} - {rout.name}
            </option>
          ))}
        </select>

        <button type="submit">
          <IoAddCircle size="25px" />
        </button>
      </form>
      <button onClick={() => navigate("/")}>
        Back <TiArrowBack color="red" />
      </button>
    </div>
  );
};

export { AddBus };

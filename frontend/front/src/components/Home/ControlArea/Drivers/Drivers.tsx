import React, { useEffect, useState } from "react";
import { User } from "../../../../interface/User";
import axios from "axios";
import "./Drivers.style.css";

export default function Drivers() {
  const [drivers, setDrivers] = useState<User[]>([]);
  const getAllDrivers = async () => {
    const response = await axios.get<User[]>(
      `http://localhost:4444/api/getAllUsers`,
      { withCredentials: true }
    );
    setDrivers(response.data);
  };
  useEffect(() => {
    getAllDrivers();
  }, [drivers]);
  return (
    <div>
      {drivers.map((driver) => (
        <div className="card">
          <button>
            <img
              src="src\assets\Screenshot_2024-12-01_143852-removebg-preview.png"
              alt="driver"
            />
            <h3>
              <b>{driver.name}</b>
            </h3>
            <p>{driver.email}</p>
            <p>{driver.role}</p>
          </button>
        </div>
      ))}
    </div>
  );
}

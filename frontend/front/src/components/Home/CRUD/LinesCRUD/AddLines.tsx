import { FC, useState } from "react";
import { useNavigate } from "react-router-dom";
import { addLines } from "../../../../services/logService";
import { IoAddCircle } from "react-icons/io5";
import { TiArrowBack } from "react-icons/ti";
import { Schedule } from "../../../../interface/Lines";
import { ToastContainer, toast } from "react-toastify";


const AddLines: FC = () => {
  const [lineNumber, setLineNumber] = useState("");
  const [name, setName] = useState("");
  const [stationToStations, setStationToStations] = useState<string>("");
  const [stations, setStations] = useState<string[]>([]);

  const [departureTime, setDepartureTime] = useState(Date.now().toString());
  const [arrivalTime, setArrivalTime] = useState((Date.now()).toString());
  const [station, setStation] = useState("");
  const [schedule, setSchedule] = useState<Schedule[]>([]);

  const navigate = useNavigate();

  const handleSubmit = async () => {
    try {
      const newLines = {
        lineNumber,
        name,
        stations,
        schedule,
      };
      console.log(newLines);
      const response = await addLines(newLines);
      if (response) {
        toast.success("Update Driver Successfully", {
          position: "bottom-center",
        });
        <ToastContainer autoClose={2000} />;
        navigate("/");
      } else {
        //לזכור שצריך כאן לעבוד על סניק בר אולי...
        navigate("/AddLines");
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="register-form">
        <input
          type="text"
          value={lineNumber}
          placeholder="line Number"
          required
          onChange={(e) => setLineNumber(e.target.value)}
        />
        <input
          type="text"
          value={name}
          placeholder="Name"
          required
          onChange={(e) => setName(e.target.value)}
        />
        <div>
          <input
            type="text"
            value={stationToStations}
            placeholder="Stations"
            onChange={(e) => setStationToStations(e.target.value)}
          />
          <button onClick={() => setStations([...stations, stationToStations])}>
            Add
          </button>
        </div>
        <div>
          <input
            type="datetime-local"
            value={departureTime}
            onChange={(e) => setDepartureTime(e.target.value)}
          />
          <input
            type="datetime-local"
            value={arrivalTime}
            onChange={(e) => setArrivalTime(e.target.value)}
          />
          <input
            type="text"
            value={station}
            onChange={(e) => setStation(e.target.value)}
          />
          <button onClick={() => setSchedule([...schedule ,{arrivalTime,departureTime,station}])}>
            Add
          </button>
        </div>
        <button onClick={handleSubmit}>
          <IoAddCircle size="25px" />
        </button>
      <button onClick={() => navigate("/")}>
        Back <TiArrowBack color="red" />
      </button>
    </div>
  );
};

export { AddLines };

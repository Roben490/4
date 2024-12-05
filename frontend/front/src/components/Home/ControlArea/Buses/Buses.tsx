import { useEffect, useState } from "react";
import axios from "axios";
import { MdDelete, MdEdit, MdDirectionsBus } from "react-icons/md";
import '../ControlArea.style.css'
import { useNavigate } from "react-router-dom";
import { GetLimitBuses } from "../../../../interface/GetLimitBuses";
import { FaAngleDoubleDown, FaAngleDoubleUp } from "react-icons/fa";
import DeleteBus from "../../CRUD/BusesCRUD/DeleteBus";


export default function Drivers() {
  const [data, setData] = useState<GetLimitBuses>();
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(2)
  const [isDelete, setIsDelete] = useState(false)
  const [busToDelete, setBusToDelete] = useState("")

  useEffect(() => {
    getLimitBuses();
  }, [page, limit]);

  const navigate = useNavigate();
  const getLimitBuses = async () => {
    const response = await axios.get<GetLimitBuses>(
      `http://localhost:4444/api/getLimitBuses/?page=${page}&limit=${limit}`,
      { withCredentials: true }
    );
    setData(response.data);
  };

  const handleNext = () => {
    if (data?.currentPage !== data?.totalPages) {      
      setPage((prev) => prev + 1)
    }
  }

  const handlePrev = () => {
    if (data?.currentPage !== 1) {
      setPage((prev) => prev - 1)
    }
  }

  const handleDelete = async (busId: string) => {
    setBusToDelete(busId);
    setIsDelete(true);
    await getLimitBuses()
  }



  return (
    <div>
      {isDelete && <DeleteBus isDelete={isDelete} id={busToDelete} setIsDelete={setIsDelete}/>}
      <button className="add-b" onClick={() => navigate('/addBus')}><MdDirectionsBus size='25px'/></button>
      <button disabled={data?.buses && data?.currentPage === 1} onClick={handlePrev}><FaAngleDoubleUp size='20px' /></button>
      {data?.buses.map((bus) => (
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
            <button onClick={() => handleDelete(bus._id!)} >
              <MdDelete color="red" size="20px" />
            </button>
          </div>
        </div>
      ))}
      <button disabled={data?.buses && data?.currentPage === data.totalPages} onClick={handleNext}><FaAngleDoubleDown size='20px' /></button>
    </div>
  );
}

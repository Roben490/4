import { useEffect, useState } from "react"
import { User } from "../../../../interface/User"
import axios from "axios";

export default function Drivers() {
  const [drivers, setDrivers] = useState<User[]>([]);
  const getAllDrivers = async () => {
    const res = await axios.get<User[]>(`http://localhost:4444/api/getAllUsers` , { withCredentials: true })
    console.log(res);
    
    console.log("111"+ res.data);
    
    return res;
  }
  useEffect(() => {
    console.log(1);
    
    getAllDrivers()
    console.log(2);
    
  },[])

  useEffect(() => {
    console.log(drivers);
  },[drivers])

  

  console.log(drivers);
  
  return (
    <div>Drivers</div>
  )
}

import Bus from "./Bus/Bus";
import Drivers from "./Drivers/Drivers";
import RoutesBus from "./RoutersBus/RoutesBus";
import './ControlArea.style.css'

export default function ControlArea() {
  return (
    <div className="ControlArea">
      <Bus />
      <Drivers />
      <RoutesBus />
    </div>
    
  );
}

import { useState } from "react";
import "./Time.css";

let NewTime = new Date().toLocaleTimeString();
const Time = () => {
   let [Ntime, setNtime] = useState(NewTime);
   const UpdateTime = () => {
      NewTime = new Date().toLocaleTimeString();
      setNtime(NewTime);
   };
   setInterval(UpdateTime, 1000);
   return (
      <div className="Time">
         <h1>{Ntime}</h1>
      </div>
   );
};

export default Time;

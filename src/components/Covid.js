import { Fragment, useEffect, useState } from "react";
import './Covid.css'
function Covid() {
   const [Data, setData] = useState([]);
   const GetCovidData = async () => {
      try {
         const res = await fetch("https://api.covid19india.org/data.json");
         const ActualData = await res.json();
         setData(ActualData.statewise[28]);
      } catch (err) {
         console.log(err);
      }
   };
   useEffect(() => {
      // GetCovidData();
   }, []);
   return (
      <Fragment>
         <section className="Covid-container">
            <div className="Card">
               <div className="Card-main">
                  <div className="Card-inner"><span>Our </span>State</div>
                  <div className="Card-name">{Data.state}</div>
               </div>
            </div>
            <div className="Card">
               <div className="Card-main">
                  <div className="Card-inner"><span>Total </span>Active</div>
                  <div className="Card-name">{Data.active}</div>
               </div>
            </div>
            <div className="Card">
               <div className="Card-main">
                  <div className="Card-inner"><span>Total </span>Confirmed</div>
                  <div className="Card-name">{Data.confirmed}</div>
               </div>
            </div>
            <div className="Card">
               <div className="Card-main">
                  <div className="Card-inner"><span>Total </span>Deaths</div>
                  <div className="Card-name">{Data.deaths}</div>
               </div>
            </div>
            <div className="Card">
               <div className="Card-main">
                  <div className="Card-inner"><span>Total </span>Recovered</div>
                  <div className="Card-name">{Data.recovered}</div>
               </div>
            </div>
            <div className="Card">
               <div className="Card-main">
                  <div className="Card-inner"><span>Last </span>Updated</div>
                  <div className="Card-name">{Data.lastupdatedtime}</div>
               </div>
            </div>
         </section>
      </Fragment>
   );
}

export default Covid;

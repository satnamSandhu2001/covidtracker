import "./App.css";
import Covid from "./components/Covid";
import Time from "./components/Time";
import BgVideo from "./Videos/video.mp4";

function App() {
   return (
      <div className="App">
         <video autoPlay loop muted id="Video">
            <source src={BgVideo} type="video/mp4" />
         </video>
         <Time />
         <h1>
            <span>🔴</span> Live
         </h1>
         <h2>Covid-19 tracker</h2>
         <Covid />
      </div>
   );
}

export default App;

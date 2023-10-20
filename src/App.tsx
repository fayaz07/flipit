import "./App.css";
import NewComersBoard from "./components/Board";
import vid from "./assets/bg.webm";

function App() {
  return (
    <div className="App">
      <video className="video" id="video" src={vid} autoPlay loop />
      <div className="frontend">
        <NewComersBoard />
      </div>
    </div>
  );
}

export default App;

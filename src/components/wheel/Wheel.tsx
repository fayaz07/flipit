import React, { useEffect } from "react";
import "./Wheel.css";

const names = ["A", "B", "C", "D", "E", "F", "G", "H"];

function WheelComponent() {
  const [available, setAvailable] = React.useState<string[]>([]);
  const [picked, setPicked] = React.useState<string>("");

  useEffect(() => {
    setAvailable(names);
  }, []);

  const pickAName = () => {
    let currAvailable = [];
    if (available.length === 0) {
      setAvailable(names);
      currAvailable = names;
      alert("all done");
    } else {
      currAvailable = available;
    }

    const index = Math.floor(Math.random() * currAvailable.length);
    const name = currAvailable[index];
    const newAvailable = [...currAvailable];
    newAvailable.splice(index, 1);
    setAvailable(newAvailable);
    setPicked(name);
  };

  return (
    <div className="wheel">
      <h3>Wheel</h3>
      <h1>{picked}</h1>
      <button className="wheelButton" onClick={() => pickAName()}>
        Pick a name
      </button>
    </div>
  );
}

export default WheelComponent;

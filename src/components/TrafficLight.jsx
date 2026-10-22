
import { useState } from "react";

function TrafficLight() {
  const [light, setLight] = useState("Red");

  return (
    <div>
      <h2>Traffic Light</h2>

      <div style={{
          backgroundColor: light.toLocaleLowerCase(),
          padding: "10px",
          borderRadius: "15px",
          width: "70px",
          marginBottom: "20px"
        }}></div>

      <button onClick={() => setLight(
      light === "Red"
        ? "Yellow"
        : light === "Yellow"
        ? "Green"
        : "Red")}>Next</button>
    </div>
  );
}

export default TrafficLight;

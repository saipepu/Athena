import { useState } from "react";
import "./App.css";
import WaterRising from "./Games/WaterRising";
import StoryBased from "./Games/StoryBased";

function App() {
  return (
    <div className="App">
      {/* <WaterRising /> */}
      <StoryBased />
    </div>
  );
}

export default App;

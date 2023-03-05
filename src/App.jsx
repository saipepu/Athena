import { useState } from "react";
import "./App.css";
import WaterRising from "./Games/WaterRising";
import StoryBased from "./Games/StoryBased";
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/waterRising" element={<WaterRising />} />
          <Route path="/storyBased" element={<StoryBased />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

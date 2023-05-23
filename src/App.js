import React, { useState } from "react";
import "./styles.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Hello from "./Hello";
export default function App() {
  const [materialValue, setMaterialValue] = useState(1);
  const [myData, setMyData] = useState({
    material: {
      materialValue: materialValue,
      selectMaterial: ""
    }
  });
  function saveData() {
    const jsonData = JSON.stringify(myData);
    console.log(jsonData);
    localStorage.setItem("storeRCData", jsonData);
  }
  return (
    <div className="App">
      <BrowserRouter>
        <div className="heading">
          <h2>RC Frame</h2>
        </div>
        <Routes>
          <Route
            path="/"
            element={<Hello myData={myData} setMyData={setMyData} />}
          />
        </Routes>
        <div className="footer">
          <div className="import_File">
            <label htmlFor="importFile" style={{ width: "20%" }}>
              <button className="import_btn">Import</button>
            </label>
            <input type="file" id="importFile" className="main_file" />
            <input
              type="text"
              placeholder="No file choosen"
              style={{ width: "60%" }}
            />
          </div>
          <button className="btn_save" onClick={saveData}>
            Save
          </button>
        </div>
      </BrowserRouter>
    </div>
  );
}

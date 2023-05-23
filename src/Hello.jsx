import React, { useEffect, useState } from "react";
const Hello = ({ myData, setMyData }) => {
  const [materialValue, setMaterialValue] = useState(1);
  const [sizeOfPlate, setSizePlate] = useState(0.9144);
  const [spanValue, setSpanValue] = useState(12.8016);
  const [wingWallThick, setWingWallThick] = useState(0.4572);
  const [skewAngle, setSkewAngle] = useState(20);
  const [t1, setT1] = useState(0.70104);
  const [t2, setT2] = useState("");
  const [t3, setT3] = useState(0.70104);
  const [t4, setT4] = useState("");
  const [a1, setA1] = useState(0.3048);
  const [a2, setA2] = useState("");
  const [a3, setA3] = useState("");
  const [a4, setA4] = useState("");
  const [b1, setB1] = useState(0.9144);
  const [b2, setB2] = useState("");
  const [b3, setB3] = useState(1.524);
  const [b4, setB4] = useState(8.01624);
  const [b5, setB5] = useState("");
  const [b6, setB6] = useState("");
  const [h1, setH1] = useState(8.01624);
  const [h2, setH2] = useState(0.09144);
  const [h3, setH3] = useState(1.524);
  const [A, setA] = useState("");
  const [C, setC] = useState("");
  const [P, setP] = useState(0.09144);
  useEffect(() => {
    console.log(myData);
  }, [myData]);
  function changeInput(e) {
    setMyData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }
  function changeMaterial(e) {
    if (e.target.name === "materialValue") setMaterialValue(e.target.value);
    setMyData((prev) => ({
      ...prev,
      material: { ...myData.material, [e.target.name]: e.target.value }
    }));
  }
  return (
    <div className="container">
      <div className="threeButton">
        <button>Longitudinal</button>
        <button>Transverse</button>
        <button>Loads</button>
      </div>
      <div className="img-box">
        <img src="" alt="" />
        <div className="threeList">
          <button>Structure Type</button>
          <label>
            <input
              type="radio"
              name="dimensionType"
              value={"2-Dimension"}
              onChange={changeInput}
            />{" "}
            2 Dimensional
          </label>
          <label>
            <input
              type="radio"
              name="dimensionType"
              value={"3-Dimension"}
              onChange={changeInput}
            />{" "}
            3 Dimensional
          </label>
        </div>
        <div className="typeOfBridge">
          <label>
            <input
              type="radio"
              value={"Normal Type Frame"}
              name="bridgeType"
              onChange={changeInput}
            />{" "}
            Normal Type Frame
          </label>
          <label>
            <input
              type="radio"
              value={"Box culvert"}
              name="bridgeType"
              onChange={changeInput}
            />{" "}
            Box culvert
          </label>
        </div>
        <div className="fivePoint">
          <div className="allBox">
            <button>Material</button>
            <input
              value={materialValue}
              className="inputBox"
              onChange={changeMaterial}
              name="materialValue"
            />
            <select
              className="selectBox"
              name="selectMaterial"
              onChange={changeMaterial}
            >
              <option value="A">A</option>
              <option value="B">B</option>
            </select>
            <input className="dotBox" value="..." />
          </div>
          <div className="allBox">
            <button style={{ width: "40%" }}>Size of Plate Element</button>
            <input
              value={sizeOfPlate}
              name="sizeOfPlate"
              onChange={(e) => {
                setSizePlate(e.target.value);
                changeInput(e);
              }}
            />{" "}
            m
          </div>
          <div className="allBox separate">
            <div className="checking">
              <button>Span</button>
              <input
                className="inputBox2"
                value={spanValue}
                name="spanValue"
                onChange={(e) => {
                  setSpanValue(e.target.value);
                  changeInput(e);
                }}
              />{" "}
              m
            </div>
            <div className="checking" style={{ justifyContent: "center" }}>
              <span>(ex:3, 4, 5@5.5,)</span>
            </div>
          </div>
          <div className="allBox">
            <input type="checkbox" /> Wing Wall: <button>Thickness</button>
            <input
              type="text"
              value={wingWallThick}
              name="wingWallThick"
              onChange={(e) => {
                setWingWallThick(e.target.value);
                changeInput(e);
              }}
            />{" "}
            m
          </div>
          <div className="allBox">
            <button>Skew Angle</button>
            <input
              type="number"
              value={skewAngle}
              name="skewAngle"
              onChange={(e) => {
                setSkewAngle(e.target.value);
                changeInput(e);
              }}
            />{" "}
            [deg]
          </div>
        </div>
        <div style={{ display: "flex", marginTop: "20px" }}>
          <button style={{ width: "15%" }}>Length Unit</button>
          <button style={{ width: "15%" }}>M,mm,in</button>
          <select name="lengthUnit" onChange={changeInput}>
            <option value="m">M</option>
            <option value="mm">mm</option>
            <option value="in">in</option>
          </select>
        </div>
        <div className="dimension">
          <div class="dimension-Box">
            <button>t1</button>
            <input
              type="text"
              value={t1}
              name="t1"
              onChange={(e) => {
                setT1(e.target.value);
                changeInput(e);
              }}
            />
            m
          </div>
          <div class="dimension-Box">
            <button>t2</button>
            <input
              type="text"
              placeholder="0.48768"
              value={t2}
              name="t2"
              onChange={(e) => {
                setT2(e.target.value);
                changeInput(e);
              }}
            />
            m
          </div>
          <div class="dimension-Box">
            <button>t3</button>
            <input
              type="text"
              value={t3}
              name="t3"
              onChange={(e) => {
                setT3(e.target.value);
                changeInput(e);
              }}
            />
            m
          </div>
          <div class="dimension-Box">
            <button>t4</button>
            <input
              type="text"
              placeholder="0.762"
              value={t4}
              name="t4"
              onChange={(e) => {
                setT4(e.target.value);
                changeInput(e);
              }}
            />
            m
          </div>
          <div class="dimension-Box">
            <button>a1</button>
            <input
              type="text"
              value={a1}
              name="a1"
              onChange={(e) => {
                setA1(e.target.value);
                changeInput(e);
              }}
            />
            m
          </div>
          <div class="dimension-Box">
            <button>a2</button>
            <input
              type="text"
              placeholder="0.3048"
              value={a2}
              name="a2"
              onChange={(e) => {
                setA2(e.target.value);
                changeInput(e);
              }}
            />
            m
          </div>
          <div class="dimension-Box">
            <button>a3</button>
            <input
              type="text"
              placeholder="0.6096"
              value={a3}
              name="a3"
              onChange={(e) => {
                setA3(e.target.value);
                changeInput(e);
              }}
            />
            m
          </div>
          <div class="dimension-Box">
            <button>a4</button>
            <input
              type="text"
              placeholder="0.54864"
              value={a4}
              name="a4"
              onChange={(e) => {
                setA4(e.target.value);
                changeInput(e);
              }}
            />
            m
          </div>
          <div class="dimension-Box">
            <button>b1</button>
            <input
              type="text"
              name="b1"
              value={b1}
              onChange={(e) => {
                setB1(e.target.value);
                changeInput(e);
              }}
            />
            m
          </div>
          <div class="dimension-Box">
            <button>b2</button>
            <input
              type="text"
              placeholder="0.9144"
              name="b2"
              value={b2}
              onChange={(e) => {
                setB2(e.target.value);
                changeInput(e);
              }}
            />
            m
          </div>
          <div class="dimension-Box">
            <button>b3</button>
            <input
              type="text"
              name="b3"
              value={b3}
              onChange={(e) => {
                setB3(e.target.value);
                changeInput(e);
              }}
            />
            m
          </div>
          <div class="dimension-Box">
            <button>b4</button>
            <input
              type="text"
              name="b4"
              value={b4}
              onChange={(e) => {
                setB4(e.target.value);
                changeInput(e);
              }}
            />
            m
          </div>
          <div class="dimension-Box">
            <button>b5</button>
            <input
              type="text"
              placeholder="0.3048"
              name="b5"
              value={b5}
              onChange={(e) => {
                setB5(e.target.value);
                changeInput(e);
              }}
            />
            m
          </div>
          <div class="dimension-Box">
            <button>b6</button>
            <input
              type="text"
              placeholder="0.03048"
              name="b6"
              value={b6}
              onChange={(e) => {
                setB6(e.target.value);
                changeInput(e);
              }}
            />
            m
          </div>
          <div class="dimension-Box">
            <button>h1</button>
            <input
              type="text"
              name="h1"
              value={h1}
              onChange={(e) => {
                setH1(e.target.value);
                changeInput(e);
              }}
            />
            m
          </div>
          <div class="dimension-Box">
            <button>h2</button>
            <input
              type="text"
              name="h2"
              value={h2}
              onChange={(e) => {
                setH2(e.target.value);
                changeInput(e);
              }}
            />
            m
          </div>
          <div class="dimension-Box">
            <button>h3</button>
            <input
              type="text"
              name="h3"
              value={h3}
              onChange={(e) => {
                setH3(e.target.value);
                changeInput(e);
              }}
            />
            m
          </div>
          <div class="dimension-Box">
            <button>A</button>
            <input
              type="text"
              placeholder="60"
              name="A"
              value={A}
              onChange={(e) => {
                setA(e.target.value);
                changeInput(e);
              }}
            />
            [deg]
          </div>
          <div class="dimension-Box">
            <button>C</button>
            <input
              type="text"
              placeholder="0.4572"
              name="C"
              value={C}
              onChange={(e) => {
                setC(e.target.value);
                changeInput(e);
              }}
            />
            m
          </div>
          <div class="dimension-Box">
            <button>P</button>
            <input
              type="text"
              name="P"
              value={P}
              onChange={(e) => {
                setP(e.target.value);
                changeInput(e);
              }}
            />
            m
          </div>
        </div>
      </div>
    </div>
  );
};
export default Hello;

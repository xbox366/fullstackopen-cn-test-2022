import axios from "axios";
import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import "./index.css";
import logoImg from "./imgs/logo.png";
import footerImg from "./imgs/flighticon.png";

// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

// import {Router, Routes, Route, Outlet, Link } from "react-router-dom";

import { BrowserRouter, Routes, Route } from "react-router-dom";

const wechatApi = "http://localhost:3001/api";

const Index = ({beerInfos}) => {  

  return (
    <div className="rootStart">
      <div className="menuBody">
        <div className="logo">
          <img className="logoImg" src={logoImg} alt="logo" />
        </div>

        <div className="beerMenu">
          <div className="leftPart">
            <div className="beerItem">
              <div className="sellNumber">
                <p>#{beerInfos[0].tapid}</p>
              </div>
              <div className="sellName">
                <p className="cnName">
                  {beerInfos[0].brewery +
                    " " +
                    beerInfos[0].beername +
                    " " +
                    beerInfos[0].beerstyle}
                </p>
                <p className="enName">{beerInfos[0].ebeername}</p>
                <div className="beerAb">
                  <p className="abv">酒精度 {beerInfos[0].abv}% abv</p>
                  <p className="bitter">苦度 {beerInfos[0].ibu} IBU</p>
                </div>
              </div>
              <div className="sellInfo">
                <p className="sellPrice">¥{beerInfos[0].price}</p>
                <p className="sellVol">{beerInfos[0].glass_type}ml</p>
              </div>
            </div>
            <div className="beerItem">
              <div className="sellNumber">
                <p>#{beerInfos[1].tapid}</p>
              </div>
              <div className="sellName">
                <p className="cnName">
                  {beerInfos[1].brewery +
                    " " +
                    beerInfos[1].beername +
                    " " +
                    beerInfos[1].beerstyle}
                </p>
                <p className="enName">{beerInfos[1].ebeername}</p>
                <div className="beerAb">
                  <p className="abv">酒精度 {beerInfos[1].abv}% abv</p>
                  <p className="bitter">苦度 {beerInfos[1].ibu} IBU</p>
                </div>
              </div>
              <div className="sellInfo">
                <p className="sellPrice">¥{beerInfos[1].price}</p>
                <p className="sellVol">{beerInfos[1].glass_type}ml</p>
              </div>
            </div>
            <div className="beerItem">
              <div className="sellNumber">
                <p>#{beerInfos[2].tapid}</p>
              </div>
              <div className="sellName">
                <p className="cnName">
                  {beerInfos[2].brewery +
                    " " +
                    beerInfos[2].beername +
                    " " +
                    beerInfos[2].beerstyle}
                </p>
                <p className="enName">{beerInfos[2].ebeername}</p>
                <div className="beerAb">
                  <p className="abv">酒精度 {beerInfos[2].abv}% abv</p>
                  <p className="bitter">苦度 {beerInfos[2].ibu} IBU</p>
                </div>
              </div>
              <div className="sellInfo">
                <p className="sellPrice">¥{beerInfos[2].price}</p>
                <p className="sellVol">{beerInfos[2].glass_type}ml</p>
              </div>
            </div>
            <div className="beerItem">
              <div className="sellNumber">
                <p>#{beerInfos[3].tapid}</p>
              </div>
              <div className="sellName">
                <p className="cnName">
                  {beerInfos[3].brewery +
                    " " +
                    beerInfos[3].beername +
                    " " +
                    beerInfos[3].beerstyle}
                </p>
                <p className="enName">{beerInfos[3].ebeername}</p>
                <div className="beerAb">
                  <p className="abv">酒精度 {beerInfos[3].abv}% abv</p>
                  <p className="bitter">苦度 {beerInfos[3].ibu} IBU</p>
                </div>
              </div>
              <div className="sellInfo">
                <p className="sellPrice">¥{beerInfos[3].price}</p>
                <p className="sellVol">{beerInfos[3].glass_type}ml</p>
              </div>
            </div>
          </div>
          <div className="middleLine"></div>

          <div className="rightPart">
            <div className="beerItem">
              <div className="sellNumber">
                <p>#{beerInfos[4].tapid}</p>
              </div>
              <div className="sellName">
                <p className="cnName">
                  {beerInfos[4].brewery +
                    " " +
                    beerInfos[4].beername +
                    " " +
                    beerInfos[4].beerstyle}
                </p>
                <p className="enName">{beerInfos[4].ebeername}</p>
                <div className="beerAb">
                  <p className="abv">酒精度 {beerInfos[4].abv}% abv</p>
                  <p className="bitter">苦度 {beerInfos[4].ibu} IBU</p>
                </div>
              </div>
              <div className="sellInfo">
                <p className="sellPrice">¥{beerInfos[4].price}</p>
                <p className="sellVol">{beerInfos[4].glass_type}ml</p>
              </div>
            </div>
            <div className="beerItem">
              <div className="sellNumber">
                <p>#{beerInfos[5].tapid}</p>
              </div>
              <div className="sellName">
                <p className="cnName">
                  {beerInfos[5].brewery +
                    " " +
                    beerInfos[5].beername +
                    " " +
                    beerInfos[5].beerstyle}
                </p>
                <p className="enName">{beerInfos[5].ebeername}</p>
                <div className="beerAb">
                  <p className="abv">酒精度 {beerInfos[5].abv}% abv</p>
                  <p className="bitter">苦度 {beerInfos[5].ibu} IBU</p>
                </div>
              </div>
              <div className="sellInfo">
                <p className="sellPrice">¥{beerInfos[5].price}</p>
                <p className="sellVol">{beerInfos[5].glass_type}ml</p>
              </div>
            </div>


            
            <BeerItem {...beerInfos[6]}></BeerItem>
            <BeerItem {...beerInfos[7]}></BeerItem>            
          </div>
        </div>
      </div>
    </div>
  );
};

const About = ({beerInfos}) => { 
  return (
    
<div className="rootStart">
      <div className="menuBody">
        <div className="logo">
          <img className="logoImg" src={logoImg} alt="logo" />
        </div>

        <div className="beerMenu">
          <div className="leftPart">
            <div className="beerItem">
              <div className="sellNumber">
                <p>#{beerInfos[0].tapid}</p>
              </div>
              <div className="sellName">
                <p className="cnName">
                  {beerInfos[0].brewery +
                    " " +
                    beerInfos[0].beername +
                    " " +
                    beerInfos[0].beerstyle}
                </p>
                <p className="enName">{beerInfos[0].ebeername}</p>
                <div className="beerAb">
                  <p className="abv">酒精度 {beerInfos[0].abv}% abv</p>
                  <p className="bitter">苦度 {beerInfos[0].ibu} IBU</p>
                </div>
              </div>
              <div className="sellInfo">
                <p className="sellPrice">¥{beerInfos[0].price}</p>
                <p className="sellVol">{beerInfos[0].glass_type}ml</p>
              </div>
            </div>
            <div className="beerItem">
              <div className="sellNumber">
                <p>#{beerInfos[1].tapid}</p>
              </div>
              <div className="sellName">
                <p className="cnName">
                  {beerInfos[1].brewery +
                    " " +
                    beerInfos[1].beername +
                    " " +
                    beerInfos[1].beerstyle}
                </p>
                <p className="enName">{beerInfos[1].ebeername}</p>
                <div className="beerAb">
                  <p className="abv">酒精度 {beerInfos[1].abv}% abv</p>
                  <p className="bitter">苦度 {beerInfos[1].ibu} IBU</p>
                </div>
              </div>
              <div className="sellInfo">
                <p className="sellPrice">¥{beerInfos[1].price}</p>
                <p className="sellVol">{beerInfos[1].glass_type}ml</p>
              </div>
            </div>
            <div className="beerItem">
              <div className="sellNumber">
                <p>#{beerInfos[2].tapid}</p>
              </div>
              <div className="sellName">
                <p className="cnName">
                  {beerInfos[2].brewery +
                    " " +
                    beerInfos[2].beername +
                    " " +
                    beerInfos[2].beerstyle}
                </p>
                <p className="enName">{beerInfos[2].ebeername}</p>
                <div className="beerAb">
                  <p className="abv">酒精度 {beerInfos[2].abv}% abv</p>
                  <p className="bitter">苦度 {beerInfos[2].ibu} IBU</p>
                </div>
              </div>
              <div className="sellInfo">
                <p className="sellPrice">¥{beerInfos[2].price}</p>
                <p className="sellVol">{beerInfos[2].glass_type}ml</p>
              </div>
            </div>
            <div className="beerItem">
              <div className="sellNumber">
                <p>#{beerInfos[3].tapid}</p>
              </div>
              <div className="sellName">
                <p className="cnName">
                  {beerInfos[3].brewery +
                    " " +
                    beerInfos[3].beername +
                    " " +
                    beerInfos[3].beerstyle}
                </p>
                <p className="enName">{beerInfos[3].ebeername}</p>
                <div className="beerAb">
                  <p className="abv">酒精度 {beerInfos[3].abv}% abv</p>
                  <p className="bitter">苦度 {beerInfos[3].ibu} IBU</p>
                </div>
              </div>
              <div className="sellInfo">
                <p className="sellPrice">¥{beerInfos[3].price}</p>
                <p className="sellVol">{beerInfos[3].glass_type}ml</p>
              </div>
            </div>
          </div>
          <div className="middleLine"></div>

          <div className="rightPart">
            <div className="beerItem">
              <div className="sellNumber">
                <p>#{beerInfos[4].tapid}</p>
              </div>
              <div className="sellName">
                <p className="cnName">
                  {beerInfos[4].brewery +
                    " " +
                    beerInfos[4].beername +
                    " " +
                    beerInfos[4].beerstyle}
                </p>
                <p className="enName">{beerInfos[4].ebeername}</p>
                <div className="beerAb">
                  <p className="abv">酒精度 {beerInfos[4].abv}% abv</p>
                  <p className="bitter">苦度 {beerInfos[4].ibu} IBU</p>
                </div>
              </div>
              <div className="sellInfo">
                <p className="sellPrice">¥{beerInfos[4].price}</p>
                <p className="sellVol">{beerInfos[4].glass_type}ml</p>
              </div>
            </div>
            <div className="beerItem">
              <div className="sellNumber">
                <p>#{beerInfos[5].tapid}</p>
              </div>
              <div className="sellName">
                <p className="cnName">
                  {beerInfos[5].brewery +
                    " " +
                    beerInfos[5].beername +
                    " " +
                    beerInfos[5].beerstyle}
                </p>
                <p className="enName">{beerInfos[5].ebeername}</p>
                <div className="beerAb">
                  <p className="abv">酒精度 {beerInfos[5].abv}% abv</p>
                  <p className="bitter">苦度 {beerInfos[5].ibu} IBU</p>
                </div>
              </div>
              <div className="sellInfo">
                <p className="sellPrice">¥{beerInfos[5].price}</p>
                <p className="sellVol">{beerInfos[5].glass_type}ml</p>
              </div>
            </div>


            
            <BeerItem {...beerInfos[6]}></BeerItem>
            <BeerItem {...beerInfos[7]}></BeerItem>            
          </div>
        </div>
      </div>
    </div>      
    
  );
};

const NoMatch = () => {
  return (
    <div>
      <h2>404</h2>
    </div>
  );
};

const BeerItem = (beerInfos) => {
  return (
    <div className="beerItem">
      <div className="sellNumber">
        <p>#{beerInfos.tapid}</p>
      </div>
      <div className="sellName">
        <p className="cnName">
          {beerInfos.brewery +
            " " +
            beerInfos.beername +
            " " +
            beerInfos.beerstyle}
        </p>
        <p className="enName">{beerInfos.ebeername}</p>
        <div className="beerAb">
          <p className="abv">酒精度 {beerInfos.abv}% abv</p>
          <p className="bitter">苦度 {beerInfos.ibu} IBU</p>
        </div>
      </div>
      <div className="sellInfo">
        <p className="sellPrice">¥{beerInfos.price}</p>
        <p className="sellVol">{beerInfos.glass_type}ml</p>
      </div>
    </div>
  );
};

const App = () => {

  const [beerInfos, setBeerInfos] = useState([
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16,
  ]);

  useEffect(() => {
    //获取并写入数据
    axios.get(wechatApi).then((response) => {
      console.log("promise fulfilled", response.data);
      setBeerInfos(response.data);
    });
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Index beerInfos={beerInfos} />} />
        <Route path="about" element={<About beerInfos={beerInfos} />} />
      </Routes>
    </BrowserRouter>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));

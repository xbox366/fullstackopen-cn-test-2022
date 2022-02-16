import axios from "axios";
import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import "./index.css";
import logoImg from "./imgs/logo.png";
import footerImg from "./imgs/flighticon.png";

const wechatApi = "http://localhost:3001/api";
const App = () => {
  const [beerInfos, setBeerInfos] = useState([1, 2, 3]);
  useEffect(() => {
    //获取并写入数据
    axios.get(wechatApi).then((response) => {
      console.log("promise fulfilled", response.data);
      setBeerInfos(response.data);
    });
  }, []);
  return (
    <div>
      <div>
        <title>左边菜单</title>
      </div>
      <div className="menuBody">
        <div className="logo">
          <img className="logoImg" src={logoImg} alt="logo" />
        </div>

        <div className="beerMenu">
          <div className="leftPart">
            <div className="beerItem">
              <div className="sellNumber">
                <p>#8</p>
              </div>
              <div className="sellName">
                <p className="cnName">北平机器 明前龙井 小麦</p>
                <p className="enName">
                  peiping machine dragon well spring tea wheat
                </p>
                <div className="beerAb">
                  <p className="abv">酒精度 4.5% abv</p>
                  <p className="bitter">苦度11 IBU</p>
                </div>
              </div>
              <div className="sellInfo">
                <p className="sellPrice">¥42</p>
                <p className="sellVol">470ml</p>
              </div>
            </div>
            <div className="beerItem">
              <div className="sellNumber">
                <p>#8</p>
              </div>
              <div className="sellName">
                <p className="cnName">北平机器 明前龙井 小麦</p>
                <p className="enName">
                  peiping machine dragon well spring tea wheat
                </p>
                <div className="beerAb">
                  <p className="abv">酒精度 4.5% abv</p>
                  <p className="bitter">苦度11 IBU</p>
                </div>
              </div>
              <div className="sellInfo">
                <p className="sellPrice">¥42</p>
                <p className="sellVol">470ml</p>
              </div>
            </div>
            <div className="beerItem">
              <div className="sellNumber">
                <p>#8</p>
              </div>
              <div className="sellName">
                <p className="cnName">北平机器 明前龙井 小麦</p>
                <p className="enName">
                  peiping machine dragon well spring tea wheat
                </p>
                <div className="beerAb">
                  <p className="abv">酒精度 4.5% abv</p>
                  <p className="bitter">苦度11 IBU</p>
                </div>
              </div>
              <div className="sellInfo">
                <p className="sellPrice">¥42</p>
                <p className="sellVol">470ml</p>
              </div>
            </div>
            <div className="beerItem">
              <div className="sellNumber">
                <p>#8</p>
              </div>
              <div className="sellName">
                <p className="cnName">北平机器 明前龙井 小麦</p>
                <p className="enName">
                  peiping machine dragon well spring tea wheat
                </p>
                <div className="beerAb">
                  <p className="abv">酒精度 4.5% abv</p>
                  <p className="bitter">苦度11 IBU</p>
                </div>
              </div>
              <div className="sellInfo">
                <p className="sellPrice">¥42</p>
                <p className="sellVol">470ml</p>
              </div>
            </div>
          </div>
          <div className="middleLine"></div>

          <div className="rightPart">
            <div className="beerItem">
              <div className="sellNumber">
                <p>#8</p>
              </div>
              <div className="sellName">
                <p className="cnName">北平机器 明前龙井 小麦</p>
                <p className="enName">
                  peiping machine dragon well spring tea wheat
                </p>
                <div className="beerAb">
                  <p className="abv">酒精度 4.5% abv</p>
                  <p className="bitter">苦度11 IBU</p>
                </div>
              </div>
              <div className="sellInfo">
                <p className="sellPrice">¥42</p>
                <p className="sellVol">470ml</p>
              </div>
            </div>
            <div className="beerItem">
              <div className="sellNumber">
                <p>#8</p>
              </div>
              <div className="sellName">
                <p className="cnName">北平机器 明前龙井 小麦</p>
                <p className="enName">
                  peiping machine dragon well spring tea wheat
                </p>
                <div className="beerAb">
                  <p className="abv">酒精度 4.5% abv</p>
                  <p className="bitter">苦度11 IBU</p>
                </div>
              </div>
              <div className="sellInfo">
                <p className="sellPrice">¥42</p>
                <p className="sellVol">470ml</p>
              </div>
            </div>
            <div className="beerItem">
              <div className="sellNumber">
                <p>#8</p>
              </div>
              <div className="sellName">
                <p className="cnName">北平机器 明前龙井 小麦</p>
                <p className="enName">
                  peiping machine dragon well spring tea wheat
                </p>
                <div className="beerAb">
                  <p className="abv">酒精度 4.5% abv</p>
                  <p className="bitter">苦度11 IBU</p>
                </div>
              </div>
              <div className="sellInfo">
                <p className="sellPrice">¥42</p>
                <p className="sellVol">470ml</p>
              </div>
            </div>
            <div className="beerItem">
              <div className="sellNumber">
                <p>#8</p>
              </div>
              <div className="sellName">
                <p className="cnName">北平机器 明前龙井 小麦</p>
                <p className="enName">
                  peiping machine dragon well spring tea wheat
                </p>
                <div className="beerAb">
                  <p className="abv">酒精度 4.5% abv</p>
                  <p className="bitter">苦度11 IBU</p>
                </div>
              </div>
              <div className="sellInfo">
                <p className="sellPrice">¥42</p>
                <p className="sellVol">470ml</p>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
};
ReactDOM.render(<App />, document.getElementById("root"));

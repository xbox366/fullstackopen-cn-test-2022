import axios from "axios";
import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
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
      <p>HELLO</p>
      <div>
        <ul>
          {beerInfos.map((beerinfo) => {
            return (
              <li key={beerinfo._id}>
                <div>
                  <p>编号:{beerinfo.tapid}</p>
                  <p>酒名:{beerinfo.brewery + beerinfo.beername}</p>
                  <p>英文名:{beerinfo.ebeername}</p>
                  <p>酒精度:{beerinfo.abv}</p>
                  <p>苦度:{beerinfo.ibu}</p>
                  <p>价格:{beerinfo.price}</p>
                  <p>杯量:{beerinfo.glass_type}</p>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};
ReactDOM.render(<App />, document.getElementById("root"));

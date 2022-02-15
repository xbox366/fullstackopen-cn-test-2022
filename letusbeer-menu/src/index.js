import axios from "axios";
import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
const wechatApi = "http://localhost:3001/api";

const App = () => {
  const [beerInfos, setBeerInfos] = useState([]);
  useEffect(() => {
    //获取并写入数据
    axios.get(wechatApi).then((response) => {
      console.log("promise fulfilled", response.data);
      setBeerInfos(response.data);
    });
  },[]);
  return (
    <div>
      <p>HELLO</p>
      <div>
        <ul>
          {beerInfos.map(beerinfo=><li key={beerinfo._id}>{beerinfo.beername}</li>)}
        </ul>
      </div>
    </div>
  );
};
ReactDOM.render(<App />, document.getElementById("root"));

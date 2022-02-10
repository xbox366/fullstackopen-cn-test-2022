import axios from 'axios';
import React, { useState,useEffect } from 'react';
import ReactDOM from 'react-dom';
const wechatApi = "/api"
const ListItem =()=>{
  return(
    <div>
      <div>乐啤酒社比利时小麦</div>
      <div>let us beer wheat</div>
      <div>48元</div>
    </div>
  )
} 
const App = () =>{
  const [token,setToken] = useState([])
  //获取token
  useEffect(()=>{
    console.log("获取token的effect",wechatApi)
    axios.get(wechatApi)
    .then(response =>{
      console.log('promise fulfilled',response.data)
      //setToken(response.data)
    })
  })
  return(
    <>
    <p>HELLO</p>
    <ListItem />
    </>
  )
}
ReactDOM.render(
    <App />,
  document.getElementById('root')
);


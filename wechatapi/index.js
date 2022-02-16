const express = require("express");
const request = require("request");
const appid = "wx29e796b1b9d6e916";
const appsecret = "472acf55cc67f8fb76e00a60b6f3fbd7";
const tokenUrl =
  "https://api.weixin.qq.com/cgi-bin/token?grant_type=client_credential&appid=" +
  appid +
  "&secret=" +
  appsecret;
const PORT = 3001;
const cors = require("cors");
const app = express();
app.use(cors());//解决前端跨域访问后端API的问题

//下方为获取数据的方法
function getToken(getUrl) {
  request(getUrl, function (error, response, body) {
    if (!error && response.statusCode == 200) {
      reToken = JSON.parse(body).access_token;
      console.log("accessToken:", JSON.parse(body).access_token);
      queryUrl =
        "https://api.weixin.qq.com/tcb/databasequery?access_token=" +
        reToken; 
      /*获取数据并展现*/ 
      /*下方定义请求体*/
      var requestBody = {
        url: queryUrl,
        method: "POST",
        json: true,
        Headers: {
          "content-type": "application/json",
        },
        body: {
          env: "beertap-5gcan46xae0b7bca",
          query:
            "db.collection(\"tapinfo_nanx\").where({'tapid':_.lt(20)}).orderBy('tapid', 'asc').limit(20).get()",
        },
      }; 
      /*下方执行请求并获取数据*/
      request.post(requestBody, (err, res, body) => {
        let _body = body.data;
        /*下方将接口返回的数据转为JSON（去除了花括号的引号） */
        let out = [];
        _body.map((item) => {
          out.push(JSON.parse(item));
        });
        /*下方吐出json数据*/
        app.get("/api", (req, res) => {
          res.send(out);
        });
      });
    }
  });
}
//getToken(tokenUrl)
app.get("/", (req, res) => {
  res.end("这是后端服务器首页。Power By Express");
});
app.listen(PORT, () => {
  getToken(tokenUrl);
  console.log(`express server running at ${PORT}`);
});

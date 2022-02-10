const express = require('express')
const request = require('request')
const appid = ""
const appsecret = ""
const tokenUrl = "https://api.weixin.qq.com/cgi-bin/token?grant_type=client_credential&appid=" + appid + "&secret=" + appsecret
const PORT = 3000
const cors = require('cors')
const app = express()
app.use(cors())
app.use(express.static('static'));

//获取数据的方法
function getToken(getUrl) {
    request(getUrl, function(error, response, body) {
        if (!error && response.statusCode == 200) {
            reToken = JSON.parse(body).access_token
            console.log("accessToken:",JSON.parse(body).access_token)
            queryUrl = "https://api.weixin.qq.com/tcb/databasequery?access_token=" + reToken;

            /*获取数据并展现*/
            /*定义请求体*/
            var requestBody = {
                url: queryUrl,
                method: "POST",
                json: true,
                Headers: {
                    "content-type": "application/json",
                },
                body: {
                    "env": "beertap-",
                    "query": "db.collection(\"tapinfo_nanx\").where({'tapid':_.lt(20)}).orderBy('tapid', 'asc').limit(20).get()"
                }
            }
            /*请求并获取数据*/
            request.post(requestBody, (err, res, body) => {
                console.log(JSON.stringify(body));
                let webApi = body.data;
                /*var server = http.createServer(function(request, response) {
                    response.writeHead(200, {
                        "Content-Type": "text/html;charset=utf-8"
                    });
                    //response.write("hellowooood"+JSON.stringify(body));
                    //response.end(JSON.stringify(body));
                    response.end(JSON.parse(webApi[0]).beername)
                });*/
                let firstMenu = JSON.parse(webApi[0])
                
                app.get('/api',(req,res)=>{
                    res.send(firstMenu)
                })
            })
        }
    })
}
//getToken(tokenUrl)
app.get('/',(req,res)=>{

})
app.listen(PORT,()=>{
    getToken(tokenUrl)
    console.log(`express server running at ${PORT}`)
})


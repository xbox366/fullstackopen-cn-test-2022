const request = require("request");
const http = require("http");
const https = require("https")
let appid = "wx29e796b1b9d6e916"
let appsecret = "472acf55cc67f8fb76e00a60b6f3fbd7"
let envid = "beertap-5gcan46xae0b7bca"
let tokenUrl = "https://api.weixin.qq.com/cgi-bin/token?grant_type=client_credential&appid="+appid+"&secret="+appsecret
let queryUrl

/*获取token的方法*/
function getToken(getUrl){
    request(getUrl,function(error,response,body){
        if(!error && response.statusCode == 200){
            reToken = JSON.parse(body).access_token
            console.log(JSON.parse(body).access_token)
            queryUrl = "https://api.weixin.qq.com/tcb/databasequery?access_token="+reToken;
            return queryUrl
        }
    })
}

/*获取数据并展现*/
/*定义请求体*/
var requestBody = {
    url:queryUrl,
    method:"POST",
    json:true,
    Headers:{
        "content-type": "application/json",
    },
    body:{
        "env":"beertap-5gcan46xae0b7bca",
        "query":"db.collection(\"tapinfo_nanx\").where({'tapid':_.lt(20)}).orderBy('tapid', 'asc').limit(20).get()"
    }
}
/*请求并获取数据*/
request.post(requestBody,(err,res,body)=>{
    console.log(JSON.stringify(body));
    webApi = body.data;
    var server = http.createServer(function(request,response){
        response.writeHead(200,{"Content-Type": "text/html;charset=utf-8"});
        //response.write("hellowooood"+JSON.stringify(body));
        //response.end(JSON.stringify(body));
        response.end(JSON.parse(webApi[0]).beername)
    });
    server.listen(8888,"127.0.0.1");
    console.log("server running at http://127.0.0.1:8888")
})

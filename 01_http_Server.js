    //"Http" Server
    //"http" predefined module in node.js, used to create the http server
let    http =  require("http");
const { type } = require("os");

//import url module & predefined in node.js..
let url = require('url');

//Create the Server..
let server = http.createServer( (req , res) => {
  //MIME type
  //comunication language between client  and server called as MIME 
  res.writeHead(200 , {'Content-Type': 'text/html'});
  let obj =  url.parse(req.url,true).query;

  if(obj.uname === 'abhishek' && obj.upaw ===  'abk'){
    res.write("<h1><i>Login Success</i></h1> ");
  }
  else{
      res.write("<h2>Login Fail</h2>")
  }
  res.end();

} )


server.listen(8080);
console.log('Server started');
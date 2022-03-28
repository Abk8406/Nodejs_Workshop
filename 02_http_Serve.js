// express 
//express 3rd Party  module in node.js
// express is the framwork (rest framwork)
// express framwork is used to develop the rest services Ex ... GET,PUT,POST,DELETE. etc

/*
 ex. 
        npm install express -- save
            (or)
        yarn add express -- save

*/
let express = require("express");

  // create the rest express 
let app = express();

//where app object is the rest object 
// where app object used to develop the rest services
//Get , POST, PUT,DELETE..


//get request 

app.get("/", (req,res)=>{
     res.status(200).json({"message": "Default get request... !"});
})
app.get("/getcustomer", (req,res) =>{
    res.status(200).json({"message": "Data from Get requset MongoDb"});
})


app.post("/",(req,res)=>{
    res.status(200).json({"message": 'Default Post Request.. !!! '})
})

app.post("/demo",(req,res)=>{
    res.status(200).json({"message": 'data from Post Request mongoDB coming soon'});
})

app.listen(8088,()=>{
    console.log("Server Started..");
})
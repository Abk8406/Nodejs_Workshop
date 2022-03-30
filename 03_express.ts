// import express module

import * as express from 'express';
import { application } from 'express';


// its return a object ..
let app:any = express();
//app object used to develop the rest services
// ex.. Get , Post, Put,Delete .. etc 




// get Request 

app.get("/getcustomer" ,(req:any,res:any):any=>{
    res.status(200).json({'Msg': 'Welcome to typescript with Node.js'});
});


//assign the port no 

app.listen(8080,()=>{
    console.log("serve stated successfully..");
});



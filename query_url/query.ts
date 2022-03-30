
import * as express from 'express';

let app = express();

app.get('/login',(req:any,res:any):any =>{
    if(req.query.uname === 'admin' && req.query.upwd === 'admin'){
        res.status(200).json({'login': 'successfuly ..'})
    }
    else{
        res.status(200).json({'login': 'Faild ..'})
    }
})
app.listen(8080,()=>{
    console.log("server started..");
});

// http://localhost:8080/login?uname=admin&upwd=admin
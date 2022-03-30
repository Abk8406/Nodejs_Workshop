
import * as express from 'express';

let app = express();

app.get('/login/uname/:uname/upaw/:upaw',(req:any,res:any):any =>{
    if(req.params.uname === 'admin' && req.params.upaw === 'admin'){
        res.status(200).json({'login': 'successfuly ..'})
    }
    else{
        res.status(200).json({'login': 'Faild ..'})
    }
})
app.listen(8080,()=>{
    console.log("server started..");
});


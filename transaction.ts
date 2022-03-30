//create the sub  module
import * as express from 'express';

let transactions:any = express.Router();
   
transactions.get('/',(req:any,res:any):any =>{
    res.status(200).json({'Msg': ' Transaction Soon ..!!!'});
})
transactions.get('/getproducts',(req:any,res:any):any =>{
    res.status(200).json({'Msg': ' Welcome to Product Shop ..!!!'});
})


export default transactions;
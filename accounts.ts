//create the sub  module
import * as express from 'express';

let account:any = express.Router();
   
account.get('/',(req:any,res:any):any =>{
    res.status(200).json({'Msg': '  Welocome to SBI account  ..!!!'});
})
account.post('/',(req:any,res:any):any =>{
    res.status(200).json({'Msg': 'account will add soon '});
})


export default account;
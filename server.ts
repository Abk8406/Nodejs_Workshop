import * as express from "express";
import transactions from "./transaction";
import account from "./accounts";

let app:any = express();


app.use('/module1',transactions);

app.use('/module2',account);

app.listen(8080, () => {
    console.log("Server Started");
})


//  http://localhost:8080/module1

// http://localhost:8080/module1/getproducts



//  acccout access Url 

//  http://localhost:8080/module2 (GET)

//  http://localhost:8080/module2 (POST)

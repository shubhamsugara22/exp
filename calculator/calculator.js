const express =  require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({extended:true}))

const PORT  =  3000;
//get ofr calculator and home page

app.get( "/" ,function(request ,response ){
    response.sendFile(__dirname + "/index.html")
});

// get request for BMi calculator

app.get("/bmicalculator",function(request,response){
    response.sendFile(__dirname +"/bmicalculator.html")
});

// post for bmi calculator

app.post("/bmicalculator",function(request, response){

    var weight  = parseFloat(request.body.weight);
    var height  = parseFloat(request.body.height);

    var bmi  = weight / (weight * height) ;

    response.send("your BMI is  "+ bmi);
});

// post for calculator

app.post("/", function(request,response){
    var num1  = Number(request.body.num1) ;
    var num2  = Number(request.body.num2) ;
    var result = num1 + num2 ;
    response.send("result of the number is "+ result );
});

app.listen(PORT,function(err){
    if(err) console.log("error in setup")
    console.log("server is listening  at ",PORT)
});
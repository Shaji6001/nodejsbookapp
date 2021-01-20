var express= require("express");
var mongoose= require("mongoose");
var bodyParser= require("body-parser");
var  {bookModel}= require('./model/textbook');

var app = express();


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));



app.post('/read',async(req,res)=>{
    
    try
    {
       var data= req.body;
       var bookData= new bookModel(data);
       var result = await bookModel.save();
       res.json(result);
    }
    catch(error){

    }


})



app.listen(process.env.PORT || 3000,function(){
    console.log("Your node server is running")
})

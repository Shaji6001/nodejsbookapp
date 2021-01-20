var express= require("express");
var mongoose= require("mongoose");
var bodyParser= require("body-parser");
var  {bookModel}= require('./model/textbook');

var app = express();


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));


mongoose.connect("mongodb+srv://shaji:ponnu123@cluster1.u2cuq.mongodb.net/bookdb?retryWrites=true&w=majority",{ useNewUrlParser: true},{ useUnifiedTopology: true })

app.post('/read',async(req,res)=>{
    
    try
    {
       var data= req.body;
       var bookData= new bookModel(data);
       var result = await bookModel.save();
       res.json(result);
    }
    catch(error)
    {res.status(500).send(error);

    }


})



app.listen(process.env.PORT || 3000,function(){
    console.log("Your node server is running")
})

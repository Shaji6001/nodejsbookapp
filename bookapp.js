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
        var data=req.body;
       var data= new bookModel(req.body);
       var result = await data.save();
       console.log(result)
       res.json(result);
    }
    catch(error)
    {res.status(500).send(error);

    }


})



app.get('/read',async(req,res)=>{
    
    try
    {
       var data= req.body;
       var data= new bookModel(req.body);
       var result = await data.save();
       res.json(result);
    }
    catch(error)
    {res.status(500).send(error);

    }
})

app.get('/viewall',async(req, res)=>{
    try
    {
       var result= await bookModel.find().exec();
       res.json(result);
    }
    catch(error){
     res.status(500).send(error)
    }
})
app.post('/search', async (req,res)=>{
    try
    {
        bookModel.find(req.body, (error,data)=>{
            if(error){throw error}
            else{res.json(data)};
        })
    }
    catch(error){
        res.status(500).send(error);
    }
})

app.post('/delete', async(req,res)=>{
    try
    {
        bookModel.findByIdAndDelete(req.body.id, (error,data)=>{
            if(error){throw error}
            else{res.json({'status':'Success'})}
        });
    }
    catch(error){res.json({'status':'Success'})};
})

app.post('/update',async (req,res)=>{
    try
    {
        bookModel.findByIdAndUpdate(req.body.id,
            {
                bookTitle:req.body.bookTitle,bookPrice:req.body.bookPrice,
                bookAuthor:req.body.bookAuthor,bookDescription:req.body.bookDescription
            },(error,data)=>{
                if(error){res.send(error)}
                else{res.json({'status':'Success'})}
            })
    }
    catch(error){res.status(500).send(error)};
})


app.listen(process.env.PORT || 3002,function(){
    console.log("Your node server is running")
})

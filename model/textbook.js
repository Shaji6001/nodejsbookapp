var mongoose=require("mongoose");


var bookSchema= new mongoose.Schema({

  bookTitle:{type:String},
  bookPrice:{type:Number},
  bookAuthor:{type:String},
  bookDescription:{type:String},


})

var bookModel= new mongoose.model("books", bookSchema);

module.exports= {bookModel}
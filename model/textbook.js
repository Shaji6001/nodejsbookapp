var mongoose=require("mongoose");


var bookSchema= new mongoose.Schema({

  bookTitle:{type:String},
  bookPrice:{type:String},
  bookAuthor:{type:String},
  bookDescription:{type:String},


})

var bookModel= mongoose.model("books", bookSchema);

module.exports= {bookModel}
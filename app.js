const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/fruitsDB', {useNewUrlParser: true, useUnifiedTopology: true});

const fruitSchema = new mongoose.Schema({
  name: String,
  rating: Number,
  review: String
});

const Fruit = mongoose.model("fruit", fruitSchema);

const fruit = new Fruit({
  name: "Apple",
  rating: 7,
  review: "Pretty solid as a fruit."
});



const kiwi = new Fruit({
  name: "Kiwi",
  rating: 8,
  review: "Awesome one"
});


const orange = new Fruit({
  name: "Orange",
  rating: 10,
  review: "Awesome amoung all"
});

const banana = new Fruit({
  name: "Banana",
  rating: 8,
  review: "Best of all"
});


//
// Fruit.find(function(err, fruits){
//   if(err){
//     console.log(err);
//   }else{
//     fruits.forEach(function(fruit){
//       console.log(fruit.name);
//     });
//
//   }
// });
//
// Fruit.deleteOne({name: "Ayan"}, function(err){
//   if(err){
//     console.log(err);
//   }else {
//     console.log("Successfully Deleted!!");
//   }
// })

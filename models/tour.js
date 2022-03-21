import mongoose from "mongoose";

const tourSchema = mongoose.Schema({
  title: String,
  description: String,
  name: String,
  creator: String,
  name: String,
  username:String,
  address:String,
  contact:String,
  email:String,
  
  date:  Date,
   
});

const TourModal = mongoose.model("Tour", tourSchema);

export default TourModal;

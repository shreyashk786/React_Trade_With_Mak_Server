import mongoose from "mongoose";

const adduserSchema = mongoose.Schema({
  name: String,
  username: String,
  address: String,
  contact: String,
  email: String,
  dob: String,
 
  
    
    
 
});

const AdduserModal = mongoose.model("Adduser", adduserSchema);

export default AdduserModal;

import AdduserModal from "../models/adduser.js";
import mongoose from "mongoose";

export const createAdduser = async (req, res) => {
  const Adduser = req.body;
  
  let userdata = req.body
  const newAdduser = await AdduserModal.create({
    name: userdata.name, 
    username: userdata.username,
    address: userdata.address,
    email: userdata.email,
    dob: userdata.dob,
    contact: userdata.contact
  });
  

  try {
    await newAdduser.save();
    res.status(200).json(newAdduser);
  } catch (error) {
    res.status(404).json({ message: "Something went wrong" });
  }
};

export const getAddusers = async (req, res) => {
  try {
    const addusers = await AdduserModal.find();
    res.status(200).json(addusers);
  } catch (error) {
    res.status(404).json({ message: "Something went wrong" });
  }
};
export const searAdduser = async (req, res) => {
  const {id}=req.query.se;
  console.log(id);
  try {
    users=await AdduserModal.find({'username': {'$regex' : '.*' + id + '.*'}});
    res.status(200).json(users);
  } catch (error) {
    res.status(404).json({ message: "Something went wrong" });
  }
};

export const getAdduser = async (req, res) => {
  const { _id } = req.params;
  try {
    const adduser = await AdduserModal.findOne(_id);
    res.status(200).json(adduser);
  } catch (error) {
    res.status(404).json({ message: "Something went wrong" });
  }
};

export const  getAddusersbyuser = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ message: "User doesn't exist" });
  }
  const userAddusers = await AdduserModal.find({ creator: id });
  res.status(200).json(userAddusers);
};

export const deleteAdduser = async (req, res) => {
  const { id } = req.params;
  try {
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(404).json({ message: `No User exist with id: ${id}` });
    }
    await AdduserModal.findByIdAndRemove(id);
    res.json({ message: "User deleted successfully" });
  } catch (error) {
    res.status(404).json({ message: "Something went wrong" });
  }
};

export const updateAdduser = async (req, res) => {
  const { id } = req.params;
  const { name, username, address, email, contact, dob } = req.body;
  try {
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(404).json({ message: `No tour exist with id: ${id}` });
    }

    const updatedAdduser = {
      name ,
      username,
      address,
      contact,
      email,
      dob,
      _id: id,
    };

    
    
   

    await AdduserModal.findByIdAndUpdate(id, updatedAdduser, { new: true });
    res.json(updatedAdduser);
  } catch (error) {
    res.status(404).json({ message: "Something went wrong" });
  }
};
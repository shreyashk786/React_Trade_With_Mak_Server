import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import morgan from "morgan";
import userRouter from "./routes/user.js";
import tourRouter from "./routes/tour.js";
import adduserRouter from "./routes/adduser.js";

const app = express();
app.use(function (request, response, next) {
  response.header("Access-Control-Allow-Origin", "*");
  response.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});
app.use(morgan("dev"));
app.use(express.json({ limit: "30mb", extended: true }));
app.use(express.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

app.use("/users", userRouter); // http://localhost:5000/users/signup
app.use("/tour", tourRouter);
app.use("/adduser", adduserRouter);

app.get("/",(req,res)=>{
  res.send('Welcome to Trade with Mak Server');
})

const MONGODB_URL = "mongodb+srv://tradewithmaktest:xbWn0OLmwcO5uSFo@cluster0.kxhwi.mongodb.net/trade_db?retryWrites=true&w=majority";
const PORT = process.env.PORT || 5000;

mongoose
  .connect(MONGODB_URL)
  .then(() => {
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
  })
  .catch((error) => console.log(`${error} did not connect`));

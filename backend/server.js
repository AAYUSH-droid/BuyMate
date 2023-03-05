require("dotenv").config();
const app = require("./app");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
// const connectDB = require("./config/connect");

//config OF DOTENV
dotenv.config({ path: "backend/config/config.env" });

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => console.log("DB connection successful"))
  .catch((err) => {
    console.log(err);
  });

app.listen(process.env.PORT, () => {
  console.log(`Server is working on http://localhost:${process.env.PORT}`);
});

// const port = 4000;
// const start = async () => {
//   try {
//     await connectDB(process.env.MONGO_URI);
//     app.listen(port, console.log(`Server is working on port ${port}`));
//   } catch (error) {
//     console.log(error);
//   }
// };

// "mongodb+srv://aayushcoursemail:mgksong@cluster0.h0c5z8h.mongodb.net/products?retryWrites=true&w=majority"
// "mongodb+srv://aayushDB:mgksong@cluster0.mhknejj.mongodb.net/PRODUCTS?retryWrites=true&w=majority"

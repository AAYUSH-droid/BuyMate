require("dotenv").config();
const app = require("./app");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
// const connectDB = require("./config/connect");
const cloudinary = require("cloudinary");

//config OF DOTENV
dotenv.config({ path: "backend/config/config.env" });

//handling uncaught error/exception
process.on("uncaughtException", (err) => {
  console.log(`Error: ${err.message}`);
  console.log(`Shutting down the server due to uncaught Error exception`);
  process.exit(1);
});

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => console.log("DB connection successful"));
// .catch((err) => {
//   console.log(err);
// });

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

const server = app.listen(process.env.PORT, () => {
  console.log(`Server is working on http://localhost:${process.env.PORT}`);
});

//Unhandled Promise rejection (when connectionstring is wrong callUnhandled Promise rejection and remove catch block from mongoose.connect)
process.on("unhandledRejection", (err) => {
  console.log(`Error : ${err.message}`);
  console.log(`Shutting down the server due to unhandled promise rejection`);

  server.close(() => {
    process.exit(1);
  });
});

//another way checking git ignore
// const port = 4000;
// const start = async () => {
//   try {
//     await connectDB(process.env.MONGO_URI);
//     app.listen(port, console.log(`Server is working on port ${port}`));
//   } catch (error) {
//     console.log(error);
//   }
// };

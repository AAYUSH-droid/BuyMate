const app = require("./app");
const dotenv = require("dotenv");
const mongoose = require("mongoose");

//config OF DOTENV
dotenv.config({ path: "backend/config/config.env" });

mongoose
  .connect(
    "mongodb+srv://aayushcoursemail:mgksong@cluster0.h0c5z8h.mongodb.net/products?retryWrites=true&w=majority"
  )
  .then(() => console.log("DB connection successful"))
  .catch((err) => {
    console.log(err);
  });

app.listen(process.env.PORT, () => {
  console.log(`Server is working on http://localhost:${process.env.PORT}`);
});

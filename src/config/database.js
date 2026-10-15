const mongoose = require("mongoose");

const connectDB = async () => {
  await mongoose.connect(
    "mongodb+srv://codebaserahul_db_user:B2Dw6Zavm6s9rW5V@namstenode.nwig8jq.mongodb.net/",
  );
};

connectDB()
  .then(() => {
    console.log("Database connected successfully!");
  })
  .catch((err) => {
    console.log("Database connection failed!");
  });

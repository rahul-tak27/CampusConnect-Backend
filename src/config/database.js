const mongoose = require("mongoose");

const connectDB = async () => {
  await mongoose.connect(
    "mongodb+srv://codebaserahul_db_user:B2Dw6Zavm6s9rW5V@namstenode.nwig8jq.mongodb.net/campusConnect",
  );
};

module.exports = {
    connectDB
}


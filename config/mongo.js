const mongoose = require("mongoose");

const dbConnect = async () => {
  try {
    await mongoose.connect(process.env.db_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log(`The Database is connected`);
    {
    }
  } catch (error) {
    console.log(`Error: ${error.message}`);
  }
};
module.exports = dbConnect;

const mongoose = require('mongoose');

const connectDb = async () => {
  try {
    const connection = await mongoose.connect(
      process.env.MONGO_DB_URL + 'project_management'
    );
    console.log(`Database is connected on ${connection.connection.port}`);
  } catch (error) {
    console.log(error.message);
  }
};

module.exports = connectDb;

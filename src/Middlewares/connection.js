import mongoose from "mongoose";

const connectDb = async () => {
  await mongoose.connect(
   process.env.MONGODB_URI
  );
  console.log("Connected to database");
};

export default connectDb;
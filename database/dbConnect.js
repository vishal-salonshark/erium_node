import mongoose, { mongo } from "mongoose";

const dbConnect = () => {
  console.log("trying to cannect to DB")
  if (mongoose.connection.readyState >= 1) return;

  mongoose.connect(process.env.DB_URI);
};

export default dbConnect;
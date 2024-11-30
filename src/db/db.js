import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

const connectDB = async () => {
  try {
    const db = await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`);

    console.log(`\n MongoDB connected !! DB Host : ${db.connection.host}`);
  } catch (error) {
    console.error("MongoDB Connection Error", error);
    process.exit(1);
  }
};

export default connectDB;
 
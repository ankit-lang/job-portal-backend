import mongoose from "mongoose";

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI || "mongodb+srv://rankit2883:ankit@jobportal.vrbvj8m.mongodb.net/?retryWrites=true&w=majority&appName=jobportal" );
    console.log("mongodb connected successfully");
  } catch (error) {
    console.log(error);
  }
};
export default connectDB;

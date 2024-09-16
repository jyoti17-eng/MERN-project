import mongoose from "mongoose";

export const connectDB = async ()=>{
    await mongoose.connect("mongodb+srv://tewatiajyoti983:jyotiUserPassword@cluster0.2pgp2.mongodb.net/food-del").then(()=>console.log("DB connected"));
}
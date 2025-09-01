import mongoose from "mongoose";

export const connectDB = async () => {
  await mongoose
    .connect(
      "mongodb+srv://lizadev:billionaire@cluster0.mha73l4.mongodb.net/food-delivery-app"
    )
    .then(() => console.log("DB Connected"));
};

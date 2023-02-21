import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    name: String,
    price: String,
    country: String,
    url: String,
})

export default  mongoose.model("Product", productSchema);
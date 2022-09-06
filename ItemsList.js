import mongoose from "mongoose";

const ItemSchema=new mongoose.Schema({
    category:String,
    items:Object
})

export default mongoose.model('ItemsList', ItemSchema)



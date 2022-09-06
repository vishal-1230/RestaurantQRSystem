import mongoose from 'mongoose'

const OrderSchema=new mongoose.Schema({
    orderid:String,
    name:String,
    num:Number,
    seat:String,
    items:Array,
    cash:Boolean
})

export default mongoose.model('Orders', OrderSchema)
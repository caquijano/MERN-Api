import { Schema, model } from "mongoose";

const entrySchema = new Schema({
    detailId:{
        type: String,
        required: true,
        trim:true
    },
    productId:{
        type: String,
        required: true,
        trim:true
    },
    productName:{
        type: String,
        required: true,
        trim:true
    },
    amount:{
        type: Number,
        required: true,
        trim: true,
        
    },
    newPrice:{
        type: Number,
        required: true,
        trim: true,
    }
},{
    versionKey: false,
    timestamps:true
})
export default model('Entry', entrySchema);
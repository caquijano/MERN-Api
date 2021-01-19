import { Schema, model } from "mongoose";

const saleDetailSchema = new Schema({
    invoice:{
        type: String,
        required: true,
        trim:true
    },
    client:{
        type: String,
        required: true,
        trim:true
    },
    date:{
        type: Date,
        required: true,
        trim: true,
        
    },
    totalSale:{
        type: Number,
        required: true,
        trim: true,
    },
},{
    versionKey: false,
    timestamps:true
})
export default model('SaleDetail', saleDetailSchema);
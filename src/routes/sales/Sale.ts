import { Schema, model } from "mongoose";

const saleSchema = new Schema({
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
        required: false,
        trim: true,
        
    },
    amount:{
        type: Number,
        required: true,
        trim: true,
        
    },
    date:{
        type: Date,
        required: true,
        trim: true,
        
    },
    priceBuy:{
        type: Number,
        required: true,
        trim: true,
    },
    priceSale:{
        type: Number,
        required: true,
        trim: true,
    },
    utility:{
        type: Number,
        required: true,
        trim: true,
    },
},{
    versionKey: false,
    timestamps:true
})
export default model('Sale', saleSchema);
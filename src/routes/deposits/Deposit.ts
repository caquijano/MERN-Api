import { Schema, model } from "mongoose";

const depositSchema = new Schema({
    depositNumber:{
        type: String,
        required: true,
        trim:true
    },
    kind:{
        type: String,
        required: true,
        trim:true
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
        
    }
},{
    versionKey: false,
    timestamps:true
})
export default model('Deposit',depositSchema);
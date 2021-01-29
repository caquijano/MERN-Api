import { Schema, model } from "mongoose";

const expenseSchema = new Schema({
    concept:{
        type: String,
        required: true,
        trim:true
    },
    price:{
        type: Number,
        required: true,
        trim:true
    },
    date:{
        type: Date,
        required: true,
        trim: true,
        
    },
    
},{
    versionKey: false,
    timestamps:true
})
export default model('Expense', expenseSchema);
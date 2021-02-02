import { Schema, model } from "mongoose";

const entryDetailSchema = new Schema({
    invoice:{
        type: String,
        required: true,
        trim:true
    },
    detailId:{
        type: String,
        required: true,
        trim:true
    },
    provider:{
        type: String,
        required: true,
        trim:true
    },
    date:{
        type: Date,
        required: true,
        trim: true,
        
    },
    totalEntry:{
        type: Number,
        required: true,
        trim: true,
    },
},{
    versionKey: false,
    timestamps:true
})
export default model('EntryDetail', entryDetailSchema);
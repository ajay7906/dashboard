import mongoose from "mongoose";

const schema = new mongoose.Schema({
    end_year: {
        type: Number,
    },
    intensity: {
        type: Number,
    },
   
    topic: {
        type: String
    },
  
   
    region: {
        type: String
    },
    start_year: {
        type: Number
    },
   
   
  
    country: {
        type: String
    },
    relevance: {
        type: Number
    },
   
   
  
    likelihood: {
        type: Number
    },
})

export const visreportModel = mongoose.model("visreport", schema);
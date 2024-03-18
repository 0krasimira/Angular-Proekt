const mongoose = require("mongoose")

const paintingSchema = new mongoose.Schema({
    title: {
        type: String, 
        // required: true,
    },
    year: {
        type: Number, 
        // required: true,
    },
    technique: {
        type: String, 
        // required: true,
    },
    description: {
        type: String, 
        // required: true,
    },
    imageUrl: {
        type: String, 
        // required: true,
        // match: [/^https?:\/\//, 'Invalid poster link']
    },
    price: {
        type: Number, 
        // required: true
    },
    // likes: [{
    //     type: mongoose.Types.ObjectId,
    //     ref: "Cast"
    // }],
    // author: {
    //     type: mongoose.Types.ObjectId,
    //     ref: "User"
    // },
    author: {
        type: String, 
        // required: true
    },
    
})




const Painting = mongoose.model("Painting", paintingSchema)


module.exports = Painting
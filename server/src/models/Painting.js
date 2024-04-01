const mongoose = require("mongoose")

const paintingSchema = new mongoose.Schema({
    title: {
        type: String, 
        required: [true, 'All fields are mandatory'],
    },
    year: {
        type: Number, 
        required: [true, 'All fields are mandatory'],
    },
    technique: {
        type: String, 
        required: [true, 'All fields are mandatory'],
    },
    description: {
        type: String, 
        required: [true, 'All fields are mandatory'],
    },
    imageUrl: {
        type: String, 
        required: [true, 'All fields are mandatory'],
        match: [/^https?:\/\//, 'Please, enter a valid link']
    },
    price: {
        type: Number, 
        required: [true, 'All fields are mandatory'],
    },
    // likes: [{
    //     type: mongoose.Types.ObjectId,
    //     ref: "Cast"
    // }],
    author: {
        type: mongoose.Types.ObjectId,
        ref: "User"
    },
    // author: {
    //     type: String, 
    //     // required: true
    // },
    
})




const Painting = mongoose.model("Painting", paintingSchema)


module.exports = Painting
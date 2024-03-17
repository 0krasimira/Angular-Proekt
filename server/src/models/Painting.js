const mongoose = require("mongoose")

const paintingSchema = new mongoose.Schema({
    title: {
        type: String, 
        required: true,
    },
    year: {
        type: Number, 
        required: true,
    },
    technique: {
        type: String, 
        required: true,
    },
    description: {
        type: String, 
        required: true,
        maxLength: [1000, 'Maximum characters exceeded - description cannot be longer than 1000 characters']
    },
    imageUrl: {
        type: String, 
        required: true,
        match: [/^https?:\/\//, 'Invalid poster link']
    },
    price: {
        type: Number, 
        required: true
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
        required: true
    },
    
})




const Painting = mongoose.model("Painting", paintingSchema)


module.exports = Painting
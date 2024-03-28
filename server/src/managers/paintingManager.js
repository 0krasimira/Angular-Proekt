const Painting = require('../models/Painting')
const User = require('../models/User')
console.log( 'user model', User)
const mongoose = require('mongoose')

exports.createPainting = (paintingData) => Painting.create(paintingData)

exports.getAll = () => Painting.find()

exports.getOne = (paintingId) => Painting.findById(paintingId)

exports.getOneWithDetails = (paintingId) => this.getOne(paintingId).populate('author')

exports.edit = (paintingId, paintingData) => Painting.findByIdAndUpdate(paintingId, paintingData, { runValidators: true })

exports.create = async (userId, paintingData) => {
    try {
        // Create a new painting document
        const newPainting = new Painting({
            ...paintingData,
            author: userId, // Set the author field to the ObjectId of the authenticated user
        });

        const savedPainting = await newPainting.save();
        await User.findByIdAndUpdate(userId, {$push: {paintings: savedPainting._id}})
        return savedPainting;
    } catch (error) {
        throw error; // Propagate the error to the caller
    }
};

// exports.delete = (paintingId) => Painting.findByIdAndDelete(paintingId)
const Painting = require('../models/Painting')
const User = require('../models/User')
console.log( 'user model', User)
const mongoose = require('mongoose')

exports.createPainting = (paintingData) => Painting.create(paintingData)

exports.getAll = () => Painting.find()

exports.getOne = (paintingId) => Painting.findById(paintingId)

exports.getOneWithDetails = (paintingId) => this.getOne(paintingId).populate('author')

// exports.create = (paintingData) => Painting.create(paintingData)

exports.create = async (userId, paintingData) => {
    try {
        // Create a new painting document
        const newPainting = new Painting({
            ...paintingData,
            author: userId, // Set the author field to the ObjectId of the authenticated user
        });

        const savedPainting = await newPainting.save();
        await User.findByIdAndUpdate(userId, {$push: {createdPaintings: savedPainting._id}})
        return savedPainting;
    } catch (error) {
        throw error; // Propagate the error to the caller
    }
};
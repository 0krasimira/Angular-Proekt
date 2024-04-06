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


exports.likePainting = async (paintingId, userId) => {
    try {
      // Find the painting by ID
      const painting = await Painting.findById(paintingId);
  
      if (!painting) {
        throw new Error('Painting not found');
      }
  
      // Check if the user has already liked the painting
      if (painting.likes.includes(userId)) {
        throw new Error('You have already liked this painting');
      }
  
      // Add the user's ID to the likes array
      painting.likes.push(userId);
  
      // Save the updated painting
      await painting.save();
      return painting;
    } catch (error) {
      throw new Error(`Failed to like painting: ${error.message}`);
    }
  };
  
const Painting = require('../models/Painting')

exports.createPainting = (paintingData) => Painting.create(paintingData)

exports.getAll = () => Painting.find()

exports.getOne = (paintingId) => Painting.findById(paintingId)


exports.create = (paintingData) => Painting.create(paintingData)

// exports.create = (userId, paintingData) => {
//     const createdPainting = Painting.create({
//         author: userId,
//         ...paintingData
//     })

//     User.findByIdAndUpdate(userId, {$push: {createdPaintings: createdPainting._id}})
//     return createdPainting
// }

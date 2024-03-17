const Painting = require('../models/Painting')

exports.createPainting = (paintingData) => Painting.create(paintingData)

exports.getAll = () => Painting.find()

exports.getOne = (paintingId) => Painting.findById(paintingId)
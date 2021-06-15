const mongoose = require('mongoose');

const ProductSchema = mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  quantity: {
    type: Number,
    required: true
  },
  img: {
    type: String,
    required: true
  },
  tags: {
    type: String,
    required: false
  }
})

module.exports = mongoose.model('Products', ProductSchema);
import mongoose from 'mongoose'

const Schema = mongoose.Schema

const itemSchema = new Schema({
  name: String,
  productId: Number,
  description: String,
  category: String,
  price: Number,
  photo: String
},{
  timestamps: true,
})

const Item = mongoose.model('Item', itemSchema)

export { Item }

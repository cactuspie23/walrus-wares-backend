import mongoose from 'mongoose'

const Schema = mongoose.Schema

const cartSchema = new Schema({
  userId: { type: Schema.Types.ObjectId, ref: 'Profile' },
  items: [{
    productId: { type: Schema.Types.ObjectId, ref: 'Item' },
    name: String,
    quantity: { type: Number, required: true, min: 1, default: 1 },
    price: Number
  }],
  bill: { type: Number, required: true, default: 0 }
},{
  timestamps: true,
})

const Cart = mongoose.model('Cart', cartSchema)

export { Cart }

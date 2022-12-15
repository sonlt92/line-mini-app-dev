import { Schema, model } from "mongoose"

export default interface Service extends Document {
  nameService: String,
  price: Number,

}

const ServiceSchema: Schema = new Schema({
  nameService: {
    type: String,
    require: true,
    unique: true,
  },
  price: {
    type: Number,
  },
  userId: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  }
})

export const ServiceModel = model('Service', ServiceSchema)

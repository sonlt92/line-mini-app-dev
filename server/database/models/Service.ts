import { Schema, model } from 'mongoose'

export default interface Service extends Document {
  nameService: String
}

const ServiceSchema: Schema = new Schema({
  serviceId: {
    type: String,
  },
  nameService: {
    type: String,
    require: true,
    unique: true,
  },
  userId: {
    type: Schema.Types.ObjectId,
    ref: 'User',
  },
})

export const ServiceModel = model('Service', ServiceSchema)

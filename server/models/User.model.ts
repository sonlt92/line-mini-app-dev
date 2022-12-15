import { Schema, model, Document } from 'mongoose'

export default interface User extends Document {
  userId: String,
  name: String,
  furigana: String,
  address: String,
  phoneNumber: String,
  createAt?: Date,
}

const UserSchema: Schema = new Schema({
  userId: {
    type: String,
    require: true,
    unique: true,
  },
  name: {
    type: String,
  },
  furigana: {
    type: String,
  },
  address: {
    type: String
  },
  phoneNumber: {
    type: String
  },
  createAt: {
    type: Date,
    default: Date.now,
  },
})

export const UserModel = model<User>('User', UserSchema)
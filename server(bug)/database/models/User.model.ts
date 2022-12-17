import { Schema, model, Document } from 'mongoose'
import IUser from '../../types/user'


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

export const UserModel = model<IUser>('User', UserSchema)
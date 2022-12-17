import { Document } from 'mongoose'

export interface IUser extends Document {
  userId: string
  name: string
  furigana: string
  address: string
  phoneNumber: string
  createAt: Date
  _doc: Object
}

import { Document } from "mongoose";
export default interface IUser extends Document {
    userId: String,
    name: String,
    furigana: String,
    address: String,
    phoneNumber: String,
    createAt?: Date,
  }
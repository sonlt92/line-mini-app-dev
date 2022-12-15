const mongoose = require('mongoose')
const Schema = mongoose.Schema

const CalendarSchema = new Schema({
  serviceId: {
    type: String,
    require: true,
    unique: true,
  },
  title:{
    type: String,
  },
  start: {
    type: Date,
  },
  end: {
    type: Date,
  },
  status: {
    type: String,
  },
  allDay: {
    type: Boolean,
  },  
  createAt: {
    type: Date,
    default: Date.now,
  },
  deleteAt: {
    type: Date,
  },
  updateAt: {
    type: Date,
  },
  gasStationId: {
    type: Schema.Types.ObjectId,
    ref: 'GasStation'
  },
  color:{
    type: String,
  },
  note:{
    type: String,
  },
  userId: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  }
})

module.exports = mongoose.model('Calendar', CalendarSchema)
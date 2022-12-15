const mongoose = require('mongoose')
const Schema = mongoose.Schema

const GasStationSchema = new Schema({
  gasStationId:{
    type: String
  },
  name: {
    type: String,
    require: true,
    unique: true,
  },
  address: {
    type: String,
  },
  phoneNumber: {
    type: String,
  }
})

module.exports = mongoose.model('GasStation', GasStationSchema)

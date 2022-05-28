import mongoose from 'mongoose'
import mongoosePaginate from 'mongoose-paginate'

const Schema = mongoose.Schema

const schema = new Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    cpf: {
        type: String,
        required: true,
        trim: true,
        unique: true,
    },
    email: {
        type: String,
        required: true,
        trim: true,
        unique: true
    },
    literaryPreference: {
        type: String,
        required: false,
        default: "",
        trim: true,
        unique: false
    },
    birthDate: {
        type : Date,
        required: true,
        unique: false,
        trim: true
    }

})

schema.plugin(mongoosePaginate)
module.exports = mongoose.model('Client', schema)
import mongoose from 'mongoose'
import mongoosePaginate from 'mongoose-paginate'

const Schema = mongoose.Schema

const schema = new Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        trim: true,
        unique: true
    }
})

schema.plugin(mongoosePaginate)
module.exports = mongoose.model('Client', schema)
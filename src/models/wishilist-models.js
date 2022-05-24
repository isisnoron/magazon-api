import mongoose from 'mongoose'

const Schema = mongoose.Schema

const schema = new Schema({
    title: {
        type: String,
        required: true,
        trim: true,
        unique: true
    },
    descricao: {
        type: String,
        required: true,
        trim: true,
    },
    client_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Client',
        required: true
    }
})

module.exports = mongoose.model('Wishlist', schema)
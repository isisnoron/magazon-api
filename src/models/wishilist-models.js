import mongoose from 'mongoose'
const Schema = mongoose.Schema

const schema = new Schema({
    
    title: {
        type: String, 
        required: true,
        trim: true,
        unique: true
    },
    description:{
        type: String, 
        required: true,
        trim: true
    },
    client: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Client',
        required: true,
        immutable: true
    },
    products: {
        type: [mongoose.Schema.Types.ObjectId],
        ref: 'Product',
        required: true,
        trim: true,
        validate: v => v == null || v.length > 0
    },
    createAd: {
        type: Date,
        default: Date.now
    },
    active: {
        type: Boolean,
        required: true,
        default: true
    }
})

module.exports = mongoose.model('Wishlist', schema)

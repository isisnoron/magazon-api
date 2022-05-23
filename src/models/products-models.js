import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const schema = new Schema({
    title: {
        type: String,
        required: true,
        trim: true
    },
    author: {
        type: String,
        required: true,
        trim: true
    },
    description: {
        type: String,
        required: true,
        trim: true
    },
    price: {
        type: Number,
        required: true,
        default: 0.00
    },
    active: {
        type: Boolean,
        required: true,
        default: true
    }
})

const Model = mongoose.model('Produto', schema);

module.exports = Model
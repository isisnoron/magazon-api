import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const schema = new Schema({
    code : {
        type: Number,
        unique: true,
        required: true,
        trim: true
    },
    title: {
        type: String,
        required: true,
        trim: true,
        unique: true
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

const Model = mongoose.model('Product', schema);

module.exports = Model
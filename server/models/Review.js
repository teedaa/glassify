const { Schema } = require('mongoose');

const reviewSchema = new Schema(
    {
        writer: {
            type: String,
            required: true
        },
        content: {
            type: String,
            required: true,
            minLength: 1
        },
        stars: {
            type: Number,
            default: 3
        }
    },
    {

    }
);

module.exports = reviewSchema;

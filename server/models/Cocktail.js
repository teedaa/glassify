const { Schema, model} = require('mongoose');
const bcrypt = require('bcrypt');
const reviewSchema = require('./Review');
const cocktailSchema = new Schema(
    { 
        name: {
            type: String,
            required: true,
            unique: true,
        }, 
        directions: {
            type: String
        },
        reviews: [reviewSchema],
        alcoholic: {
            type: String
        },
        glass: {
            type: String
        },
        instructions: {
            type: String
        },
        ingredients: [{
            type: String
        }]
    },
    {
        toJSON: {
            // virtuals: true
        }
    }
);


const Cocktail = model('Cocktail', cocktailSchema);

module.exports = Cocktail;
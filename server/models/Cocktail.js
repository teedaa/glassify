const { Schema, model} = require('mongoose');
const reviewSchema = require('./Review');
const cocktailSchema = new Schema(
    { 
        name: {
            type: String,
            required: true,
            unique: true,
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
        }],
        image: {
            type: String
        }
    },
    {
        toJSON: {
            // virtuals: true
        }
    }
);


const Cocktail = model('Cocktail', cocktailSchema);

module.exports = Cocktail;
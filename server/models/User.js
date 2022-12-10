const { Schema, model} = require('mongoose');
const bcrypt = require('bcrypt');
const userSchema = new Schema(
    { 
        username: {
            type: String,
            required: true,
            unique: true,
        },
        email: {
            type: String,
            required: true,
            unique: true,
            match: [/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/, 'Must use a valid email address'], // regex email validator
        },
        password: {
            type: String,
            required: true,
            match: [/^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[*.!@$%^&(){}[]:;<>,.?\/~_+-=|\]).{8,32}$/, 'Must use a valid password'], // regex password validator
        },
        savedCocktails: [{
            type: Schema.Types.ObjectId,
            reference: 'Cocktail'
        }]
    },
    {
        toJSON: {
            // virtuals: true
        }
    }
);

userSchema.methods.comparePassword = async function (password) {
    return bcrypt.compare(password, this.password)
};

const User = model('User', userSchema);

module.exports = User;
const { Schema, model} = require('mongoose');
const bcrypt = require('bcrypt');
const userSchema = new Schema(
    { 
        // id is automatically generated
        username: {
            type: String,
            required: true,
            unique: true,
            minLength: 4
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

userSchema.pre('save', async function (next) {
    if (this.isNew || this.isModified('password')) {
        const saltRounds = 10;
        this.password = await bcrypt.hash(this.password, saltRounds);
    }

    next();
})

userSchema.methods.comparePassword = async function (password) {
    return bcrypt.compare(password, this.password)
};

const User = model('User', userSchema);

module.exports = User;
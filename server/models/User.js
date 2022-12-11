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
            match: [/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/, 'Must use a valid password'], // regex password validator
        },
        savedCocktails: [{
            type: Schema.Types.ObjectId,
            ref: 'Cocktail',
            // unique: true
        }]
    },
    {
        toJSON: {
            virtuals: true
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
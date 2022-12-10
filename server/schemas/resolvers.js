const { User, Cocktail } = require('../models');
const { signToken } = require('../utils/auth');
const { AuthenticationError } = require('apollo-server-express');
const { Types } = require('mongoose');

module.exports = {
    Query: {
        searchCocktails: async (parent, args) => {
            return await Cocktail.find({ 'name': { $regex: '^' + args.search, $options: 'i' } });
        },
        user: async (parent, args, context) => {
            if (!context.user) {
                throw new AuthenticationError('Log in to use this query');
            }
            const user = await User.findById(context.user._id).populate('savedCocktails');
            return user;
        }
    },
    Mutation: {
        createUser: async (parent, args) => {
            const user = await User.create({username: args.username, password: args.password});
            const token = signToken(user);

            return {token, user};
        },
        login: async (parent, args) => {
            const user = await User.findOne({username: args.username});
            if(!user) {
                throw new AuthenticationError('No user with this username found!');
            }
            if(!(await user.comparePassword(args.password))){
                throw new AuthenticationError('Incorrect password!');
            }
            const token = signToken(user);
            return {token, user};
        },
        saveCocktail: async (parent, args, context) => {
            if (!context.user) {
                throw new AuthenticationError('Log in to use this query');
            }
            const user = await User.findByIdAndUpdate(context.user._id, { $addToSet : {savedCocktails: args.cocktailId }}, { new: true }).populate('savedCocktails');
            return user;
        },
        removeCocktail: async (parent, args, context) => {
            if (!context.user) {
                throw new AuthenticationError('Log in to use this query');
            }
            const user = await User.findByIdAndUpdate(context.user._id, { $pull : {savedCocktails: args.cocktailId }}, { new: true }).populate('savedCocktails');
            return user;
        }
    }
}
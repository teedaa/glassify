const { User, Cocktail } = require('../models');
const { signToken } = require('../utils/auth');
const { AuthenticationError } = require('apollo-server-express');

module.exports = {
    Query: {
        allCocktails: async () => {
            return await Cocktail.find();
        }
    },
    Mutation: {
        createUser: async (parent, args) => {
            const user = await User.create({username: args.username, password: args.password});
            const token = signToken(user);

            return {token, user};
        }
    }
}
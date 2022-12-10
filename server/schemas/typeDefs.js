const { gql } = require('apollo-server-express');


const typeDefs = gql`
    type User {
        _id: ID
        username: String
        savedCocktails: [Cocktail]
    }

    type Auth {
        token: ID
        user: User
    }

    type Cocktail {
        _id: ID
        name: String
        directions: String
        reviews: [Review]
        alcoholic: String
        glass: String
        instructions: String
        ingredients: [String]
    }

    type Review {
        writer: String
        content: String
        stars: Int
    }

    type Query {
        searchCocktails(search: String): [Cocktail]
        user: User
    }

    type Mutation {
        createUser(username: String!, password: String!): Auth
        login(username: String!, password: String!): Auth
        saveCocktail(cocktailId: ID!): User
        removeCocktail(cocktailId: ID!): User
    }
`;

module.exports = typeDefs;
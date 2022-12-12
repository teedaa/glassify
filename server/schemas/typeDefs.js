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
        image: String
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
        _id: ID
    }

    type Query {
        searchCocktails(search: String): [Cocktail]
        searchSingleCocktail(cocktailId: ID!): Cocktail
        user: User
    }

    type Mutation {
        createUser(username: String!, password: String!): Auth
        login(username: String!, password: String!): Auth
        saveCocktail(cocktailId: ID!): User
        removeCocktail(cocktailId: ID!): User
        addReview(cocktailId: ID!, content: String!, stars: Int!): Cocktail
        removeReview(cocktailId: ID!, reviewId: ID!): Cocktail
    }
`;

module.exports = typeDefs;
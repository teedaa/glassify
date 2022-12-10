const { gql } = require('apollo-server-express');

const typeDefs = gql`
    type User {
        _id: ID
        username: String
        password: String
        savedCocktails: [Cocktail]
    }

    type Auth {
        token: ID
        user: User
    }

    type Cocktail {
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

    }

    type Mutator {

    }
`;
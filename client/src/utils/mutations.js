import { gql } from "@apollo/client";


export const LOGIN_USER = gql`
mutation login($username: String!, $password: String!) {
  login(username: $username, password: $password) {
    token
    user {
      _id
      username
    }
  }
}
`

export const CREATE_USER = gql`
mutation createUser($username: String!, $password: String!) {
  createUser(username: $username, password: $password) {
    token
    user {
      username
      _id
    }
  }
}
`

export const SEARCH_SINGLE_COCKTAIL = gql`
query searchSingleCocktail($cocktailId: ID!) {
  searchSingleCocktail(cocktailId: $cocktailId) {
    name
    _id
    alcoholic
    glass
    image
    ingredients
    instructions
    reviews {
      writer
      stars
      content
      _id
    }
  }
}
`;

export const USER = gql`
query user {
  user {
    username
    savedCocktails {
      _id
      alcoholic
      image
      ingredients
      glass
      instructions
      name
    }
    _id
  }
}
`;

export const SAVE_COCKTAIL = gql`
mutation saveCocktail($cocktailId: ID!) {
  saveCocktail(cocktailId: $cocktailId) {
    _id
    savedCocktails {
      _id
      alcoholic
      glass
      ingredients
      instructions
      name
      reviews {
        writer
        stars
        content
      }
    }
    username
  }
}
`;

export const REMOVE_COCKTAIL = gql`
mutation removeocktail($cocktailId: ID!) {
  removeCocktail(cocktailId: $cocktailId) {
    _id
    savedCocktails {
      _id
      alcoholic
      glass
      ingredients
      instructions
      name
      reviews {
        writer
        stars
        content
      }
    }
    username
  }
}
`;
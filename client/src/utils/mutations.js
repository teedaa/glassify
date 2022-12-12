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

export const ADD_REVIEW = gql`
mutation addReview($cocktailId: ID!, $content: String!, $stars: Int!) {
  addReview(cocktailId: $cocktailId, content: $content, stars: $stars) {
    _id
    alcoholic
    glass
    ingredients
    instructions
    name
    reviews {
      _id
      writer
      stars
      content
    }
  }
}
`;

export const REMOVE_REVIEW = gql`
mutation removeReview($cocktailId: ID!, $reviewId:ID!) {
  removeReview(cocktailId: $cocktailId, reviewId: $reviewId) {
    _id
    alcoholic
    glass
    ingredients
    instructions
    name
    reviews {
      _id
      writer
      stars
      content
    }
  }
}
`;
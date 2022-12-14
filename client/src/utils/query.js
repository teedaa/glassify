import { gql } from "@apollo/client";


export const SEARCH = gql`
query searchCocktails($search: String){ 
  searchCocktails(search: $search) {
    name
    _id
    alcoholic
    image
  }
}
`;

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
import React from "react";
import { Nav } from "../components/Nav";
import { useQuery, useMutation } from '@apollo/client';
import { SEARCH_SINGLE_COCKTAIL, USER } from '../utils/mutations'
import Auth from '../utils/auth';
  
  export function Homepage() {
    const {loading: singleCocktailLoading, data: singleCocktailData} = useQuery(SEARCH_SINGLE_COCKTAIL, {
      variables: {cocktailId: "639545138287f783c134f05c"} //replace hard coded id with variable that comes from the params
    });
    
    if(singleCocktailLoading) {
      console.log("singleCocktailData is loading")
    } else {
      console.log(singleCocktailData);
    }

    const {loading: currentUserLoading, data: currentUserData} = useQuery(USER)
    if(Auth.loggedIn()) {
      if(currentUserLoading) {
        console.log("currentUserData is loading")
      }
      
      if(!currentUserLoading) {
        console.log(currentUserData);
      }
    } else {
      console.log("to see user data, log in")
    }

    const [saveCocktail, {error: saveError, data: saveData}]

    return (
        <>
        <Nav />

        </>
    )
  }
import React from "react";
import { Nav } from "../components/Nav";
import { useQuery, useMutation } from '@apollo/client';
import { SEARCH_SINGLE_COCKTAIL, USER, SAVE_COCKTAIL, REMOVE_COCKTAIL, ADD_REVIEW, REMOVE_REVIEW } from '../utils/mutations'
import Auth from '../utils/auth';
import {SearchBar} from "../components/SearchBar"
import { Footer }  from "../components/Footer";
  
  
  export function Homepage() {

    // ------------------ SINGLE COCKTAIL BY ID QUERY ------------------
    const {loading: singleCocktailLoading, data: singleCocktailData} = useQuery(SEARCH_SINGLE_COCKTAIL, {
      variables: {cocktailId: "639545138287f783c134f05c"} //replace hard coded id with variable that comes from the params
    });
    
    if(singleCocktailLoading) {
      console.log("singleCocktailData is loading")
    } else {
      console.log(singleCocktailData);
    }

    // ------------------ CURRENT USER DATA QUERY ------------------

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

    // ------------------ SAVE COCKTAIL TO LOGGED IN USER MUTATION ------------------

    const [saveCocktail, {error: saveError, data: saveData}] = useMutation(SAVE_COCKTAIL);

    const saveCocktailFunction = async (cocktailId) => {
      const { data } = await saveCocktail({
        variables: {
          cocktailId
        }
      });

      console.log( "saved drink mutation returns => ", data);
    }

    if(Auth.loggedIn()) {
      // saveCocktailFunction("63954552ead381f1df602e16"); //eventually replace the hard coded string with the cocktail ID we want to save to logged in user
    }

    // ------------------ REMOVE COCKTAIL FROM LOGGED IN USER MUTATION

    const [removeCocktail, {error: removeError, data: removeData}] = useMutation(REMOVE_COCKTAIL);

    const removeCocktailFunction = async (cocktailId) => {
      const { data } = await removeCocktail({
        variables: {
          cocktailId
        }
      });

      console.log( "removed drink mutation returns => ", data);
    }

    if(Auth.loggedIn()) {
      // removeCocktailFunction("63954552ead381f1df602e16"); //eventually replace the hard coded string with the cocktail ID we want to remove from logged in user
    }

    // ------------------ ADD REVIEW TO COCKTAIL BY ID ------------------

    const [addReview, {error: addReviewError, data: addReviewData}] = useMutation(ADD_REVIEW);

    const addReviewFunction = async (cocktailId, content, stars) => {
      const { data } = await addReview({
        variables: {
          cocktailId,
          content,
          stars
        }
      });

      console.log( "add review mutation returns => ", data);
    }

    if(Auth.loggedIn()) {
      // addReviewFunction("63954552ead381f1df602e16", "this drink is hella dope", 5); //eventually replace the hard coded data with variables
    }

    // ------------------ REMOVE REVIEW FROM COCKTAIL BY ID ------------------

    const [removeReview, {error: removeReviewError, data: removeReviewData}] = useMutation(REMOVE_REVIEW);

    const removeReviewFunction = async (cocktailId, reviewId) => {
      const { data } = await removeReview({
        variables: {
          cocktailId,
          reviewId
        }
      });

      console.log( "remove review mutation returns => ", data);
    }

    if(Auth.loggedIn()) {
      // removeReviewFunction("63954552ead381f1df602e16", "63978bb8ff02812beaf2d2ec"); //eventually replace the hard coded data with variables
    }

    return (
        <>

        <Nav />
          <Nav />
          <searchBar />
          {/* <button onClick={() => saveCocktailFunction("639544e9442c6c254d608e50")}> Save Cocktail Test</button> */}
          {/* <button onClick={() => removeCocktailFunction("63954552ead381f1df602e16")}> Remove Cocktail Test</button> */}
          {/* <button onClick={() => addReviewFunction("639544e9442c6c254d608e50", "not so good, wouldnt try unless being paid", 1)}> Add Review Test</button> */}
          {/* <button onClick={() => removeReviewFunction("63954552ead381f1df602e16", "63978f31ff02812beaf2d307")}> Remove Review Test</button> */}
        <Footer />
        </>
    )
  }
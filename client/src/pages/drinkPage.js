import React from "react";
import { Nav } from "../components/Nav";
import { useParams } from 'react-router-dom';
import { useQuery, useMutation } from '@apollo/client';
import { SEARCH_SINGLE_COCKTAIL, REMOVE_REVIEW } from "../utils/mutations";
import { Container } from '@mantine/core'
import { ReviewForm } from '../components/ReviewForm';
import Auth from "../utils/auth";
import { SingleDrink } from "../components/SingleDrink";



export function DrinkPage() {
    let { cocktailId } = useParams();

    const [removeReview, {error: removeReviewError, data: removeReviewData}] = useMutation(REMOVE_REVIEW);

    const handleRemoveReview = async (event, reviewId) => {
        event.preventDefault();
        try {
            const { data } = await removeReview({
                variables: {
                  cocktailId,
                  reviewId
                }
              });
            console.log(data);
        } catch (error) {
            console.error(error);
        }
    }

    const {loading: singleCocktailLoading, data: singleCocktailData} = useQuery(SEARCH_SINGLE_COCKTAIL, {
        variables: {cocktailId}
    });
      
    if(singleCocktailLoading) {
        console.log("singleCocktailData is loading")
    } else {
        console.log(singleCocktailData);
    }
    let ingredientsList;
    if(!singleCocktailLoading){
        ingredientsList = singleCocktailData.searchSingleCocktail.ingredients.map((ingredient, index) => <li key={index}>{ingredient}</li>)
    }

    let reviews;
    if(!singleCocktailLoading){
        reviews = singleCocktailData.searchSingleCocktail.reviews.map((review, index) => {
            let filledStarsCount = review.stars;
            let unfilledStarsCount = 5 - filledStarsCount;
            let filledStars = [];
            let unfilledStars = [];
            for(let i = 0; i < filledStarsCount; i++){
                filledStars.push(<span key={`filled ${i + 1}`} className="fa fa-star checked"></span>)
            }
            for(let i = 0; i < unfilledStarsCount; i++){
                unfilledStars.push(<span key={`unfilled ${i + 1}`} className="fa fa-star"></span>)
            }

            return(
                <Container key={index} size="xs">
                    <h3>Reviewers Name: {review.writer}</h3>
                    <h3>Stars: {filledStars}{unfilledStars}</h3>
                    <p><b>Review Text:</b> {review.content}</p>
                    { Auth.loggedIn() ? (
                        Auth.getProfile().data.username === review.writer ? (
                            <button onClick={(event) => {handleRemoveReview(event, review._id)}}>Delete your review</button>
                        ) : (
                            <b>This review is from another user</b>
                        )

                    ) : (
                        <></>
                    )}
                </Container>
            )
        })
    }

    return(
        <>
            <Nav/>
            {singleCocktailLoading ? (
                <Container>
                    Cocktail Data is loading
                </Container>

            ) : (
                <>
                    <Container>
                       
                        <SingleDrink></SingleDrink>
 
                    </Container>
                    <Container>
                        <h2>Reviews area</h2>

                        {reviews}
                    </Container>
                    <Container>
                        <h2>Create Review area</h2>
                        <ReviewForm />
                        
                    </Container>
                </>
            )}
        </>
    )
}
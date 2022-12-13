import React from "react";
import { Nav } from "../components/Nav";
import { useParams } from 'react-router-dom';
import { useQuery, useMutation } from '@apollo/client';
import { SEARCH_SINGLE_COCKTAIL, REMOVE_REVIEW } from "../utils/mutations";
import { Card, Container, Button } from '@mantine/core'
import { ReviewForm } from '../components/ReviewForm';
import Auth from "../utils/auth";
import { SingleDrink } from "../components/SingleDrink";
import { Footer } from "../components/Footer";
import { Portal } from '@mantine/core';




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
                    <h3>From: {review.writer}</h3>
                    <h3>Stars: {filledStars}{unfilledStars}</h3>
                    <p><b>Review:</b> {review.content}</p>
                    { Auth.loggedIn() ? (
                        Auth.getProfile().data.username === review.writer ? (
                            <Button className="submit-button" onClick={(event) => {handleRemoveReview(event, review._id)}}>Delete your review</Button>
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
                    <br></br>
                    <Container>
                    <Card shadow="sm" p="lg" radius="md" withBorder>
                        <h2 className="text">Reviews area</h2>

                        <div className="text">{reviews}</div>
                        </Card>
                    </Container>
                    
                    <Container>
                        <h2 className="text">Create Review area</h2>
                        {Auth.loggedIn() ? (
                            <ReviewForm />
                        ) : (
                            <h2 className="text">You must be logged in to leave a review</h2>
                        )}
                        
               
                    </Container>
                    <Portal>
                    <Footer />
                    </Portal>
                </>
            )}
        </>
    )
}
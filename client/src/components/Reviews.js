import React from 'react';
import { REMOVE_REVIEW } from "../utils/mutations";
import { Card, Container, Button } from '@mantine/core'
import { useMutation } from '@apollo/client';
import Auth from "../utils/auth";

export function Reviews ({cocktailId, singleCocktailLoading, singleCocktailData}) {

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
        } catch (error) {
            console.error(error);
        }
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
                <>
                    <br></br>
                <Card shadow="sm" p="lg" radius="md" withBorder key={index}>

                    <h3>From: {review.writer}</h3>
                    <h4>Stars: {filledStars}{unfilledStars}</h4>
                    <p> {review.content}</p>
                    { Auth.loggedIn() ? (
                        Auth.getProfile().data.username === review.writer ? (
                            <Button className='submit-button' onClick={(event) => {handleRemoveReview(event, review._id)}}>Delete review</Button>
                            ) : (
                                <b>This review is from another user</b>
                                )
                                
                                ) : (
                                    <></>
                                    )}
                </Card>
                </>
                
                )
        })
    }
    return (
        
            <Card shadow="sm" p="lg" radius="md" withBorder>
                <h2 className="reviews-title text">Reviews</h2>

                <div className="text">{reviews}</div>
            </Card>
        
    )
}
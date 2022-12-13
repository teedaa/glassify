import React from 'react';
import { useMutation } from '@apollo/client';
import { REMOVE_REVIEW } from "../utils/mutations";

export function Reviews ({cocktailId}) {

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
                    <h3>Reviewers Name: {review.writer}</h3>
                    <h3>Stars: {filledStars}{unfilledStars}</h3>
                    <p><b>Review Text:</b> {review.content}</p>
                    { Auth.loggedIn() ? (
                        Auth.getProfile().data.username === review.writer ? (
                            <Button onClick={(event) => {handleRemoveReview(event, review._id)}}>Delete your review</Button>
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
}
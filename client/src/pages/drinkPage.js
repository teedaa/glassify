import React from "react";
import { Nav } from "../components/Nav";
import { useParams } from 'react-router-dom';
import { useQuery, useMutation } from '@apollo/client';
import { SEARCH_SINGLE_COCKTAIL, REMOVE_REVIEW } from "../utils/mutations";
import { Card, Container, Button, BackgroundImage } from '@mantine/core'
import { ReviewForm } from '../components/ReviewForm';
import Auth from "../utils/auth";
import { SingleDrink } from "../components/SingleDrink";
import { Footer } from "../components/Footer";
import { Portal } from '@mantine/core';
import { Reviews } from '../components/Reviews'




export function DrinkPage() {
    let { cocktailId } = useParams();

    const {loading: singleCocktailLoading, data: singleCocktailData} = useQuery(SEARCH_SINGLE_COCKTAIL, {
        variables: {cocktailId}
    });

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
                        <Reviews cocktailId={cocktailId} singleCocktailLoading={singleCocktailLoading} singleCocktailData={singleCocktailData} />
                    </Container>
                    <br></br>

                    <Container>
                    <Card shadow="sm" p="lg" radius="md" withBorder className="boxes">
                        <>
                            <h2 className="text">Leave a review</h2>
                            {Auth.loggedIn() ? (
                                <ReviewForm />
                                ) : (
                                    <h2 className="text">You must be logged in to leave a review</h2>
                                    )}
                        </>
                    </Card>
                    </Container>
                    
                    <Portal>
                    <Footer />
                    </Portal>
                </>
            )}
        </>
    )
}
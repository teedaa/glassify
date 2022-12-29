import React from "react";
import { Nav } from "../components/Nav";
import { useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { SEARCH_SINGLE_COCKTAIL } from "../utils/query";
import { Card, Container } from "@mantine/core";
import { ReviewForm } from "../components/ReviewForm";
import Auth from "../utils/auth";
import { SingleDrink } from "../components/SingleDrink";
import { Footer } from "../components/Footer";
import { Reviews } from "../components/Reviews";
import { Center } from "@mantine/core";

export function DrinkPage() {
  let { cocktailId } = useParams();

  const { loading: singleCocktailLoading, data: singleCocktailData } = useQuery(
    SEARCH_SINGLE_COCKTAIL,
    {
      variables: { cocktailId },
    }
  );

  return (
    <div id="page-container">
    <div id="content-wrap">
      <Nav />
      {!singleCocktailData && !singleCocktailData ? (
        <Container>
          <Center>Cocktail Data not found or loading...</Center>
        </Container>
      ) : (
        <>
          <Container id="main-box">
            <SingleDrink></SingleDrink>
          </Container>
          <br></br>

          <Container>
            <Reviews
              cocktailId={cocktailId}
              singleCocktailLoading={singleCocktailLoading}
              singleCocktailData={singleCocktailData}
            />
          </Container>
          <br></br>

          <Container>
            <Card shadow="sm" p="lg" radius="md" withBorder className="boxes">
              <>
                <h2 className="text">Leave a review</h2>
                {Auth.loggedIn() ? (
                  <ReviewForm />
                ) : (
                  <h2 className="text">
                    You must be logged in to leave a review
                  </h2>
                )}
              </>
            </Card>
          </Container>

          
        </>
      )}
      </div>
      <Footer />
    </div>

  );
}

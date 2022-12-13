import { Card, Text,  Group } from '@mantine/core';
import { useQuery } from '@apollo/client';
import { useParams } from 'react-router-dom';
import { SEARCH_SINGLE_COCKTAIL } from "../utils/mutations";
import { Center } from '@mantine/core';

export function SingleDrink() {
    let { cocktailId } = useParams();


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
  return (

    <Card shadow="sm" p="lg" radius="md" withBorder>
      <Card.Section>
        <br></br>
         <Center><img src={singleCocktailData.searchSingleCocktail.image} alt={singleCocktailData.searchSingleCocktail.name} height="250"></img></Center>
      </Card.Section>


        <Center>
        <Text weight={600} size="xl">{singleCocktailData.searchSingleCocktail.name}</Text>
        </Center>

      

      <Text size="md" >
        <h4>Type: {singleCocktailData.searchSingleCocktail.alcoholic}</h4>
        <h4>Glass: {singleCocktailData.searchSingleCocktail.glass}</h4>
        <Text weight={600}>Ingredients:</Text>
        <ul>
            <li>{ingredientsList}</li>
        </ul>
        <Text weight={600}>Instructions:</Text>
        <p>
            {singleCocktailData.searchSingleCocktail.instructions}
            </p> 
      </Text>

    </Card>
  );
}
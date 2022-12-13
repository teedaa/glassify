import React from 'react';
import { useMutation } from '@apollo/client';
import { SAVE_COCKTAIL } from '../utils/mutations';
import { Button } from '@mantine/core';

export function SaveButton({cocktailId}){
    const [saveCocktail, {error: saveError, data: saveData}] = useMutation(SAVE_COCKTAIL);

    const saveCocktailFunction = async () => {
      const { data } = await saveCocktail({
        variables: {
          cocktailId
        }
      });

      console.log( "saved drink mutation returns => ", data);
    }

    return (
        <Button onClick={saveCocktailFunction}>Save Cocktail</Button>
    )
}
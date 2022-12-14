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
    }

    return (
        <Button className="submit-button" onClick={() => saveCocktailFunction()}>Save Cocktail</Button>
    )
}
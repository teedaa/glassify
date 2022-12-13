import React from 'react';
import { useMutation } from '@apollo/client';
import { REMOVE_COCKTAIL } from '../utils/mutations';
import { Button } from '@mantine/core';

export function RemoveButton({cocktailId}){
    const [removeCocktail, {error: removeError, data: removeData}] = useMutation(REMOVE_COCKTAIL);

    const removeCocktailFunction = async () => {
      const { data } = await removeCocktail({
        variables: {
          cocktailId
        }
      });
    }

    return (
        <Button onClick={() => removeCocktailFunction()}>Remove Cocktail</Button>
    )
}
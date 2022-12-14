import { TextInput, Button, Box, Container } from '@mantine/core';
import { useForm } from '@mantine/form';
import React, { useEffect, useState } from 'react';
import { SEARCH } from '../utils/query';
import { useLazyQuery } from '@apollo/client';
import Auth from '../utils/auth';
import { SavedDrinkCard } from './SavedDrinkCard';



export function SearchBar() {

  const [getCocktails, {loading, data}] = useLazyQuery(SEARCH)
  const [searched, setSearched] = useState(false)

  const form = useForm({
    initialValues: {
      search: '',
    },

  });

  const submitHandler = async (values) => {
    setSearched(true);
    console.log(values)
    await getCocktails({
      variables: {
        search: values.search.trim()
      }
    });
  }

  console.log(data)
  
  return (
    <Container>
      <Box sx={{ maxWidth: 300 }} mx="auto">
        <form onSubmit={form.onSubmit(async (values) => await submitHandler(values))}>
          <TextInput
            label="Cocktail search"
            placeholder="Cocktail name"
            {...form.getInputProps('search')}
          />

          
            <Button className="submit-button search-button" type="submit">Search</Button>
          
        </form>
      </Box>
      <br></br>
      {(!searched || !data) ? (
        <h2>Search to find cocktails!</h2>
      ) : (
        <div className="searched-drinks-container">
          {data?.searchCocktails.length !== 0 ? (
            <>
              {data.searchCocktails.map((cocktail) => (
                <div className="searched-drink">
                  <SavedDrinkCard cocktail={cocktail} />
                </div>
              ))}
            </>
          ) : (
            <h2>No cocktails found, try something else</h2>
          )}
        </div>
      )}
    </Container>

  );

};


  
import { TextInput, Checkbox, Button, Group, Box } from '@mantine/core';
import { useForm } from '@mantine/form';
import { useToggle } from '@mantine/hooks';
import { useMutation } from '@apollo/client';
import React from 'react';



export function SearchBar() {

    const form = useForm({
    initialValues: {
      search: '',
      
    },

  });

  return (
    <Box sx={{ maxWidth: 300 }} mx="auto">
      <form onSubmit={form.onSubmit((values) => console.log(values))}>
        <TextInput
          label="Cocktail search"
          placeholder="Cocktail name"
          {...form.getInputProps('search')}
        />

        <Group position="right" mt="md">
          <Button type="submit">Submit</Button>
        </Group>
      </form>
    </Box>
  );

};


  
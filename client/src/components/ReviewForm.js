import React from "react";
import { Button, Group, Box, Textarea } from '@mantine/core';
import { useForm } from '@mantine/form';
import ReactStars from "react-rating-stars-component";
import { useParams } from 'react-router-dom';
import { useMutation } from "@apollo/client";
import { ADD_REVIEW } from "../utils/mutations";

export function ReviewForm() {
  let { cocktailId } = useParams();
  const [addReview, {error: addReviewError, data: addReviewData}] = useMutation(ADD_REVIEW);

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    try {
      const { data } = await addReview({
        variables: {
          cocktailId,
          content: form.values.content,
          stars: form.values.stars
        }
      });
      console.log(data)
    } catch (error) {
      console.error(error);
    }
  }

  const form = useForm({
    initialValues: {
      content: '',
      stars: 1
    },

    validate: {
      content: (value) => (value.length < 3 ? "Comment must contain at least 3 characters" : null ),
    },
  });

  return (
    <Box sx={{ maxWidth: 300 }} mx="auto">
      <form onSubmit={form.onSubmit((values, event)=> { handleFormSubmit(event); })}>

        <Textarea
          withAsterisk
          label="Review"
          placeholder="Review Text"
          {...form.getInputProps("content")}
        />

        <ReactStars 
          count={5}
          size={30}
          {...form.getInputProps("stars")}
        />

        <Group position="right" mt="md">
          <Button type="submit">Submit</Button>
        </Group>
      </form>
    </Box>
  );
}
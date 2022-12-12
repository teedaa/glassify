import { Input } from '@mantine/core';

function Search() {
  return (
    <Input
      placeholder="Search for a product"
      styles={(theme) => ({
        input: {
          '&:focus-within': {
            borderColor: theme.colors.orange[7],
          },
        },
      })}
    />
  );
}

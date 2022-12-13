import { Input } from '@mantine/core';
import { Button } from '@mantine/core';
import { useToggle } from '@mantine/hooks';
import { useForm } from '@mantine/form';
import { useMutation } from '@apollo/client';



export function SearchBar() {

  // const [type, toggle] = useToggle(['search']);
  // const form = useForm({


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
};


// export function SearchBar() {
//     return (
//       <>
//         <Button variant="gradient" gradient={{ from: 'teal', to: 'blue', deg: 60 }}>Teal blue</Button>
//             </>
//     );
//   };
import {
    Header,
    Group,
    Button,
    Box,
  } from '@mantine/core';
  import Logo from '../images/glassifylogo.png'

  
 
  
  export function Homepage() {
  

    return (
      <Box pb={120}>
        <Header height={60} px="md">
          <Group position="apart" sx={{ height: '100%' }}>
            <img src={Logo} alt="Glassfiy logo" className='logo'/>
            <Group >
              <Button variant="default">Log in</Button>
              <Button>Sign up</Button>
            </Group>
  
          </Group>
        </Header>
      </Box>
    );
  }
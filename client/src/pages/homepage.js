import {
    Header,
    Group,
    Button,
    Box,
  } from '@mantine/core';
  import Logo from '../images/glassifylogo.png'
import { Link } from 'react-router-dom'
  
 
  
  export function Homepage() {
  

    return (
      <Box pb={120}>
        <Header height={60} px="md">
          <Group position="apart" sx={{ height: '100%' }}>
            <img src={Logo} alt="Glassfiy logo" className='logo'/>
            <Group >     
            <Link to="/login">
              <Button variant="default">Log in</Button>
            </Link>
            <Link to="/login" >
              <Button>Sign up</Button>
            </Link>
            </Group>
  
          </Group>
        </Header>
      </Box>
    );
  }
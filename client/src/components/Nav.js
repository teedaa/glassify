import { Header, Group, Button, Box } from "@mantine/core";
import Logo from "../images/glassifylogo.png";
import { Link } from "react-router-dom";
import Auth from "../utils/auth";
<<<<<<< HEAD
import { Flex } from '@mantine/core'
=======
>>>>>>> ad542ba983480ea41868263fc27276c3dcee0748

export function Nav() {
  const logout = (event) => {
    event.preventDefault();
    Auth.logout();
  };
  return (
<<<<<<< HEAD
    <Box pb={120}>
      <Header height={60} px="md">
        <Group position="apart" sx={{ height: "100%" }}>    
          <img src={Logo} alt="Glassfiy logo" className="logo"  />
          <Group>
            {Auth.loggedIn() ? (
              <Button variant="default" onClick={logout}>Sign Out</Button>
            ) : (
              <Link to="/login">
                <Button variant="default">Log In</Button>
              </Link>
            )}
          </Group>
=======
    <Header height={60} px="md">
      <Group position="apart" sx={{ height: "100%" }}>
        <img src={Logo} alt="Glassfiy logo" className="logo" />
        <Group>
          {Auth.loggedIn() ? (
            <Button variant="default" onClick={logout}>
              Sign Out
            </Button>
          ) : (
            <Link to="/login">
              <Button variant="default">Log In</Button>
            </Link>
          )}
>>>>>>> ad542ba983480ea41868263fc27276c3dcee0748
        </Group>
      </Group>
    </Header>
  );
}

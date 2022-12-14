import { useState } from 'react';
import Auth from '../utils/auth';
import { useToggle, upperFirst } from '@mantine/hooks';
import { useForm } from '@mantine/form';
import {
  TextInput,
  PasswordInput,
  Text,
  Paper,
  Group,
  Button,
  Anchor,
  Stack,
} from '@mantine/core';
import { useMutation } from '@apollo/client';

import { LOGIN_USER, CREATE_USER } from "../utils/mutations";




export function AuthenticationForm(props) {
  const [invalidCredentials, setInvalidCredentials] = useState(false);

  const [type, toggle] = useToggle(['login', 'register']);

  
  const [login, { error: loginError, data: loginData }] = useMutation(LOGIN_USER);
  const [register, { error: registerError, data: registerData }] = useMutation(CREATE_USER);
  const form = useForm({
    initialValues: {
      username: '',
      password: '',
    },

    validate: {
      username: (val) => (val.length <= 4 ? 'Invalid username' : null),
      password: (val) => (/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/.test(val) ? null : 'Invalid password'),
    },
  });


  const handleFormSubmit = async (event) => {
    event.preventDefault();
      if (type === 'login') {
        try {
          const { data } = await login({
            variables: {
              username: form.values.username,
              password: form.values.password
            }
          });
          // if token is invalid, display text somewhere that the user provided doesnt exist
          Auth.login(data.login.token);
        } catch (e) {
          setInvalidCredentials(true);
          // console.error(e);
        }
      } else if (type === 'register') {
        try {
          const { data } = await register({
            variables: {
              username: form.values.username,
              password: form.values.password
            }
          });
          // if token is invalid, display text somewhere that the user provided doesnt exist
          Auth.login(data.createUser.token);
        } catch (e) {
          // console.error(e);
        }
      } 
    
    }
  
  return (
    <div>
    <Paper radius="md" p="xl" withBorder {...props}>
      <Text size="lg" weight={500}>
        Welcome to Glassify, please {type} 
      </Text>

      {invalidCredentials ? (
        <h2 className='invalid-credentials'>Invalid Credentials</h2>
      ) : (
        <h2 className='invalid-credentials visibility-hidden'>Invalid Credentials</h2>
      )}


      <form onSubmit={form.onSubmit((values, event)=> { handleFormSubmit(event); })}>
        <Stack>
  

          <TextInput
            required
            label="Username"
            placeholder="Glassify User"
            value={form.values.username}
            onChange={(event) => form.setFieldValue('username', event.currentTarget.value)}
            error={form.errors.username && 'Username must be at least 4 characters.'}
          />

          <PasswordInput
            required
            label="Password"
            placeholder="Your password"
            value={form.values.password}
            onChange={(event) => form.setFieldValue('password', event.currentTarget.value)}
            error={form.errors.password && 'Password requires minimum eight characters, at least one letter, one number, and one special character. (Special characters include @$!%*#?&)'}
          />

          
        </Stack>

        <Group position="apart" mt="xl">
          <Anchor
            component="button"
            type="button"
            color="dimmed"
            onClick={() => toggle()}
            size="xs"
          >
            {type === 'register'
              ? 'Already have an account? Login'
              : "Don't have an account? Register"}
          </Anchor>
          <Button className="submit-button" type="submit">{upperFirst(type)}</Button>
        </Group>
      </form>
    </Paper>
    </div>
  );
}

import './App.css';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthenticationForm } from './pages/loginPage';
import { Homepage } from './pages/homepage';
import { DrinkPage } from './pages/drinkPage';
const httpLink = createHttpLink({
  uri: '/graphql'
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem('id_token');

  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : ''
    }
  }
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache()
})

// import a home page
// import a header
// import login
// import signup
// import singleCocktailView
// import searchCocktails
// import savedCocktails

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <Routes>
          <Route
          path="/"
          element={<Homepage />}
          />

          <Route 
          path="/login" 
          element={<AuthenticationForm />}
          />

          <Route 
          path="/cocktail/:cocktailId"
          element={<DrinkPage />}
          />

        </Routes>
      </Router>
    </ApolloProvider>
  );
}

export default App;

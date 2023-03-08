import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { Bio, Items, Login, Profile, Skills, Spells } from './pages';
import './App.css';
import AuthUtil from './utils/auth';

// const client = new ApolloClient({
//   request: operation => {
//     const token = localStorage.getItem('id_token');

//     operation.setContext({
//       headers: {
//         authorization: token ? `Bearer ${token}` : ''
//       }
//     })
//   },
//   uri: '/graphql'
// });

const httpLink = createHttpLink({
  uri: '/graphql',
});

const authLink = setContext((_, { headers }) => {
  const token = AuthUtil.getToken();

  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  }
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
})

const App = () => {
  return (
    <ApolloProvider client={client}>
      <Router>
        <div className="pages">
          <Routes>
            <Route 
              path="/" 
              element={<Login />}
            />
            <Route 
              path="/profile" 
              element={<Profile />}
            />
            <Route 
              path="/bio" 
              element={<Bio />}
            />
            <Route 
              path="/items" 
              element={<Items />}
            />
            <Route 
              path="/Skills" 
              element={<Skills />}
            />
            <Route 
              path="/spells"
              element={<Spells />}
            />
          </Routes>
        </div>
      </Router>
    </ApolloProvider>
  );
}

export default App;
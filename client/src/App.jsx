import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { Bio, Items, Login, Profile, Skills, Spells } from './pages';
import { Navbar } from './components/navbar/Navbar';
import './App.css';


const App = () => {
  return (
    <Router>
      <div className="flex-row justify-center align-center min-100-vh">
        <Routes>
          <Route 
            path="/login" 
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
  );
}

export default App;
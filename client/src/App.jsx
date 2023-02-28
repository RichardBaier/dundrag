import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Bio, Items, Login, Profile, Skills, Spells } from './pages';
import { Navbar } from './components/navbar/Navbar';
import './App.css';


const App = () => {
  return (
    <Router>
      <div className="flex-row justify-center align-center min-100-vh">
        <Navbar />
        <Routes>
          <Route 
            path="/profile" 
            element={<Profile />}
          />
          <Route 
            path="/login" 
            element={<Login />}
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
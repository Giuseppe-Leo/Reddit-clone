import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from "./components/Navbar/NavBar";


function App() {
  return (
    <Router>
      <div>
        
        <Routes>
          <Route exact path="/" element={<NavBar />} />
          {/* Add more routes as needed */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;

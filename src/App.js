import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomeScreen from './screens/HomeScreen/HomeScreen';
import CreatePost from './screens/CreatePost/CreatePost';



function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<HomeScreen/>} />
          <Route path='/create' element={<CreatePost/>}/>
          {/* Add more routes as needed */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;


import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Blog from './pages/Blog';
import AboutUs from './pages/AboutUs';
import SignUp from './pages/SignUp';
import Support from './components/supportadmin/index.js'
import BlogItems from './pages/BlogItems'
function App() {
  return (
    <>
      <Router>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/blog' element={<Blog/>}/>
          <Route path='/blogitem/:id' element={<BlogItems/>} />
          <Route path='/aboutus' element={<AboutUs/>}/>
          <Route path='/signup' element={<SignUp/>}/>
          <Route path='/support' element={<Support/>}/>
        </Routes>
      </Router>
    </>
  );
}

export default App;

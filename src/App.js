
import './App.css';
import Nav from './components/header/Nav';
import Footer from './components/footer/Footer';
import Cards from './components/cards/Cards';
import Home from './components/home/Home';
import Records from './components/records/Records'
import {Routes,Route,} from 'react-router-dom';
import SignIn from './components/Auth/Signin/Signin'
import Signup from './components/Auth/Signup/Signup';
function App() {
  return (
    
    <div class="App">
     <Nav />
     <Routes>
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<Signup />} />
        <Route  path='/' element={<Home />} />
        <Route  path='/card' element={<Cards />} />
        <Route  path='/records' element={<Records/>} />
      </Routes>
    <Footer />
    </div>
  );
}

export default App;

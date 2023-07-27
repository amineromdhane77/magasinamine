
import './App.css';

import Navesss from './component/Navesss';
import {Routes, Route} from 'react-router-dom';
import Home from './component/Home';
import Menu from './component/Menu';
import About from './component/About';
import Contact from './component/Contact';
import Footer from './component/Footer';

function App() {
  return (
    <div>
   <Navesss/>
   <Routes>
    <Route path='home' element={<Home/>}/>
    <Route path='menu' element={<Menu/>}/>
    <Route path='about' element={<About/>}/>
    <Route path='contact' element={<Contact/>}/>
    
   
    </Routes>
    <Footer/>
    </div>
  );
}

export default App;

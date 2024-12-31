import './App.css'
import './assets/css/NavBar.css';
import Home from './componentss/function/Home';
import About from './componentss/function/about';
import Contact from './componentss/function/contact';
import Gallery from './componentss/function/gallery';
import NavBar from './componentss/function/navbar';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import './assets/css/Contact.css';
function App() {
 

  return (
   <div>
    <BrowserRouter>
    <NavBar/>
    <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/about' element={<About college="kongu engineering " clg1="kongu arts" clg2 ="kongu naturopathy"/>}/>
    <Route path='/gallery' element={<Gallery/>}/>
    <Route path='/contact' element={<Contact name="Dhamayandhi.R" email="dhamayandhir.22cse@kongu.edu" contact="9344337350"/>}/>
    </Routes>
    </BrowserRouter>
      
    </div>
      
    
  );
}

export default App;
  


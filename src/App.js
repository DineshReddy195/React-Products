import './App.css';
import { Routes,Route } from 'react-router-dom';
import Home from './Components/Home';
import Profile from './Components/Profile';
import Products from './Components/Products';
import Nav from './Components/Nav';
import ProductDetails from './Components/ProductDetails';

function App() {
  return (
    <div className="App">
      <Nav/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/profile' element={<Profile/>} />
        <Route path='/products' element={<Products/>} />
        <Route path='/productdetails/:id' element={<ProductDetails/>}/>
      </Routes>
    </div>
  );
}

export default App;

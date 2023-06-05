import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './redux/components/Navbar'
import ProductList from './redux/components/ProductList';
import Router from './Router/Router';
function App() {
  return (
    <div className="App">
     <Navbar/>
     <Routes>
      <Route path="/" element={ <ProductList/>}/>
      <Route path="/cart" element={ <Router/>}/>
     </Routes>
     {/* <ProductList/> */}
    </div>
  );
}

export default App;

import './App.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Layout from './layout/Layout'
import About from './pages/About';
import Contacts from './pages/Contacts'
import Home from './pages/Home'
import SingleProduct from './pages/SingleProduct'
import AddProduct from './pages/AddProduct'

function App() {
  return (
    <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout/>}>
            <Route index element = {<Home/>}/>
            <Route path='about' element={<About/>}/>
            <Route path='addproduct' element={<AddProduct/>}/>
            <Route path='products/:id' element={<SingleProduct/>}/>
            <Route path='contacts' element={<Contacts/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
  );
}

export default App;

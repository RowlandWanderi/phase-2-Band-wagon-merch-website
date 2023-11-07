import './App.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Layout from './layout/Layout'
import About from './pages/About';
import Contacts from './pages/Contacts'
import Home from './pages/Home'
import UpdateProductPage from './pages/UpdateProductPage'
import AddProduct from './pages/AddProduct'
import ReviewProduct from './components/ReviewProduct';

function App() {
  return (
    <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout/>}>
            <Route index element = {<Home/>}/>
            <Route path='about' element={<About/>}/>
            <Route path='addproduct' element={<AddProduct/>}/>
            <Route path='products/:id' element={<UpdateProductPage/>}/>
            <Route path='reviews/:id' element={<ReviewProduct/>}/>
            <Route path='contacts' element={<Contacts/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
  );
}

export default App;

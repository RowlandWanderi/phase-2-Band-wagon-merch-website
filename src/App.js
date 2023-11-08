import './App.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Layout from './layout/Layout'
import About from './pages/About';
import Contacts from './pages/Contacts'
import Home from './pages/Home'
import UpdateProductPage from './pages/UpdateProductPage'
import AddProductPage from './pages/AddProductPage'
import ReviewProductPage from './pages/ReviewProductPage'
import ViewCart from './pages/ViewCart';

function App() {
  return (
    <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout/>}>
            <Route index element = {<Home/>}/>
            <Route path='about' element={<About/>}/>
            <Route path='addproduct' element={<AddProductPage/>}/>
            <Route path='products/:id' element={<UpdateProductPage/>}/>
            <Route path='reviews/:id' element={<ReviewProductPage/>}/>
            <Route path='contacts' element={<Contacts/>}/>
            <Route path='viewcart' element={<ViewCart/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
  );
}

export default App;


import './App.css';
import Home from './pages/Home'
import Detail from './pages/Detail'
import Msg from './Components/Msg'
import Cart from './pages/Cart'
import Allproducts from './pages/Allproducts'
import Categories_products from './Components/Categories_products'
import Signup from './pages/Signup'
import Login from './pages/Login'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import {CartContextProvider} from './Components/CartContext'
import Orders from './pages/Orders'
function App() {
  
  return (
   <CartContextProvider>
   <BrowserRouter>
   <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/Orders' element={<Orders/>}/>
    <Route path='/Msg' element={<Msg/>}/>
    <Route path='/Detail/:id' element={<Detail/>}/>
    <Route path='/Categories_products/:id' element={<Categories_products/>}/>
    <Route path='/Cart' element={<Cart/>}/>
    <Route path='/Signup' element={<Signup/>}/>
    <Route path='/Login' element={<Login/>}/>
    <Route path='/Allproducts' element={<Allproducts/>}/>

   </Routes>
   
   </BrowserRouter>
   </CartContextProvider>
  );
}
export default App;

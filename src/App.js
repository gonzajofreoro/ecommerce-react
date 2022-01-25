import './App.css';
import NavBar from './components/Navbar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import {CartProvider} from './context/CartContext';
import Cart from './components/Navbar/Cart';


function App() {
    return (
    <CartProvider>
        <BrowserRouter>
        <NavBar />
            <Routes>
            <Route path="/" element={ <ItemListContainer greeting="Bienvenidos" /> }/>
            <Route path="/categorias/:categoryId" element={ <ItemListContainer greeting="Bienvenidos" /> }/>
            <Route path="/producto/:itemId" element={ <ItemDetailContainer /> }/>
            <Route path="/cart" element={<Cart />} />
            </Routes>
        </BrowserRouter>
    </CartProvider>
);
}

export default App;

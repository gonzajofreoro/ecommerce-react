import React from 'react';
import { useContext } from 'react';
import { Link } from 'react-router-dom'
import { CartContext } from '../../context/CartContext';
import './Cart.css'


const Shop =()=>{
    const {cart, vaciarCarrito, removeItem, calcularTotal } = useContext(CartContext)
    console.log(cart)
    return( 
        <div className="card">
        {
            cart.length === 0 ? 
            <>
            <h2>No hay productos agregados</h2>
            <Link to="/" className="btn-back" >Ir a comprar</Link>
            </>
            : 
            <>
            <h2>Resumen de compra</h2>
                <hr/>
                {
                cart.map((item) => (
                    <>
                    <div key={item.id} className='cart-container'>
                    <div className='title-secundario'>
                        <strong>{item.title}</strong>
                            <p>Cantidad: {item.count}</p>
                            <p>Precio: $ {item.price * item.count}</p>
                    </div>
                        <div className='title-secundario'>
                            <button className="btn-cart"
                            onClick={() => removeItem(item.id)}>
                            Borrar producto
                            </button>
                        </div>
                    </div>
                <hr/>
                </>
                ))
                }
                    <h3>Precio total: $ {calcularTotal()}</h3>
                    <button className="btn-cart" onClick={vaciarCarrito}>
                    Vaciar carrito
                    </button>
                </>
        }
        </div>
    )
};

export default Shop;
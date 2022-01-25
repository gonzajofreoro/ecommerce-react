import React, {useState } from 'react';
import  {Link}  from 'react-router-dom';
import '../ItemDetail/ItemDetail.css'

const ItemCount = ({stock, onAdd}) => {
    const [count, setCount] = useState(1);

    return (
        <>
        <h1 className={count > stock ? "positive" : null}>
        {count}
        </h1>
        <div className="title-waring">
        <h2 className={count < stock ? "ocultar" : null}>No hay mas stock!</h2>
        </div>
        <div className="button__wrapper">
        <button onClick={() => count !== 0 && setCount(count - 1)}>-</button>
        <button onClick={() => count !== stock && setCount(count + 1)}>+</button>
        </div>
        <div className="cart-container">
            <Link to="/">
            <button className="btn-back">Volver</button>
            </Link>
            <button disabled={count ===0} onClick={()=>onAdd(count)} className="btn-cart">Agregar al Carrito</button>
            </div>
        </>
)
}

export default ItemCount
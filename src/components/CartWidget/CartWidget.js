import React, { useContext, useEffect  } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import './CartWidget.css';
import { CartContext } from '../../context/CartContext';

const CartWidget = () => {
    const {cart}= useContext(CartContext)
    const getTotalQuantity = (cart) => {
        let totalQ = 0;
        cart.map(element => {
            totalQ += element.count
        });
        return totalQ;
        
    }
useEffect(()=>{
        getTotalQuantity(cart)
    },[cart]
    )

    return (
        <>
        { getTotalQuantity(cart) > 0 ? (
        <div>
        <FontAwesomeIcon className='icon' icon={faShoppingCart} />
        <div color="secondary"><h6 style={{color:'darkGrey'}}>{getTotalQuantity(cart)}</h6></div>
        </div>) : null
        }
    </>
    )
}

export default CartWidget

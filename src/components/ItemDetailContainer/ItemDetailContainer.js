import React, {useState, useEffect, useContext } from 'react';
import ItemDetail from '../ItemDetail/ItemDetail';
import './ItemDetailContainer.css';
import  {useParams}  from 'react-router-dom';
import { CartContext } from '../../context/CartContext';
import {getFirestore, collection, getDocs} from '@firebase/firestore'

const ItemDetailContainer = () => {
    const [detailProduct, setDetailProduct] = useState({});
    const {itemId} = useParams();
    const [loader, setLoader] = useState(true);
    const {addToCart} = useContext (CartContext);
    const [goToCart, setGoToCart] = useState(false);


    useEffect(()=>{
        const db = getFirestore()
        const ref = collection(db, 'products')
        getDocs(ref).then((snapshot) => {
            const prod = snapshot.docs.map((doc) => {
                return {
                id: doc.id,
                ...doc.data(),
                };
            })
            const getDetailProduct = prod.find((i)=> i.id === 
            itemId); setDetailProduct(getDetailProduct)
        })

        .catch((error)=>
            console.log(error)
        )
        .finally(()=>
            setLoader(false)
        );

    },[]);

    const onAdd = (count)=>{
        addToCart(detailProduct, count)
        setGoToCart(true)
    };

    return (
        loader ? <h1>Loading...</h1> :
        
        <ItemDetail {...detailProduct} onAdd={onAdd} goToCart={goToCart} />
    );
};

export default ItemDetailContainer
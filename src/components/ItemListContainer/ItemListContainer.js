import React, {useState, useEffect} from 'react';
import ItemList from '../ItemList/ItemList';
import './ItemListContainer.css';
import  {useParams}  from 'react-router-dom';
import {getFirestore, collection, getDocs} from '@firebase/firestore'

const ItemListContainer = ({greeting}) => {
    const [products, setProducts] = useState([]);
    const {categoryId} =useParams();
    const [loader, setLoader] = useState(true);

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
            const filtrar = prod.filter((i)=> i.categoryId === `${categoryId}`);
            categoryId === undefined ? setProducts(prod) : setProducts(filtrar)
        })
        .catch((error)=>
            console.log(error)
        )
        .finally(()=>
            setLoader(false)
        );
    }, [categoryId]);
    
    console.log(categoryId)
    return ( loader ? <h1>Loading...</h1> :
        <div>
            <h1>{greeting}</h1>
        <section>
            <ItemList products ={products} />
        </section>
        </div>
    );
};

export default ItemListContainer
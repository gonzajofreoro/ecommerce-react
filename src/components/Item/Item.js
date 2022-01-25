import React from 'react';
import { Link } from 'react-router-dom';
import '../Item/Item.css'


export default function Item({ id, title, pictureUrl, stock, categoryId}) {
    return (
        <div className="card">
            <h1 className="title-card">{title}</h1>
            <img className="cardImg" src={pictureUrl} /> 
            <Link to={`/producto/${id}`}>
            <button className="btn-detail">Detalle del producto</button>
            </Link>
            <h2 className="title-stock">Stock: {stock}</h2> 
        </div>
    )
}

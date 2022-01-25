import './ItemDetail.css';
import ItemCount from '../ItemCount/ItemCount';
import { Link } from 'react-router-dom';


export default function ItemDetail({ id, title, pictureUrl, stock, price, onAdd, goToCart }) {
    return (
        <div className="card">
            <h1 className="title-card" key={id}>{title}</h1>
            <img className="cardImg" src={pictureUrl} /> 
            <h2 className="title-secundario">Selecciona la cantidad que deseas comprar:</h2>
            <h2 className="title-stock">Stock disponible {stock}</h2>
            <h2 className="title-stock">Capacidad: 120gb</h2>  
            <h2 className="title-stock">Precio $ {price}</h2>
            { goToCart ? 
            (<>
            <Link to="/cart"> Finalizar Compra</Link>
            </>)
            :
            (<ItemCount  stock={stock} onAdd={onAdd}/>)
            }
        </div>
    )
}

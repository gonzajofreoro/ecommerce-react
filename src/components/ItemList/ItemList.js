import React from 'react';
import Item from '../Item/Item';

const ItemList = ({ products }) => {

    return (
        <>
            {products?.map((item)=>(
                <Item {...item} key={item.id} />
                
            ))}
        </>
    );
};

export default ItemList
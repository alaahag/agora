import React from 'react';
import { observer } from 'mobx-react';

const Item = observer((props) => {
    const item = props.item;

    const buyItem = () => {
        props.store.buyItem(item.name);
    }

    const changePrice = () => {
        const price = prompt('Enter a new price');
        props.store.changePrice(item.name, price);
    }

    return (
        <div>
            <li onDoubleClick={changePrice}>
                <span>{item.quantity} {item.name} available at ${item.price} per item.</span>
                &nbsp;<button onClick={changePrice}>Change Price</button>
                &nbsp;<button onClick={buyItem}>Buy Item</button>
            </li>
        </div>
    )
});

export default Item
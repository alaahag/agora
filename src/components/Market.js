import React from 'react';
import { observer, inject } from 'mobx-react';
import Item from './Item';

const Market = observer((props) => {
    const addItem = (e) => {
        if (e.key === 'Enter') {
            props.store.addItem(e.target.value);
            e.target.value = "";
        }
    }

    return (
        <div>
            <h1>Agora Market</h1>
            <h6>Total items: {props.store.numItems}</h6>
            <input type="text" placeholder="Input a new item and press enter to add it" onKeyUp={addItem} />
            <ul>
                {props.store.item.map((m,index) => <Item key={index} store={props.store} item={m} />) }
            </ul>
        </div>
    )
});

export default inject("store")(Market);
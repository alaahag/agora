/* eslint-disable */
import { observable, action, makeObservable, computed } from 'mobx';
import { Item } from './Item';

export class Inventory {
    constructor() {
        this.item = [];
        this.length = 0;

        makeObservable(this, {
            item: observable,
            length: observable,
            addItem: action,
            buyItem: action,
            changePrice : action,
            numItems : computed
        });
    }

    addItem = (name, price = 0, quantity = 1) => {
        let index = this.item.findIndex(i => i.name === name);
        if (index === -1)
            this.item.push(new Item(name, price, quantity));
        else
            this.item[index].quantity += 1;
    }

    buyItem = (name) => {
        let item = this.item.find(i => i.name === name);
        if (item) {
            if (item.quantity === 0)
                this.item.splice(this.item.indexOf(item), 1);
            else
                item.quantity--;
        }
    }

    changePrice = (name, price) => {
        let item = this.item.find(i => i.name === name);
        if (item)
            item.price = price;
    }

    get numItems() {
        return this.item.length;
    }
}
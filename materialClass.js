import { Item } from './itemClass.js';

export class Material extends Item {
    constructor(name, descr, value, weight, factor) {
        super(name, descr, value, weight);
        this.factor = factor;
    }
}
import { Item } from './itemClass.js';
import { mat } from './materialInstances.js';

export class Weapon extends Item {
    constructor(name, descr, weight, material, buff, enchant, value, baseDmg, equip, crit) {
        super(name, descr, weight);
        this.mat = mat[material];
        this.buff = buff;
        this.enchant = enchant;
        this.value = value;
        this.baseDmg = baseDmg // damage
        this.equip = equip;
        this.crit = crit; // critical (special move)
    }
}
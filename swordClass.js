import { Weapon } from './weaponClass.js';
import { mat } from './materialInstances.js';

export class Sword extends Weapon {
    constructor(material, buff, enchant, name, descr, value, baseDmg, weight) {
        super(buff, enchant);
        this.material = mat[material];
        this.crit = 10;
        this.equip = 1;
        this.name = Boolean(name) != false ? name : mat[material].name + " sword";
        this.descr = Boolean(descr) != false ? descr : "a pointy slashy thing";
        this.value = Boolean(value) != false ? value : 100 * mat[material].factor;
        this.baseDmg = Boolean(baseDmg) != false ? baseDmg : 10 * mat[material].factor;
        this.weight = Boolean(weight) != false ? weight : 5;
    }
}
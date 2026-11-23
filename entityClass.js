class Entity {
    constructor(name, inv, silver) {
        this.name = name;
        this.inv = inv; // inventory
        this.silver = silver; // currency
        this.equipWeapon = equipWeapon();
        this.equipApparel = equipApparel();
        this.hp = hp; // hit points (health)
        this.ap = ap; // action point (fatigue)
        this.dmg = dmg; // damage (weapon strength)
        this.dt = dt; // damage threshold (armor strength)

        function equipWeapon() {
            this.inv.filter(object => object instanceof Weapon === true);
        }
    }
};
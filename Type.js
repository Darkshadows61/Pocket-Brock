//Type Objects
class PokeType{
    constructor(name, type, color, strong, weak, resist, immune) {
    this.name = name
    this.type = type
    this.img = img
    this.color = color
    this.strongAgainst = strong
    this.weakTo = weak
    this.resistantTo = resist
    this.immuneTo = immune
  }
}

let normal = new PokeType("Normal", 1, "grey", [none], [fighting], [none], [ghost])
let fire = new PokeType("Fire", 2, red, [grass, ice, bug, steel], [water, ground, rock], [fire], [none])
let water = new PokeType("Water", 3, blue, [fire, ground, rock],[grass, electric, ],[none],[none])
let electric = new PokeType("Electric", 4, yellow, [],[],[],[])
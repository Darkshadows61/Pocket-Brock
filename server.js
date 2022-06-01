//PokeType Constructor
class PokeType{
    constructor(name, color, strong, weak, resist, immune) {
    this.name = name
    this.color = color
    this.strongAgainst = strong
    this.weakTo = weak
    this.resists = resist
    this.immuneTo = immune
  }
}

//PokeType Objects
const opener = new PokeType('Select', 'clear', ['None'], ['None'], ['None'], ['None'])
const normal = new PokeType('Normal', '#ACAD99', ['Nothing'], [' Fighting'], [' None'], [' Ghost'])
const fire = new PokeType('Fire', '#E87A3D', [' Grass', ' Ice', ' Bug', ' Steel'], [' Water', ' Ground', ' Rock'], [' Fire', ' Grass', ' Ice', ' Bug', ' Steel', ' Fairy'], [' None'])
const water = new PokeType('Water',  '#639CE4', [' Fire', ' Ground', ' Rock'], [' Grass', ' Electric'], [' Fire', ' Water', ' Ice', ' Steel'], [' None'])
const grass = new PokeType('Grass', '#82C95B', [' Water', ' Ground', ' Rock'],[' Fire', ' Ice', ' Poison', ' Flying', ' Bug'], [' Water', ' Electric', ' Grass', ' Ground'], [' None'])
const electric = new PokeType('Electric', '#E7C536', [' Water', ' Flying'], [' Ground'], [' Electric', ' Flying', ' Steel'], [' None'])
const rock = new PokeType('Rock', '#BAA85E', [' Fire', ' Ice', ' Flying', ' Bug'], [' Grass', ' Water', ' Ground', ' Fighting', ' Steel'], [' Normal', ' Fire', ' Poison', ' Flying'], [' None'])
const poison = new PokeType('Poison', '#B369AF', [' Grass', ' Fighting'], [' Psychic', ' Ground'], [' Grass', ' Fighting', ' Poison', ' Bug', ' Fairy'], [' None'])
const psychic = new PokeType('Psychic', '#E96C95', [' Poison', ' Fighting'], [' Bug', ' Ghost', ' Dark'], [' Fighting', ' Psychic'], [' None'])
const ice = new PokeType('Ice', '#81CFD7', [' Dragon', ' Flying', ' Grass'], [' Fire', ' Rock', ' Fighting', ' Steel'], [' Ice'], [' None'])
const ground = new PokeType('Ground', '#CEB250', [' Fire',' Rock', ' Poison', ' Steel', ' Electric'], [' Grass', ' Water', ' Ice'], [' Poison', ' Rock'], [' Electric'])
const flying = new PokeType('Flying', '#90AAD7', [' Grass', ' Fighting', ' Bug'], [' Electric', ' Rock', ' Ice'], [' Grass', ' Fighting', ' Bug'], [' Ground'])
const fighting = new PokeType('Fighting', '#C45D4C', [' Rock', ' Ice', ' Dark', ' Steel'], [' Psychic', ' Flying', ' Fairy'], [' Bug', ' Rock', ' Dark'], [' None'] )
const bug = new PokeType('Bug', '#ACC23E', [' Grass', ' Psychic', ' Dark'], [' Fire', ' Flying', ' Rock'], [' Grass', ' Fighting', ' Ground'], [' None'])
const ghost = new PokeType('Ghost', '#816DB6', [' Psychic', ' Ghost'], [' Ghost', ' Dark'], [' Poison', ' Bug'], [' Normal', ' Fighting'])
const dragon = new PokeType('Dragon', '#8572C8', [' Dragon'], [' Ice', ' Dragon', ' Fairy'], [' Fire', ' Water', ' Electric', ' Grass'], [' None'])
const dark = new PokeType('Dark', '#79726B', [' Psychic', ' Ghost'], [' Fighting', ' Bug', ' Fairy'], [' Ghost', ' Dark'], [' Psychic'])
const steel = new PokeType('Steel', '#9FA9AF', [' Rock', ' Ice', ' Fairy'], [' Fire', ' Ground', ' Fighting'], [' Normal', ' Grass', ' Ice', ' Flying', ' Psychic', ' Bug', ' Rock', ' Dragon', ' Steel', ' Fairy'], [' Poison'])
const fairy = new PokeType('Fairy', '#E8B0EB', [' Fighting', ' Dragon', ' Dark'], [' Poison', ' Dark'], [' Fighting', ' Bug', ' Dark'], [' Dragon'])
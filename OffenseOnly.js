//Pocket Brock, now with Objects!

//Page Load
document.querySelector('#go').addEventListener('click', sortAtk);

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


//List Container
const typeName = [opener, normal, fire, water, grass, electric, rock, poison, psychic, ice, ground, flying, fighting, bug, ghost, dragon, dark, steel, fairy]

//Attack List
typeName.forEach(function(li){
    let option = document.createElement('option');
    option.value = li.name;
    option.innerHTML = li.name;
    selectorAttack.appendChild(option)
})
//Brock, what is this type Effective Against?
//IT WORKS!!!!!!!!!!!!!!!!!! (Will continue to monitor)
function sortAtk() {
    let atkType;
    let input = document.querySelector('#selectorAttack').value;
    if (input === 'Normal') {
        atkType = normal
    } else if (input === 'Fire') {
        atkType = fire
    } else if (input === 'Water') {
        atkType = water
    } else if (input === 'Grass') {
        atkType = grass
    } else if (input === 'Electric') {
        atkType = electric
    } else if (input === 'Rock') {
        atkType = rock
    } else if (input === 'Poison') {
        atkType = poison
    } else if (input === 'Psychic') {
        atkType = psychic
    } else if (input === 'Ice') {
        atkType = ice
    } else if (input === 'Ground') {
        atkType = ground
    } else if (input === 'Flying') {
        atkType = flying
    } else if (input === 'Fighting') {
        atkType = fighting
    } else if (input === 'Bug') {
        atkType = bug
    } else if (input === 'Ghost') {
        atkType = ghost
    } else if (input === 'Dragon') {
        atkType = dragon
    } else if (input === 'Dark') {
        atkType = dark
    } else if (input === 'Steel') {
        atkType = steel
    } else if (input === 'Fairy') {
        atkType = fairy
    }
    document.querySelector('#test').innerHTML = `${atkType.name} is strong against ${atkType.strongAgainst} and is weak to ${atkType.weakTo}. It resists ${atkType.resists} and has immunity to ${atkType.immuneTo}.`
    console.log(atkType.name, atkType.strongAgainst, atkType.weakTo, atkType.resists, atkType.immuneTo)
}
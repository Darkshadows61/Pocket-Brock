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
const opener = new PokeType('Select', 'clear', ['none'], ['none'], ['none'], ['none'])
const normal = new PokeType('Normal', 'grey', ['nothing'], ['fighting'], ['none'], ['ghost'])
const fire = new PokeType('Fire', 'orange', ['grass', 'ice', 'bug', 'steel'], ['water', 'ground', 'rock'], ['fire', 'grass', 'ice', 'bug', 'steel', 'fairy'], ['none'])
const water = new PokeType('Water',  'blue', ['fire', 'ground', 'rock'], ['grass', 'electric'], ['fire', 'water', 'ice', 'steel'], ['none'])
const grass = new PokeType('Grass', 'green', ['water', 'ground', 'rock'],['fire', 'ice', 'poison', 'flying', 'bug'], ['water', 'electric', 'grass', 'ground'], ['none'])
const electric = new PokeType('Electric', 'yellow', ['water', 'flying'], ['ground'], ['electric', 'flying', 'steel'], ['none'])
const rock = new PokeType('Rock', 'Tan', ['fire', 'ice', 'flying', 'bug'], ['grass', 'water', 'ground', 'fighting', 'steel'], ['normal', 'fire', 'poison', 'flying'], ['none'])
const poison = new PokeType('Poison', 'Purple', ['Grass', 'Fighting'], ['Psychic', 'Ground'], ['grass', 'fighting', 'poison', 'bug', 'fairy'], ['none'])
const psychic = new PokeType('Psychic', 'pink', ['poison', 'fighting'], ['bug', 'ghost', 'dark'], ['fighting', 'psychic'], ['none'])
const ice = new PokeType('Ice', 'Cyan', ['Dragon', 'Flying', 'Grass'], ['Fire', 'Rock', 'Fighting', 'Steel'], ['ice'], ['none'])
const ground = new PokeType('Ground', 'Brown', ['Fire', , 'Rock', 'Poison', 'Steel', 'Electric'], ['Grass', 'Water', 'Ice'], ['poison', 'rock'], ['Electric'])
//Electric added to both strong against and immune array
const flying = new PokeType('Flying', 'Light Blue', ['Grass', 'Fighting', 'Bug'], ['Electric', 'Rock', 'Ice'], ['grass', 'fighting', 'bug'], ['ground'])
const fighting = new PokeType('Fighting', 'Red', ['Rock', 'Ice', 'Dark', 'Steel'], ['Psychic', 'Flying', 'Fairy'], ['bug', 'rock', 'dark'], ['none'] )
const bug = new PokeType('Bug', 'Green', ['Grass', 'Psychic', 'Dark'], ['Fire', 'Flying', 'Rock'], ['grass', 'fighting', 'ground'], ['none'])
const ghost = new PokeType('Ghost', 'Lavender', ['Psychic', 'Ghost'], ['Ghost', 'Dark'], ['poison', 'bug'], ['normal', 'fighting'])
const dragon = new PokeType('Dragon', 'Blue', ['Dragon'], ['Ice', 'Dragon', 'Fairy'], ['fire', 'water', 'electric', 'grass'], ['none'])
const dark = new PokeType('Dark', 'Black', ['Psychic', 'Ghost'], ['Fighting', 'Bug', 'Fairy'], ['ghost', 'dark'], ['psychic'])
//got called to an intubation, couldn't remember if dark is completely immune to psychic
const steel = new PokeType('Steel', 'Gray', ['Rock', 'Ice', 'Fairy'], ['Fire', 'Ground', 'Fighting'], ['normal', 'grass', 'ice', 'flying', 'psychic', 'bug', 'rock', 'dragon', 'steel', 'fairy'], ['poison'])
const fairy = new PokeType('Fairy', 'Pink', ['Fighting', 'Dragon', 'Dark'], ['Poison', 'Dark'], ['fighting', 'bug', 'dark'], ['dragon'])


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
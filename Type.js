//Pocket Brock, now with Objects!

//Page Load
document.querySelector('#go').addEventListener('click', brock);
//document.querySelector('#go').addEventListener('click', effectiveCheck);
//document.getElementById('results').hidden = true;

//PokeType Constructor
class PokeType{
    constructor(name, color, strong, weak, immune) {
    this.name = name
    this.color = color
    this.strongAgainst = strong
    this.weakTo = weak
    this.immuneTo = immune
  }
}

//PokeType Objects
const opener = new PokeType('Select', 'clear', ['none'], ['none'], ['none'])
const normal = new PokeType('Normal', 'grey', ['nothing'], ['fighting'], ['ghost'])
const fire = new PokeType('Fire', 'orange', ['grass', 'ice', 'bug', 'steel'], ['water', 'ground', 'rock'], ['none'])
const water = new PokeType('Water',  'blue', ['fire', 'ground', 'rock'],['grass', 'electric'], ['none'])
const electric = new PokeType('Electric', 'yellow', ['water', 'flying'], [''], [''])
const rock = new PokeType('Rock', 'Tan', ['fire', 'ice', 'flying', 'bug'], ['grass', 'water', 'ground', 'fighting', 'steel'], [])
const poison = new PokeType('Poison', 'Purple', ['Grass', 'Fighting'], ['Psychic', 'Ground'], [])
const psychic = new PokeType('Psychic', 'pink', ['poison', 'fighting'], ['bug', 'ghost', 'dark'], [])
const ice = new PokeType('Ice', 'Cyan', ['Dragon', 'Flying', 'Grass'], ['Fire', 'Rock', 'Fighting', 'Steel'], [])
const ground = new PokeType('Ground', 'Brown', ['Fire', , 'Rock', 'Poison', 'Steel', 'Electric'], ['Grass', 'Water', 'Ice'], ['Electric'])
//Electric added to both strong against and immune array
const flying = new PokeType('Flying', 'Light Blue', ['Grass', 'Fighting', 'Bug'], ['Electric', 'Rock', 'Ice'], [])
const fighting = new PokeType('Fighting', 'Red', ['Rock', 'Ice', 'Dark', 'Steel'], ['Psychic', 'Flying', 'Fairy'], [] )
const  bug = new PokeType('Bug', 'Green', ['Grass', 'Psychic', 'Dark'], ['Fire', 'Flying', 'Rock'], [])
const ghost = new PokeType('Ghost', 'Lavender', ['Psychic', 'Ghost'], ['Ghost', 'Dark'], [])
const dragon = new PokeType('Dragon', 'Blue', ['Dragon'], ['Ice', 'Dragon', 'Fairy'], [])
const dark = new PokeType('Dark', 'Black', ['Psychic', 'Ghost'], ['Fighting', 'Bug', 'Fairy'], ['Psychic'])
//got called to an intubation, couldn't remember if dark is completely immune to psychic
const steel = new PokeType('Steel', 'Gray', ['Rock', 'Ice', 'Fairy'], ['Fire', 'Ground', 'Fighting'], [])
const fairy = new PokeType('Fairy', 'Pink', ['Fighting', 'Dragon', 'Dark'], ['Poison', 'Dark'], [])


//List Container
const typeName = [opener, normal, fire, water, electric]

//Attack List
typeName.forEach(function(li){
    let option = document.createElement('option');
    option.value = li.name;
    option.innerHTML = li.name;
    selectorAttack.appendChild(option)
})

//Defense1 List
typeName.forEach(function(PokeType){
    let option = document.createElement('option');
    option.value = PokeType.type
    option.innerHTML = PokeType.name;
    selectorDefense1.appendChild(option)
})

//Defense2 list
typeName.forEach(function(PokeType){
    let option = document.createElement('option');
    option.value = PokeType.type
    option.innerHTML = PokeType.name;
    selectorDefense2.appendChild(option)
})

//Brock, what is this type Effective Against?
function brock() {
    let strong;
    let weak;
    let immune;
    let type = document.querySelector('#selectorAttack').value;
    if (type === 'Normal') {
       strong = normal.strongAgainst;
       weak = normal.weakTo;
       immune = normal.immuneTo;
       console.log(strong, weak, immune)
    }
    document.querySelector('#test').innerHTML = `${type} is `
    //console.log(`${type.name} is strong against ${type.strongAgainst} and is weak to ${type.weakTo}`)
}

//Brock, how much damage will this type do against 1 or 2 defense types?
//this doens't entirely work yet
function effectiveCheck(atk, def1, def2){
    //console.log(atk.strongAgainst);
    //console.log(def1.weakTo);
    //console.log(def2.weakTo);
}

//set? for sorting an array
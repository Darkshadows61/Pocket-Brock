//Pocket Brock, now with Objects!

//Page Load
document.querySelector('#go').addEventListener('click', sortAtk);
document.querySelector('#go').addEventListener('click', sortDef1);
document.querySelector('#go').addEventListener('click', sortDef2);
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
const grass = new PokeType('Grass', 'green', [],[],[])
const electric = new PokeType('Electric', 'yellow', ['water', 'flying'], [''], [''])
const rock = new PokeType('Rock', 'Tan', ['fire', 'ice', 'flying', 'bug'], ['grass', 'water', 'ground', 'fighting', 'steel'], [])
const poison = new PokeType('Poison', 'Purple', ['Grass', 'Fighting'], ['Psychic', 'Ground'], [])
const psychic = new PokeType('Psychic', 'pink', ['poison', 'fighting'], ['bug', 'ghost', 'dark'], [])
const ice = new PokeType('Ice', 'Cyan', ['Dragon', 'Flying', 'Grass'], ['Fire', 'Rock', 'Fighting', 'Steel'], [])
const ground = new PokeType('Ground', 'Brown', ['Fire', , 'Rock', 'Poison', 'Steel', 'Electric'], ['Grass', 'Water', 'Ice'], ['Electric'])
//Electric added to both strong against and immune array
const flying = new PokeType('Flying', 'Light Blue', ['Grass', 'Fighting', 'Bug'], ['Electric', 'Rock', 'Ice'], [])
const fighting = new PokeType('Fighting', 'Red', ['Rock', 'Ice', 'Dark', 'Steel'], ['Psychic', 'Flying', 'Fairy'], [] )
const bug = new PokeType('Bug', 'Green', ['Grass', 'Psychic', 'Dark'], ['Fire', 'Flying', 'Rock'], [])
const ghost = new PokeType('Ghost', 'Lavender', ['Psychic', 'Ghost'], ['Ghost', 'Dark'], [])
const dragon = new PokeType('Dragon', 'Blue', ['Dragon'], ['Ice', 'Dragon', 'Fairy'], [])
const dark = new PokeType('Dark', 'Black', ['Psychic', 'Ghost'], ['Fighting', 'Bug', 'Fairy'], ['Psychic'])
//got called to an intubation, couldn't remember if dark is completely immune to psychic
const steel = new PokeType('Steel', 'Gray', ['Rock', 'Ice', 'Fairy'], ['Fire', 'Ground', 'Fighting'], [])
const fairy = new PokeType('Fairy', 'Pink', ['Fighting', 'Dragon', 'Dark'], ['Poison', 'Dark'], [])


//List Container
const typeName = [opener, normal, fire, water, grass, electric, rock, poison, psychic, ice, ground, flying, fighting, bug, ghost, dragon, dark, steel, fairy]

//Attack List
typeName.forEach(function(li){
    let option = document.createElement('option');
    option.value = li.name;
    option.innerHTML = li.name;
    selectorAttack.appendChild(option)
})

//Defense1 List
typeName.forEach(function(li){
    let option = document.createElement('option');
    option.value = li.name
    option.innerHTML = li.name;
    selectorDefense1.appendChild(option)
})

//Defense2 list
typeName.forEach(function(li){
    let option = document.createElement('option');
    option.value = li.name
    option.innerHTML = li.name;
    selectorDefense2.appendChild(option)
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
    }  else if (input === 'grass') {
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
    document.querySelector('#test').innerHTML = `${atkType.name} is strong against ${atkType.strongAgainst} and is weak to ${atkType.weakTo}. It has immunity to ${atkType.immuneTo}.`
    console.log(atkType.name, atkType.strongAgainst, atkType.weakTo, atkType.immuneTo)
}

//Brock, how much damage will this type do against 1 or 2 defense types?
function sortDef1() {
    let def1;
    let input = document.querySelector('#selectorDefense1').value;
    if (input === 'Normal') {
        def1 = normal
    } else if (input === 'Fire') {
        def1 = fire
    } else if (input === 'Water') {
        def1 = water
    } else if (input === 'Grass') {
        def1 = grass
    } else if (input === 'Electric') {
        def1 = electric
    } else if (input === 'Rock') {
        def1 = rock
    } else if (input === 'Poison') {
        def1 = poison
    } else if (input === 'Psychic') {
        def1 = psychic
    } else if (input === 'Ice') {
        def1 = ice
    } else if (input === 'Ground') {
        def1 = ground
    } else if (input === 'Flying') {
        def1 = flying
    } else if (input === 'Fighting') {
        def1 = fighting
    } else if (input === 'Bug') {
        def1 = bug
    } else if (input === 'Ghost') {
        def1 = ghost
    } else if (input === 'Dragon') {
        def1 = dragon
    } else if (input === 'Dark') {
        def1 = dark
    } else if (input === 'Steel') {
        def1 = steel
    } else if (input === 'Fairy') {
        def1 = fairy
    }
    console.log(def1.name, def1.strongAgainst, def1.weakTo, def1.immuneTo)
}
function sortDef2() {
    let def2;
    let input = document.querySelector('#selectorDefense2').value;
    if (input === 'None') {
        //hidden = true
    } else if (input === 'Normal') {
        def2 = normal
    } else if (input === 'Fire') {
        def2 = fire
    } else if (input === 'Water') {
        def2 = water
    } else if (input === 'Grass') {
        def2 = grass
    } else if (input === 'Electric') {
        def2 = electric
    } else if (input === 'Rock') {
        def2 = rock
    } else if (input === 'Poison') {
        def2 = poison
    } else if (input === 'Psychic') {
        def2 = psychic
    } else if (input === 'Ice') {
        def2 = ice
    } else if (input === 'Ground') {
        def2 = ground
    } else if (input === 'Flying') {
        def2 = flying
    } else if (input === 'Fighting') {
        def2 = fighting
    } else if (input === 'Bug') {
        def2 = bug
    } else if (input === 'Ghost') {
        def2 = ghost
    } else if (input === 'Dragon') {
        def2 = dragon
    } else if (input === 'Dark') {
        def2 = dark
    } else if (input === 'Steel') {
        def2 = steel
    } else if (input === 'Fairy') {
        def2 = fairy
    }
    console.log(def2.name, def2.strongAgainst, def2.weakTo, def2.immuneTo)
}
//set? for sorting an array
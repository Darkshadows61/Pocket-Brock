//Pocket Brock, now with Objects!

//Page Load
document.querySelector('#go').addEventListener('click', effectivenessCheck);
//document.getElementById('results').hidden = true;

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
const normal = new PokeType('Normal', 'grey', ['Nothing'], ['Fighting'], ['None'], ['Ghost'])
const fire = new PokeType('Fire', 'orange', ['Grass', 'Ice', 'Bug', 'Steel'], ['Water', 'Ground', 'Rock'], ['Fire', 'Grass', 'Ice', 'Bug', 'Steel', 'Fairy'], ['None'])
const water = new PokeType('Water',  'blue', ['Fire', 'Ground', 'Rock'], ['Grass', 'Electric'], ['Fire', 'Water', 'Ice', 'Steel'], ['None'])
const grass = new PokeType('Grass', 'green', ['Water', 'Ground', 'Rock'],['Fire', 'Ice', 'Poison', 'Flying', 'Bug'], ['Water', 'Electric', 'Grass', 'Ground'], ['None'])
const electric = new PokeType('Electric', 'yellow', ['Water', 'Flying'], ['Ground'], ['Electric', 'Flying', 'Steel'], ['None'])
const rock = new PokeType('Rock', 'Tan', ['Fire', 'Ice', 'Flying', 'Bug'], ['Grass', 'Water', 'Ground', 'Fighting', 'Steel'], ['Normal', 'Fire', 'Poison', 'Flying'], ['None'])
const poison = new PokeType('Poison', 'Purple', ['Grass', 'Fighting'], ['Psychic', 'Ground'], ['Grass', 'Fighting', 'Poison', 'Bug', 'Fairy'], ['None'])
const psychic = new PokeType('Psychic', 'pink', ['Poison', 'Fighting'], ['Bug', 'Ghost', 'Dark'], ['Fighting', 'Psychic'], ['None'])
const ice = new PokeType('Ice', 'Cyan', ['Dragon', 'Flying', 'Grass'], ['Fire', 'Rock', 'Fighting', 'Steel'], ['Ice'], ['None'])
const ground = new PokeType('Ground', 'Brown', ['Fire', , 'Rock', 'Poison', 'Steel', 'Electric'], ['Grass', 'Water', 'Ice'], ['Poison', 'Rock'], ['Electric'])
//Electric added to both strong against and immune array
const flying = new PokeType('Flying', 'Light Blue', ['Grass', 'Fighting', 'Bug'], ['Electric', 'Rock', 'Ice'], ['Grass', 'Fighting', 'Bug'], ['Ground'])
const fighting = new PokeType('Fighting', 'Red', ['Rock', 'Ice', 'Dark', 'Steel'], ['Psychic', 'Flying', 'Fairy'], ['Bug', 'Rock', 'Dark'], ['None'] )
const bug = new PokeType('Bug', 'Green', ['Grass', 'Psychic', 'Dark'], ['Fire', 'Flying', 'Rock'], ['Grass', 'Fighting', 'Ground'], ['None'])
const ghost = new PokeType('Ghost', 'Lavender', ['Psychic', 'Ghost'], ['Ghost', 'Dark'], ['Poison', 'Bug'], ['Normal', 'Fighting'])
const dragon = new PokeType('Dragon', 'Blue', ['Dragon'], ['Ice', 'Dragon', 'Fairy'], ['Fire', 'Water', 'Electric', 'Grass'], ['None'])
const dark = new PokeType('Dark', 'Black', ['Psychic', 'Ghost'], ['Fighting', 'Bug', 'Fairy'], ['Ghost', 'Dark'], ['Psychic'])
//got called to an intubation, couldn't remember if dark is completely immune to psychic
const steel = new PokeType('Steel', 'Gray', ['Rock', 'Ice', 'Fairy'], ['Fire', 'Ground', 'Fighting'], ['Normal', 'Grass', 'Ice', 'Flying', 'Psychic', 'Bug', 'Rock', 'Dragon', 'Steel', 'Fairy'], ['Poison'])
const fairy = new PokeType('Fairy', 'Pink', ['Fighting', 'Dragon', 'Dark'], ['Poison', 'Dark'], ['Fighting', 'Bug', 'Dark'], ['Dragon'])


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
function effectivenessCheck () {
    let input1 = document.querySelector('#selectorAttack').value;
    let input2 = document.querySelector('#selectorDefense1').value;
    let input3 = document.querySelector('#selectorDefense2').value;
    let defWeak = (sortDef1(input2).weakTo).concat((sortDef2(input2).weakTo))
    document.querySelector('#test1').innerText = (`Weak to ${defWeak}`)
    let defResist = (sortDef1(input2).resists).concat((sortDef2(input2).resists))
    document.querySelector('#test2').innerText = (`Strong against ${defResist}`)
    let defImmune = (sortDef1(input2).immuneTo).concat((sortDef2(input2).immuneTo))
    document.querySelector('#test3').innerText = (`Immune to ${defImmune}`)
   
function sortAtk() {
    let atkType;
    if (input1 === 'Normal') {
        atkType = normal
    } else if (input1 === 'Fire') {
        atkType = fire
    } else if (input1 === 'Water') {
        atkType = water
    } else if (input1 === 'Grass') {
        atkType = grass
    } else if (input1 === 'Electric') {
        atkType = electric
    } else if (input1 === 'Rock') {
        atkType = rock
    } else if (input1 === 'Poison') {
        atkType = poison
    } else if (input1 === 'Psychic') {
        atkType = psychic
    } else if (input1 === 'Ice') {
        atkType = ice
    } else if (input1 === 'Ground') {
        atkType = ground
    } else if (input1 === 'Flying') {
        atkType = flying
    } else if (input1 === 'Fighting') {
        atkType = fighting
    } else if (input1 === 'Bug') {
        atkType = bug
    } else if (input1 === 'Ghost') {
        atkType = ghost
    } else if (input1 === 'Dragon') {
        atkType = dragon
    } else if (input1 === 'Dark') {
        atkType = dark
    } else if (input1 === 'Steel') {
        atkType = steel
    } else if (input1 === 'Fairy') {
        atkType = fairy
    }
    return atkType
}

//Brock, how much damage will this type do against 1 or 2 defense types?
function sortDef1() {
    let def1;
    if (input2 === 'Normal') {
        def1 = normal
    } else if (input2 === 'Fire') {
        def1 = fire
    } else if (input2 === 'Water') {
        def1 = water
    } else if (input2 === 'Grass') {
        def1 = grass
    } else if (input2 === 'Electric') {
        def1 = electric
    } else if (input2 === 'Rock') {
        def1 = rock
    } else if (input2 === 'Poison') {
        def1 = poison
    } else if (input2 === 'Psychic') {
        def1 = psychic
    } else if (input2 === 'Ice') {
        def1 = ice
    } else if (input2 === 'Ground') {
        def1 = ground
    } else if (input2 === 'Flying') {
        def1 = flying
    } else if (input2 === 'Fighting') {
        def1 = fighting
    } else if (input2 === 'Bug') {
        def1 = bug
    } else if (input2 === 'Ghost') {
        def1 = ghost
    } else if (input2 === 'Dragon') {
        def1 = dragon
    } else if (input2 === 'Dark') {
        def1 = dark
    } else if (input2 === 'Steel') {
        def1 = steel
    } else if (input2 === 'Fairy') {
        def1 = fairy
    }
    return def1
}

function sortDef2() {
    let def2;
    if (input3 === 'None') {
        def2 = opener
    } else if (input3 === 'Normal') {
        def2 = normal
    } else if (input3 === 'Fire') {
        def2 = fire
    } else if (input3 === 'Water') {
        def2 = water
    } else if (input3 === 'Grass') {
        def2 = grass
    } else if (input3 === 'Electric') {
        def2 = electric
    } else if (input3 === 'Rock') {
        def2 = rock
    } else if (input3 === 'Poison') {
        def2 = poison
    } else if (input3 === 'Psychic') {
        def2 = psychic
    } else if (input3 === 'Ice') {
        def2 = ice
    } else if (input3 === 'Ground') {
        def2 = ground
    } else if (input3 === 'Flying') {
        def2 = flying
    } else if (input3 === 'Fighting') {
        def2 = fighting
    } else if (input3 === 'Bug') {
        def2 = bug
    } else if (input3 === 'Ghost') {
        def2 = ghost
    } else if (input3 === 'Dragon') {
        def2 = dragon
    } else if (input3 === 'Dark') {
        def2 = dark
    } else if (input3 === 'Steel') {
        def2 = steel
    } else if (input3 === 'Fairy') {
        def2 = fairy
    }
    return def2
  }
}
//set? for sorting an array
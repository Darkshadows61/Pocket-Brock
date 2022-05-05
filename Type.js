//Pocket Brock, now with Objects!

//Page Load
document.querySelector('#go').addEventListener('click', brock);
document.querySelector('#go').addEventListener('click', effectiveCheck);
document.getElementById('results').hidden = true;


//PokeType Constructor
class PokeType{
    constructor(name, type, color, strong, weak, resist, immune) {
    this.name = name
    this.type = type
    this.color = color
    this.strongAgainst = strong
    this.weakTo = weak
    this.resistantTo = resist
    this.immuneTo = immune
  }
}

//PokeType Objects
const opener = new PokeType('Select', 'none', 'clear', ['none'], ['none'], ['none'], ['none'])
const normal = new PokeType('Normal', 'normal', "grey", ['none'], ['fighting'], ['none'], ['ghost'])
const fire = new PokeType('Fire', 'fire', 'red', ['grass', 'ice', 'bug', 'steel'], ['water', 'ground', 'rock'], ['fire'], ['none'])
const water = new PokeType('Water', 'water',  'blue', ['fire', 'ground', 'rock'],['grass', 'electric'],['none'],['none'])
const electric = new PokeType('Electric', 'electric', 'yellow', [''],[''],[''],[''])

//List Container
const typeName = [opener, normal, fire, water, electric]

//Attack List
typeName.forEach(function(PokeType){
    var option = document.createElement('option');
    option.value = PokeType.strongAgainst
    option.innerHTML = PokeType.name;
    selectorAttack.appendChild(option)
})

//Defense1 List
typeName.forEach(function(PokeType){
    var option = document.createElement('option');
    option.value = PokeType.weakTo
    option.innerHTML = PokeType.name;
    selectorDefense1.appendChild(option)
})

//Defense2 list
typeName.forEach(function(PokeType){
    var option = document.createElement('option');
    option.value = PokeType.weakTo;
    option.innerHTML = PokeType.name;
    selectorDefense2.appendChild(option)
})

//Brock, what is this type Effective Against?
function brock(type) {
    return `${type.name} is strong against ${type.strongAgainst} and is weak against ${type.weakTo}`
}

//Brock, how much damage will this type do against 1 or 2 defense types?
//this doens't entirely work yet
function effectiveCheck(){
    let atk = document.getElementById('selectorAttack').value
    let def1 = document.getElementById('selectorDefense1').value
    let def2 = document.getElementById('selectorDefense2').value
    console.log(atk)
}

//set? for sorting an array
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
const fire = new PokeType('Fire', 'red', ['grass', 'ice', 'bug', 'steel'], ['water', 'ground', 'rock'], ['none'])
const water = new PokeType('Water',  'blue', ['fire', 'ground', 'rock'],['grass', 'electric'], ['none'])
const electric = new PokeType('Electric', 'yellow', ['water', 'flying'], [''], [''])

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
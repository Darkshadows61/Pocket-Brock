//Pocket Brock, now with Objects!

//Page Load
document.querySelector('#go').addEventListener('click', sort);
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
//IT WORKS!!!!!!!!!!!!!!!!!! (Will continue to monitor)
function sort() {
    let atkType;
    let input = document.querySelector('#selectorAttack').value;
    if (input === 'Normal') {
        atkType = normal
    } else if (input === 'Fire') {
        atkType = fire
    } else if (input === 'Water') {
        atkType = water
    } else if (input === 'Electric') {
        atkType = electric
    }
    document.querySelector('#test').innerHTML = `${atkType.name} is strong against ${atkType.strongAgainst} and is weak to ${atkType.weakTo}`
    console.log(atkType.name, atkType.strongAgainst)
}

//Brock, how much damage will this type do against 1 or 2 defense types?
function effectiveCheck(atk, def1, def2){

}

//set? for sorting an array
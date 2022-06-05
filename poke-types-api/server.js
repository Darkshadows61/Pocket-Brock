const { req } = require('express')
const express = require('express')
const app = express()
const PORT = 8000

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
const unknown = new PokeType('Select', 'Clear', ['None'], ['None'], ['None'], ['None'])
const normal = new PokeType('Normal', 'Grey', ['Nothing'], ['Fighting'], ['None'], ['Ghost'])
const fire = new PokeType('Fire', 'Orange', ['Grass', 'Ice', 'Bug', 'Steel'], ['Water', 'Ground', 'Rock'], ['Fire', 'Grass', 'Ice', 'Bug', 'Steel', 'Fairy'], [' None'])
const water = new PokeType('Water',  'Blue', ['Fire', 'Ground', 'Rock'], ['Grass', 'Electric'], ['Fire', 'Water', 'Ice', 'Steel'], ['None'])
const grass = new PokeType('Grass', 'Green', ['Water', 'Ground', 'Rock'],['Fire', 'Ice', 'Poison', 'Flying', 'Bug'], ['Water', 'Electric', 'Grass', 'Ground'], ['None'])
const electric = new PokeType('Electric', 'Yellow', ['Water', 'Flying'], ['Ground'], ['Electric', 'Flying', 'Steel'], ['None'])
const rock = new PokeType('Rock', 'Tan', ['Fire', 'Ice', 'Flying', 'Bug'], ['Grass', 'Water', 'Ground', 'Fighting', 'Steel'], ['Normal', 'Fire', 'Poison', 'Flying'], ['None'])
const poison = new PokeType('Poison', 'Purple', ['Grass', 'Fighting'], ['Psychic', 'Ground'], ['Grass', 'Fighting', 'Poison', 'Bug', 'Fairy'], ['None'])
const psychic = new PokeType('Psychic', 'Pink', ['Poison', 'Fighting'], ['Bug', 'Ghost', 'Dark'], ['Fighting', 'Psychic'], ['None'])
const ice = new PokeType('Ice', 'Cyan', ['Dragon', 'Flying', 'Grass'], ['Fire', 'Rock', 'Fighting', 'Steel'], ['Ice'], ['None'])
const ground = new PokeType('Ground', 'Brown', ['Fire', 'Rock', 'Poison', 'Steel', 'Electric'], ['Grass', 'Water', 'Ice'], ['Poison', 'Rock'], ['Electric'])
const flying = new PokeType('Flying', 'Light Blue', ['Grass', 'Fighting', 'Bug'], ['Electric', 'Rock', 'Ice'], ['Grass', 'Fighting', 'Bug'], ['Ground'])
const fighting = new PokeType('Fighting', 'Red', ['Rock', 'Ice', 'Dark', 'Steel'], ['Psychic', 'Flying', 'Fairy'], ['Bug', 'Rock', 'Dark'], ['None'] )
const bug = new PokeType('Bug', 'Olive', ['Grass', 'Psychic', 'Dark'], ['Fire', 'Flying', 'Rock'], ['Grass', 'Fighting', 'Ground'], ['None'])
const ghost = new PokeType('Ghost', 'Lavender', ['Psychic', 'Ghost'], ['Ghost', 'Dark'], ['Poison', 'Bug'], ['Normal', 'Fighting'])
const dragon = new PokeType('Dragon', 'Blue', ['Dragon'], ['Ice', 'Dragon', 'Fairy'], ['Fire', 'Water', 'Electric', 'Grass'], ['None'])
const dark = new PokeType('Dark', 'Black', ['Psychic', 'Ghost'], ['Fighting', 'Bug', 'Fairy'], ['Ghost', 'Dark'], ['Psychic'])
const steel = new PokeType('Steel', 'Silver', ['Rock', 'Ice', 'Fairy'], ['Fire', 'Ground', 'Fighting'], ['Normal', 'Grass', 'Ice', 'Flying', 'Psychic', 'Bug', 'Rock', 'Dragon', 'Steel', 'Fairy'], ['Poison'])
const fairy = new PokeType('Fairy', 'Light Pink', ['Fighting', 'Dragon', 'Dark'], ['Poison', 'Dark'], ['Fighting', 'Bug', 'Dark'], ['Dragon'])


const typesTest = {
    'unknown': {
        'type': unknown
    },
    'normal': {
        'type': normal
    },
    'fire': {
        'type': fire
    },
    'water': {
        'type': water
    },
    'grass': {
        'type': grass
    },
    'electric': {
        'type': electric
    },
    'rock': {
        'type': rock
    },
    'poison': {
        'type': poison
    },
    'psychic': {
        'type': psychic
    },
    'ice': {
        'type': ice
    },
    'ground': {
        'type': ground
    },
    'flying': {
        'type': flying
    },
    'fighting': {
        'type': fighting
    },
    'bug': {
        'type': bug
    },
    'ghost': {
        'type': ghost
    },
    'dragon': {
        'type': dragon
    },
    'dark': {
        'type': dark
    },
    'steel': {
        'type': steel
    },
    'fairy': {
        'type': fairy
    },
}
//Server JS
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html')
})

app.get('/poke-type-api/:name', (req, res)=>{
    const pokeTypeName = req.params.name.toLowerCase();
    if (typesTest[pokeTypeName]) {
        res.json(typesTest[pokeTypeName])
    } else {
        res.json(typesTest[unknown])
  }
})

app.listen(PORT, ()=>{
    console.log(`The server is running on ${PORT}`)
})

//へろく heroku
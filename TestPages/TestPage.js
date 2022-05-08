const uniqueType = ['opener', 'normal', 'fire', 'water', 'grass', 'electric', 'rock', 'poison', 'psychic', 'ice', 'ground', 'flying', 'fighting', 'bug', 'ghost', 'dragon', 'dark', 'steel', 'fairy']
let testArrWeakConcat = ['fire', 'water', 'fire', 'ice'];
let testArrResistConcat = ['electric', 'rock', 'water', 'water'];
let testArrImmune = ['ghost'];


//identifies duplicates and counts them
function countDuplicates() {
let counts = {};
    testArrResistConcat.forEach(element => {
        counts[element] = (counts[element] || 0) +1
        console.log(counts)
    })
}

//Filters out duplicates
function filterDuplicates() {
    let test = [...new Set(testArrWeakConcat)]
    console.log(test)
}
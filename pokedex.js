//PocketBrock.com
document.querySelector('button').addEventListener('click', search);

//Search
function search() {
    let pokemon = document.querySelector('#searchRequest').value

fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
.then(res => res.json())
    .then(data => {
        document.querySelector('#pkNumber').innerText = data.id
        document.querySelector('#pkName').innerText = data.name
        document.querySelector('#imgFront').src = data.sprites.front_default
        document.querySelector('#imgBack').src = data.sprites.back_default
        document.querySelector('#imgFrontFemale').src = data.sprites.front_female
        document.querySelector('#imgBackFemale').src = data.sprites.back_female
        document.querySelector('#imgFrontShiny').src = data.sprites.front_shiny
        document.querySelector('#imgBackShiny').src = data.sprites.back_shiny
        document.querySelector('#imgFrontShinyFemale').src = data.sprites.front_shiny_female
        document.querySelector('#imgBackShinyFemale').src = data.sprites.back_shiny_female
        
    })
    .catch(err => {
        console.log(`error ${err}`)
    })
}
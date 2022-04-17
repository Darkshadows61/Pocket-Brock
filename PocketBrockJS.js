//PocketBrock.com

//Search
//document.querySelector('#search').addEventListener('click', search)
//function search () {
    //let pokemon = document.querySelector('#searchRequest').value

//fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
//.then(res => res.json())
    //.then(data => {
        //console.log(data)
        
    //})
    //.catch(err => {
        //console.log(`error ${err}`)
    //})
//}

//STAB Calc
document.querySelector('#go').addEventListener('click', test)

function test(){
    let attk = document.querySelector('#atkVal').value;
    let def1 = document.querySelector('#defVal1').value;
    let def2 = document.querySelector('#defVal2').value;
    document.querySelector('#attack').innerText = attk
    document.querySelector('#defense1').innerText = def1
    document.querySelector('#defense2').innerText = def2

        if (attk === 'normal') {
            (document.querySelector('#result').innerText = normal(def1,def2))
        } else if (attk ==='fire') {
            (document.querySelector('#result').innerText = fire(def1,def2))
        } else if (attk ==='water') {
            (document.querySelector('#result').innerText = water(def1,def2))
        } else if (attk ==='grass') {
            (document.querySelector('#result').innerText = grass(def1,def2))
        } else if (attk ==='electric') {
            (document.querySelector('#result').innerText = electric(def1,def2))
        } else if (attk ==='ice') {
            (document.querySelector('#result').innerText = ice(def1,def2))
        } else if (attk ==='fighting') {
            (document.querySelector('#result').innerText = fighting(def1,def2))
        } else if (attk ==='poison') {
            (document.querySelector('#result').innerText = poison(def1,def2))
        } else if (attk ==='ground') {
            (document.querySelector('#result').innerText = ground(def1,def2))
        } else if (attk ==='flying') {
            (document.querySelector('#result').innerText = flying(def1,def2))
        } else if (attk ==='psychic') {
            (document.querySelector('#result').innerText = psychic(def1,def2))
        } else if (attk ==='bug') {
            (document.querySelector('#result').innerText = bug(def1,def2))
        } else if (attk ==='rock') {
            (document.querySelector('#result').innerText = rock(def1,def2))
        } else if (attk ==='ghost') {
            (document.querySelector('#result').innerText = ghost(def1,def2))
        } else if (attk ==='dragon') {
            (document.querySelector('#result').innerText = dragon(def1,def2))
        } else if (attk ==='dark') {
            (document.querySelector('#result').innerText = dark(def1,def2))
        } else if (attk ==='steel') {
            (document.querySelector('#result').innerText = steel(def1,def2))
        } else if (attk ==='fairy') {
            (document.querySelector('#result').innerText = fairy(def1,def2))
        } 
        
function normal(){
    let r = "";
    if (def1 === 'ghost' || def2 === 'ghost') {
        r = 'immune'
    } else if (def1 === 'rock' || def2 === 'rock') {
        r = 'not very effective'
    } else if (def1 ==='steel' || def2 ==='steel') {
        r = 'not very effective'
    } else {
        r = 'effective'
    }
    return r
  }

  function fire(){
    let r = "";
    if (def1==='grass' && def2==='water') {
        r = 'effective'
    } else if (def1==='water' && def2==='grass') {
        r = 'effective'
    } else if (def1 === 'fire' || def2 === 'fire') {
        r = 'not very effective'
    } else if (def1 === 'water' || def2 === 'water') {
        r = 'not very effective'
    } else if (def1 ==='rock' || def2 ==='rock') {
        r = 'not very effective'
    } else if (def1 ==='dragon' || def2 ==='dragon') {
        r = 'not very effective'
    } else if (def1 ==='grass'|| def2 ==='grass') {
        r = 'super effective'
    } else if (def1 ==='ice' || def2 ==='ice') {
        r = 'super effective'
    } else if (def1 ==='bug' || def2==='bug') {
        r = 'super effective'
    } else {
        r = 'effective'
    }
    return r
  }

  function water(){
    let r = "";
    if (def1==='grass' && def2==='fire') {
        r = 'effective'
    } else if (def1==='ground' && def2==='water') {
        r = 'effective'
    } else if (def1 === 'water' || def2 === 'water') {
        r = 'not very effective'
    } else if (def1 === 'grass' || def2 === 'grass') {
        r = 'not very effective'
    } else if (def1 ==='dragon' || def2 ==='dragon') {
        r = 'not very effective'
    } else if (def1 ==='fire'|| def2 ==='fire') {
        r = 'super effective'
    } else if (def1==="ground" || def2==="ground") {
        r = 'super effective'
    } else if (def1 ==='rock' || def2 ==='rock') {
        r = 'super effective'
    } else {
        r = 'effective'
    }
    return r
  }

  function grass(){
    let r = "";
    if (def1 ==='water' && def2 ==='fire') {
        r = 'effective'
    } else if (def1 ==='fire' && def2 ==='water') {
        r = 'effective'
    } else if (def1 ==='ground' && def2 ==='poison') {
        r = 'effective'
    } else if (def1 ==='poison' && def2 ==='ground') {
        r = 'effective'
    } else if (def1 === 'fire' || def2 === 'fire') {
        r = 'not very effective'
    } else if (def1 === 'grass' || def2 === 'grass') {
        r = 'not very effective'
    } else if (def1 ==='poison' || def2 ==='poison') {
        r = 'not very effective'
    } else if (def1 ==='flying' || def2 ==='flying') {
        r = 'not very effective'
    } else if (def1 ==='bug' || def2 ==='bug') {
        r = 'not very effective'
    } else if (def1 ==='dragon' || def2 ==='dragon') {
        r = 'not very effective'
    } else if (def1 ==='steel' || def2 ==='steel') {
        r = 'not very effective'
    } else if (def1 ==='water'|| def2 ==='water') {
        r = 'super effective'
    } else if (def1==='ground' || def2==='ground') {
        r = 'super effective'
    } else if (def1 ==='rock' || def2 ==='rock') {
        r = 'super effective'
    } else {
        r = 'effective'
    }
    return r
  }

  function electric(){
    let r = "";
    if (def1 ==='ground' || def2 === 'ground') {
        r = 'immune'
    } else if (def1 ==='grass' && def2 === 'water') {
        r = 'effective'
    } else if (def1 ==='water' && def2 === 'grass') {
        r = 'effective'
    } else if (def1 ==='grass' || def2 === 'grass') {
        r = 'not very effective'
    } else if (def1 ==='electric' || def2 === 'electric') {
        r = 'not very effective'
    } else if (def1 ==='dragon' || def2 ==='dragon') {
        r = 'not very effective'
    } else if (def1 ==='water'|| def2 ==='water') {
        r = 'super effective'
    } else if (def1 ==='flying' || def2 ==='flying') {
        r = 'super effective'
    } else {
        r = 'effective'
    }
    return r
  }

  function ice(){
    let r = "";
    if (def1 ==='grass' || def2 === 'grass') {
        r = 'not very effective'
    } else if (def1 ==='electric' || def2 === 'electric') {
        r = 'not very effective'
    } else if (def1 ==='dragon' || def2 ==='dragon') {
        r = 'not very effective'
    } else if (def1 ==='water'|| def2 ==='water') {
        r = 'super effective'
    } else if (def1 ==='flying' || def2 ==='flying') {
        r = 'super effective'
    } else {
        r = 'effective'
    }
    return r
  }

  function fighting(){
        let r = "";
    if (def1 ==='ground' || def2 === 'ground') {
        r = 'immune'
    } else if (def1 ==='grass' && def2 === 'water') {
        r = 'effective'
    } else if (def1 ==='water' && def2 === 'grass') {
        r = 'effective'
    } else if (def1 ==='grass' || def2 === 'grass') {
        r = 'not very effective'
    } else if (def1 ==='electric' || def2 === 'electric') {
        r = 'not very effective'
    } else if (def1 ==='dragon' || def2 ==='dragon') {
        r = 'not very effective'
    } else if (def1 ==='water'|| def2 ==='water') {
        r = 'super effective'
    } else if (def1 ==='flying' || def2 ==='flying') {
        r = 'super effective'
    } else {
        r = 'effective'
    }
    return r
  }

  function poison(){
    let r = "";
    if (def1 ==='ground' || def2 === 'ground') {
        r = 'immune'
    } else if (def1 ==='grass' && def2 === 'water') {
        r = 'effective'
    } else if (def1 ==='water' && def2 === 'grass') {
        r = 'effective'
    } else if (def1 ==='grass' || def2 === 'grass') {
        r = 'not very effective'
    } else if (def1 ==='electric' || def2 === 'electric') {
        r = 'not very effective'
    } else if (def1 ==='dragon' || def2 ==='dragon') {
        r = 'not very effective'
    } else if (def1 ==='water'|| def2 ==='water') {
        r = 'super effective'
    } else if (def1 ==='flying' || def2 ==='flying') {
        r = 'super effective'
    } else {
        r = 'effective'
    }
    return r
  }

  function ground(){
        let r = "";
    if (def1 ==='ground' || def2 === 'ground') {
        r = 'immune'
    } else if (def1 ==='grass' && def2 === 'water') {
        r = 'effective'
    } else if (def1 ==='water' && def2 === 'grass') {
        r = 'effective'
    } else if (def1 ==='grass' || def2 === 'grass') {
        r = 'not very effective'
    } else if (def1 ==='electric' || def2 === 'electric') {
        r = 'not very effective'
    } else if (def1 ==='dragon' || def2 ==='dragon') {
        r = 'not very effective'
    } else if (def1 ==='water'|| def2 ==='water') {
        r = 'super effective'
    } else if (def1 ==='flying' || def2 ==='flying') {
        r = 'super effective'
    } else {
        r = 'effective'
    }
    return r
  }
  function flying(){
        let r = "";
    if (def1 ==='ground' || def2 === 'ground') {
        r = 'immune'
    } else if (def1 ==='grass' && def2 === 'water') {
        r = 'effective'
    } else if (def1 ==='water' && def2 === 'grass') {
        r = 'effective'
    } else if (def1 ==='grass' || def2 === 'grass') {
        r = 'not very effective'
    } else if (def1 ==='electric' || def2 === 'electric') {
        r = 'not very effective'
    } else if (def1 ==='dragon' || def2 ==='dragon') {
        r = 'not very effective'
    } else if (def1 ==='water'|| def2 ==='water') {
        r = 'super effective'
    } else if (def1 ==='flying' || def2 ==='flying') {
        r = 'super effective'
    } else {
        r = 'effective'
    }
    return r
  }
  function psychic(){
        let r = "";
    if (def1 ==='ground' || def2 === 'ground') {
        r = 'immune'
    } else if (def1 ==='grass' && def2 === 'water') {
        r = 'effective'
    } else if (def1 ==='water' && def2 === 'grass') {
        r = 'effective'
    } else if (def1 ==='grass' || def2 === 'grass') {
        r = 'not very effective'
    } else if (def1 ==='electric' || def2 === 'electric') {
        r = 'not very effective'
    } else if (def1 ==='dragon' || def2 ==='dragon') {
        r = 'not very effective'
    } else if (def1 ==='water'|| def2 ==='water') {
        r = 'super effective'
    } else if (def1 ==='flying' || def2 ==='flying') {
        r = 'super effective'
    } else {
        r = 'effective'
    }
    return r
  }
  function bug(){
        let r = "";
    if (def1 ==='ground' || def2 === 'ground') {
        r = 'immune'
    } else if (def1 ==='grass' && def2 === 'water') {
        r = 'effective'
    } else if (def1 ==='water' && def2 === 'grass') {
        r = 'effective'
    } else if (def1 ==='grass' || def2 === 'grass') {
        r = 'not very effective'
    } else if (def1 ==='electric' || def2 === 'electric') {
        r = 'not very effective'
    } else if (def1 ==='dragon' || def2 ==='dragon') {
        r = 'not very effective'
    } else if (def1 ==='water'|| def2 ==='water') {
        r = 'super effective'
    } else if (def1 ==='flying' || def2 ==='flying') {
        r = 'super effective'
    } else {
        r = 'effective'
    }
    return r
  }
  function rock(){
        let r = "";
    if (def1 ==='ground' || def2 === 'ground') {
        r = 'immune'
    } else if (def1 ==='grass' && def2 === 'water') {
        r = 'effective'
    } else if (def1 ==='water' && def2 === 'grass') {
        r = 'effective'
    } else if (def1 ==='grass' || def2 === 'grass') {
        r = 'not very effective'
    } else if (def1 ==='electric' || def2 === 'electric') {
        r = 'not very effective'
    } else if (def1 ==='dragon' || def2 ==='dragon') {
        r = 'not very effective'
    } else if (def1 ==='water'|| def2 ==='water') {
        r = 'super effective'
    } else if (def1 ==='flying' || def2 ==='flying') {
        r = 'super effective'
    } else {
        r = 'effective'
    }
    return r
  }
  function ghost(){
        let r = "";
    if (def1 ==='ground' || def2 === 'ground') {
        r = 'immune'
    } else if (def1 ==='grass' && def2 === 'water') {
        r = 'effective'
    } else if (def1 ==='water' && def2 === 'grass') {
        r = 'effective'
    } else if (def1 ==='grass' || def2 === 'grass') {
        r = 'not very effective'
    } else if (def1 ==='electric' || def2 === 'electric') {
        r = 'not very effective'
    } else if (def1 ==='dragon' || def2 ==='dragon') {
        r = 'not very effective'
    } else if (def1 ==='water'|| def2 ==='water') {
        r = 'super effective'
    } else if (def1 ==='flying' || def2 ==='flying') {
        r = 'super effective'
    } else {
        r = 'effective'
    }
    return r
  }
  function dragon(){
       let r = "";
    if (def1 ==='ground' || def2 === 'ground') {
        r = 'immune'
    } else if (def1 ==='grass' && def2 === 'water') {
        r = 'effective'
    } else if (def1 ==='water' && def2 === 'grass') {
        r = 'effective'
    } else if (def1 ==='grass' || def2 === 'grass') {
        r = 'not very effective'
    } else if (def1 ==='electric' || def2 === 'electric') {
        r = 'not very effective'
    } else if (def1 ==='dragon' || def2 ==='dragon') {
        r = 'not very effective'
    } else if (def1 ==='water'|| def2 ==='water') {
        r = 'super effective'
    } else if (def1 ==='flying' || def2 ==='flying') {
        r = 'super effective'
    } else {
        r = 'effective'
    }
    return r 
  }
  function dark(){
       let r = "";
    if (def1 ==='ground' || def2 === 'ground') {
        r = 'immune'
    } else if (def1 ==='grass' && def2 === 'water') {
        r = 'effective'
    } else if (def1 ==='water' && def2 === 'grass') {
        r = 'effective'
    } else if (def1 ==='grass' || def2 === 'grass') {
        r = 'not very effective'
    } else if (def1 ==='electric' || def2 === 'electric') {
        r = 'not very effective'
    } else if (def1 ==='dragon' || def2 ==='dragon') {
        r = 'not very effective'
    } else if (def1 ==='water'|| def2 ==='water') {
        r = 'super effective'
    } else if (def1 ==='flying' || def2 ==='flying') {
        r = 'super effective'
    } else {
        r = 'effective'
    }
    return r 
  }
  function steel(){
        let r = "";
    if (def1 ==='ground' || def2 === 'ground') {
        r = 'immune'
    } else if (def1 ==='grass' && def2 === 'water') {
        r = 'effective'
    } else if (def1 ==='water' && def2 === 'grass') {
        r = 'effective'
    } else if (def1 ==='grass' || def2 === 'grass') {
        r = 'not very effective'
    } else if (def1 ==='electric' || def2 === 'electric') {
        r = 'not very effective'
    } else if (def1 ==='dragon' || def2 ==='dragon') {
        r = 'not very effective'
    } else if (def1 ==='water'|| def2 ==='water') {
        r = 'super effective'
    } else if (def1 ==='flying' || def2 ==='flying') {
        r = 'super effective'
    } else {
        r = 'effective'
    }
    return r
  }
  function fairy(){
        let r = "";
    if (def1 ==='ground' || def2 === 'ground') {
        r = 'immune'
    } else if (def1 ==='grass' && def2 === 'water') {
        r = 'effective'
    } else if (def1 ==='water' && def2 === 'grass') {
        r = 'effective'
    } else if (def1 ==='grass' || def2 === 'grass') {
        r = 'not very effective'
    } else if (def1 ==='electric' || def2 === 'electric') {
        r = 'not very effective'
    } else if (def1 ==='dragon' || def2 ==='dragon') {
        r = 'not very effective'
    } else if (def1 ==='water'|| def2 ==='water') {
        r = 'super effective'
    } else if (def1 ==='flying' || def2 ==='flying') {
        r = 'super effective'
    } else {
        r = 'effective'
    }
    return r
  }

}
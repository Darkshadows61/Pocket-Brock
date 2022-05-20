//Pocket Brock, now with Objects!

//Page Load
document.querySelector('#go').addEventListener('click', effectivenessCheck);

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
const opener = new PokeType('Select', 'clear', [' None'], [' None'], [' None'], [' None'])
const normal = new PokeType(' Normal', 'grey', [' Nothing'], [' Fighting'], [' None'], [' Ghost'])
const fire = new PokeType(' Fire', 'orange', [' Grass', ' Ice', ' Bug', ' Steel'], [' Water', ' Ground', ' Rock'], [' Fire', ' Grass', ' Ice', ' Bug', ' Steel', ' Fairy'], [' None'])
const water = new PokeType(' Water',  'blue', [' Fire', ' Ground', ' Rock'], [' Grass', ' Electric'], [' Fire', ' Water', ' Ice', ' Steel'], [' None'])
const grass = new PokeType(' Grass', 'green', [' Water', ' Ground', ' Rock'],[' Fire', ' Ice', ' Poison', ' Flying', ' Bug'], [' Water', ' Electric', ' Grass', ' Ground'], [' None'])
const electric = new PokeType(' Electric', 'yellow', [' Water', ' Flying'], [' Ground'], [' Electric', ' Flying', ' Steel'], [' None'])
const rock = new PokeType(' Rock', ' Tan', [' Fire', ' Ice', ' Flying', ' Bug'], [' Grass', ' Water', ' Ground', ' Fighting', ' Steel'], [' Normal', ' Fire', ' Poison', ' Flying'], [' None'])
const poison = new PokeType(' Poison', 'Purple', [' Grass', ' Fighting'], [' Psychic', ' Ground'], [' Grass', ' Fighting', ' Poison', ' Bug', ' Fairy'], [' None'])
const psychic = new PokeType(' Psychic', 'pink', [' Poison', ' Fighting'], [' Bug', ' Ghost', ' Dark'], [' Fighting', ' Psychic'], [' None'])
const ice = new PokeType(' Ice', ' Cyan', [' Dragon', ' Flying', ' Grass'], [' Fire', ' Rock', ' Fighting', ' Steel'], [' Ice'], [' None'])
const ground = new PokeType(' Ground', 'Brown', [' Fire',' Rock', ' Poison', ' Steel', ' Electric'], [' Grass', ' Water', ' Ice'], [' Poison', ' Rock'], [' Electric'])
const flying = new PokeType(' Flying', ' Light Blue', [' Grass', ' Fighting', ' Bug'], [' Electric', ' Rock', ' Ice'], [' Grass', ' Fighting', ' Bug'], [' Ground'])
const fighting = new PokeType(' Fighting', 'Red', [' Rock', ' Ice', ' Dark', ' Steel'], [' Psychic', ' Flying', ' Fairy'], [' Bug', ' Rock', ' Dark'], [' None'] )
const bug = new PokeType(' Bug', 'Green', [' Grass', ' Psychic', ' Dark'], [' Fire', ' Flying', ' Rock'], [' Grass', ' Fighting', ' Ground'], [' None'])
const ghost = new PokeType(' Ghost', 'Lavender', [' Psychic', ' Ghost'], [' Ghost', ' Dark'], [' Poison', ' Bug'], [' Normal', ' Fighting'])
const dragon = new PokeType(' Dragon', 'Blue', [' Dragon'], [' Ice', ' Dragon', ' Fairy'], [' Fire', ' Water', ' Electric', ' Grass'], [' None'])
const dark = new PokeType(' Dark', 'Black', [' Psychic', ' Ghost'], [' Fighting', ' Bug', ' Fairy'], [' Ghost', ' Dark'], [' Psychic'])
const steel = new PokeType(' Steel', 'Gray', [' Rock', ' Ice', ' Fairy'], [' Fire', ' Ground', ' Fighting'], [' Normal', ' Grass', ' Ice', ' Flying', ' Psychic', ' Bug', ' Rock', ' Dragon', ' Steel', ' Fairy'], [' Poison'])
const fairy = new PokeType(' Fairy', 'Pink', [' Fighting', ' Dragon', ' Dark'], [' Poison', ' Dark'], [' Fighting', ' Bug', ' Dark'], [' Dragon'])

//List Container
const typeName = [opener, normal, fire, water, grass, electric, rock, poison, psychic, ice, ground, flying, fighting, bug, ghost, dragon, dark, steel, fairy]

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
function effectivenessCheck () {
    let input2 = document.querySelector('#selectorDefense1').value;
    let input3 = document.querySelector('#selectorDefense2').value;
    checks()
  
    function checks() {
        //Immunity Check Log
        let immuneCheck = immunityCheck();
        if (immuneCheck.length >= 1) {
            document.querySelector('#test5').hidden = false
            document.querySelector('#test5').innerText = (`${immunityCheck()} will do no damage to a ${input2}/${input3} type`)
        } else {
            document.querySelector('#test5').hidden = true
        }
        
        //2x and 4x Effective Check Log
        let doubleWeakCheck = doubleWeak();
        if (doubleWeakCheck.length >= 1) {
            document.querySelector('#test1').hidden = false
            console.log(`${doubleWeak()} is 4x Effective`)
            document.querySelector('#test1').innerText = (`${doubleWeak()}`)
        } else {
            document.querySelector('#test1').hidden = true
        }

        let defWeaknessCheck = defWeakness();
        if (defWeaknessCheck.length >= 1) {
            document.querySelector('#test2').hidden = false
            console.log(`${defWeakness()} is 2x Effective`)
            document.querySelector('#test2').innerText = (`${defWeakness()}`)
        } else {
            document.querySelector('#test2').hidden = true
        }

        //1/2x and 1/4x Effective Check Log
        let doubleResistanceCheck = doubleResistance();
        if (doubleResistanceCheck.length >= 1) {
            document.querySelector('#test3').hidden = false
            console.log(`${doubleResistance()} is 1/4x Effective`)
            document.querySelector('#test3').innerText = (`${doubleResistance()}`)
        } else {
            document.querySelector('#test3').hidden = true
        }    

        let defResistanceCheck = defResistance();
        if (defResistanceCheck.length >= 1) {
            document.querySelector('#test4').hidden = false
            console.log(`${defResistance()} is 1/2x Effective`)
            document.querySelector('#test4').innerText = (`${defResistance()}`)
        } else {
            document.querySelector('#test4').hidden = true
        }

        //1x Check Log
        singleCheck()

        //1x Check
        function singleCheck(){
            let types = [' Normal', ' Fire', ' Water', ' Grass', ' Electric', ' Rock', ' Poison', ' Psychic', ' Ice', ' Ground', ' Flying', ' Fighting', ' Bug', ' Ghost', ' Dragon', ' Dark', ' Steel', ' Fairy'];
            //Concat all buff and debuff then filter out copies
            let allEffectBonus = defWeakness().concat(doubleResistance()).concat(defResistance()).concat(doubleResistance())
            let test1 = (allEffectBonus = [...new Set(allEffectBonus)])
            let results = types.concat(test1)
            //Filter out all buffs and debuffs from a main list then return remainders as 1x damage

        }

        //Immunity Check
        function immunityCheck() {
            let defImmune = (sortDef1(input2).immuneTo).concat((sortDef2(input3).immuneTo));
            defImmune = [...new Set(defImmune)]
            return defImmune.filter((item => item !== ' None'));
        }

        //2x and 4x Damage Check
        //4x
        function doubleWeak() {
            let defWeak = (sortDef1(input2).weakTo).concat((sortDef2(input3).weakTo));
            let doubleWeakTo = defWeak.filter((item, index) => index !== defWeak.indexOf(item))
            return doubleWeakTo
        }

        //2x
        function defWeakness() {
            let defWeak = (sortDef1(input2).weakTo).concat((sortDef2(input3).weakTo));
            defWeak = [...new Set(defWeak)]
            return defWeak.filter((item, index) =>  index !== doubleWeak().indexOf(item))
        }

        // 1/2 and 1/4 Damage Check
        //1/4x
        function doubleResistance() {
            let defResist = (sortDef1(input2).resists).concat((sortDef2(input3).resists));
            let doubleResist = defResist.filter((item, index) => index !== defResist.indexOf(item));
            return doubleResist
        }

        //1/2x
        function defResistance() {
            let defResist = (sortDef1(input2).resists).concat((sortDef2(input3).resists));
            defResist = [...new Set(defResist)]
            return defResist.filter((item, index) =>  index !== doubleResistance().indexOf(item))
        }
    }
            //Def1 Type Identifier
            function sortDef1() {
                let def1;
                if (input2 === ' Normal') {
                    def1 = normal
                } else if (input2 === ' Fire') {
                    def1 = fire
                } else if (input2 === ' Water') {
                    def1 = water
                } else if (input2 === ' Grass') {
                    def1 = grass
                } else if (input2 === ' Electric') {
                    def1 = electric
                } else if (input2 === ' Rock') {
                    def1 = rock
                } else if (input2 === ' Poison') {
                    def1 = poison
                } else if (input2 === ' Psychic') {
                    def1 = psychic
                } else if (input2 === ' Ice') {
                    def1 = ice
                } else if (input2 === ' Ground') {
                    def1 = ground
                } else if (input2 === ' Flying') {
                    def1 = flying
                } else if (input2 === ' Fighting') {
                    def1 = fighting
                } else if (input2 === ' Bug') {
                    def1 = bug
                } else if (input2 === ' Ghost') {
                    def1 = ghost
                } else if (input2 === ' Dragon') {
                    def1 = dragon
                } else if (input2 === ' Dark') {
                    def1 = dark
                } else if (input2 === ' Steel') {
                    def1 = steel
                } else if (input2 === ' Fairy') {
                    def1 = fairy
                }
                return def1
            }

            //Def2 Type Identifier
            function sortDef2() {
                let def2;
                if (input3 === ' None') {
                    def2 = opener
                } else if (input3 === ' Normal') {
                    def2 = normal
                } else if (input3 === ' Fire') {
                    def2 = fire
                } else if (input3 === ' Water') {
                    def2 = water
                } else if (input3 === ' Grass') {
                    def2 = grass
                } else if (input3 === ' Electric') {
                    def2 = electric
                } else if (input3 === ' Rock') {
                    def2 = rock
                } else if (input3 === ' Poison') {
                    def2 = poison
                } else if (input3 === ' Psychic') {
                    def2 = psychic
                } else if (input3 === ' Ice') {
                    def2 = ice
                } else if (input3 === ' Ground') {
                    def2 = ground
                } else if (input3 === ' Flying') {
                    def2 = flying
                } else if (input3 === ' Fighting') {
                    def2 = fighting
                } else if (input3 === ' Bug') {
                    def2 = bug
                } else if (input3 === ' Ghost') {
                    def2 = ghost
                } else if (input3 === ' Dragon') {
                    def2 = dragon
                } else if (input3 === ' Dark') {
                    def2 = dark
                } else if (input3 === ' Steel') {
                    def2 = steel
                } else if (input3 === ' Fairy') {
                    def2 = fairy
                }
                return def2
            }
}
'use strict';
// function factory createCharachter
function createCharacter(nickname, race, origin, attack, defense) {
  return {
    nickname, race, origin, attack, defense,
    describe: function() {
      console.log(`${.name} is a ${.race} from ${.origin}.`);
    },
    evaluateFight: function(character) {
        let oponentDmg = 0, myDmg = 0;
        if(this.attack > character.defense) {
            oponentDmg = this.attack - character.defense;
        }
        if(this.defense < character.attack) {
            myDmg = character.attack - this.defense;
        }
        console.log(`Your opponent takes ${dmgDealt} damage and you receive ${dmgReceived} damage.`);
    }
  };
}

//create characters
const characters = [
  createCharacter('Gandalf the White', 'gandalf', 'Wizard', 'Middle Earth', 10, 6),
  createCharacter('Bilbo Baggins', 'bilbo', 'Hobbit', 'The Shire', 2, 1),
  createCharacter('Frodo Baggins', 'frodo', 'Hobbit', 'The Shire', 3, 2),
  createCharacter('Aragorn son of Arathorn', 'aragorn', 'Man', 'Dunedain', 6, 8),
  createCharacter('Legolas', 'legolas', 'Elf', 'Woodland Realm', 8, 5)
];

//add character to characters array
characters.push(createCharacter('Arwen Undomiel', 'arwen', 'Half-elf', 'Rivendell', 3, 5));

// use .find to retrieve character with required nickname and call describe() on it
characters.find(char => char.nickname === 'aragorn').describe();

// create array of only hobbits:
const hobbits = characters.filter(char => char.race === 'Hobbit');
console.log(hobbits);

//create array of only high attackes characters:
const highAttack = characters.filter(char => char.attack > 5);
console.log(highAttack);
const characters = [
    {
        name: 'Luke Skywalker',
        height: 172,
        mass: 77,
        eye_color: 'blue',
        gender: 'male',
    },
    {
        name: 'Darth Vader',
        height: 202,
        mass: 136,
        eye_color: 'yellow',
        gender: 'male',
    },
    {
        name: 'Leia Organa',
        height: 150,
        mass: 49,
        eye_color: 'brown',
        gender: 'female',
    },
    {
        name: 'Anakin Skywalker',
        height: 188,
        mass: 84,
        eye_color: 'blue',
        gender: 'male',
    },
];

const greaterMass = characters.filter(
    (character) =>
        character.mass > 100


)

const heightsGreaterThan = characters.filter(
    (character) => character.height > 110
)
// console.log(greaterMass)
// console.log(heightsGreaterThan)
console.log(characters.filter((character) => character.height < 200))
const data = require('../data/zoo_data');

// eslint-disable-next-line max-lines-per-function
function countEntrants(entrants) {
  const child = entrants.filter((element) => element.age < 18).length;
  const adult = entrants.filter((element) => element.age >= 18 && element.age <= 49).length;
  const senior = entrants.filter((element) => element.age >= 50).length;
  const objReturned = {
    child,
    adult,
    senior,
  };
  return objReturned;
}

function calculateEntry(entrants) {
  // seu código aqui
}

const entrants = [
  { name: 'Lara Carvalho', age: 5 },
  { name: 'Frederico Moreira', age: 5 },
  { name: 'Pedro Henrique Carvalho', age: 5 },
  { name: 'Maria Costa', age: 18 },
  { name: 'Núbia Souza', age: 18 },
  { name: 'Carlos Nogueira', age: 50 },
];

console.log(countEntrants(entrants));

module.exports = { calculateEntry, countEntrants };

const data = require('../data/zoo_data'); // linha de código fornecida pela escola Trybe

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
  if (entrants === undefined || entrants.length === undefined) {
    return 0;
  }
  const returned = countEntrants(entrants);
  const returnedOfCountEntrants = Object.values(returned);
  const prices = Object.values(data.prices);
  const priceChild = prices[2];
  const priceAdult = prices[0];
  const priceSenior = prices[1];
  const princesOrganized = [priceChild, priceAdult, priceSenior];
  const values = princesOrganized.map((item, index) => item * returnedOfCountEntrants[index]);
  const finalValue = values.reduce((acc, result) => acc + result);
  return finalValue;
}

const entrants = [
  { name: 'Lara Carvalho', age: 5 },
  { name: 'Frederico Moreira', age: 5 },
  { name: 'Pedro Henrique Carvalho', age: 5 },
  { name: 'Maria Costa', age: 18 },
  { name: 'Núbia Souza', age: 18 },
  { name: 'Carlos Nogueira', age: 50 },
];

module.exports = { calculateEntry, countEntrants }; // linha de código fornecida pela escola Trybe

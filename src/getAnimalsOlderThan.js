const { species } = require('../data/zoo_data'); // linha de código fornecida pela escola Trybe
const data = require('../data/zoo_data'); // linha de código fornecida pela escola Trybe

function getAnimalsOlderThan(animal, age) {
  const animals = species.find((element) => element.name === animal).residents;
  return animals.every((element) => element.age >= age);
}

module.exports = getAnimalsOlderThan; // linha de código fornecida pela escola Trybe

const data = require('../data/zoo_data'); // linha de código fornecida pela escola Trybe

function getOldestFromFirstSpecies(id) {
  const firstAnimal = data.employees.find((element) => element.id === id).responsibleFor[0];
  const animalArray = data.species.find((element) => element.id === firstAnimal).residents;
  const oldestAnimal = animalArray.sort((animalA, animalB) => animalB.age - animalA.age)[0];
  return [oldestAnimal.name, oldestAnimal.sex, oldestAnimal.age];
}

module.exports = getOldestFromFirstSpecies; // linha de código fornecida pela escola Trybe

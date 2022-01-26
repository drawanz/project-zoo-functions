const data = require('../data/zoo_data');

function countAnimals(animal) {
  const obj = {};
  data.species.forEach((item) => {
    obj[item.name] = item.residents.length;
  });
  if (animal === undefined) {
    return obj;
  }
  if (Object.keys(animal).length === 1 && Object.keys(obj).includes(Object.values(animal)[0])) {
    const animalName = Object.values(animal)[0];
    return obj[animalName];
  }
  if (Object.keys(animal).length === 2) {
    const animals = data.species.find((item) => item.name === Object.values(animal)[0]).residents;
    const numberPerSex = animals.filter((item) => item.sex === Object.values(animal)[1]);
    return numberPerSex.length;
  }
}

console.log(countAnimals({ specie: 'penguins' }));

module.exports = countAnimals;

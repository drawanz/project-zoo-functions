const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function animalName(id) {
  return data.species.find((element) => element.id === id).name;
}

function location(id) {
  return data.species.find((element) => element.id === id).location;
}

function coverage(element) {
  return {
    id: element.id,
    fullName: `${element.firstName} ${element.lastName}`,
    species: element.responsibleFor.map((valorAtual) => animalName(valorAtual)),
    locations: element.responsibleFor.map((valorAtual) => location(valorAtual)),
  };
}

function getEmployeesCoverage() {
  return data.employees.map((valorAtual) => coverage(valorAtual));
}

console.log(getEmployeesCoverage());
// { name: 'Sharonda' }
module.exports = getEmployeesCoverage;

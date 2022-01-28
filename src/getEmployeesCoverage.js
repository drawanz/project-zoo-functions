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

function getEmployeesCoverage(param) {
  const obj = data.employees.map((valorAtual) => coverage(valorAtual));

  if (param === undefined) {
    return obj;
  }
  const key = Object.values(param)[0];
  if (Object.keys(param).includes('name')) {
    return obj.filter((element) => element.fullName.includes(key))[0];
  }
  if (Object.keys(param).includes('id')) {
    return obj.filter((element) => element.id.includes(key))[0];
  }
  throw new Error('Informações inválidas');
}

console.log(getEmployeesCoverage());
// { name: 'Sharonda' }
module.exports = getEmployeesCoverage;

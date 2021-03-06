const { species } = require('../data/zoo_data'); // linha de código fornecida pela escola Trybe
const data = require('../data/zoo_data'); // linha de código fornecida pela escola Trybe

function animalName(id) {
  return species.find((element) => element.id === id).name;
}

function location(id) {
  return species.find((element) => element.id === id).location;
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
  if (obj.find((element) => element.fullName.includes(key))) {
    return obj.find((element) => element.fullName.includes(key));
  }
  if (obj.find((element) => element.id.includes(key))) {
    return obj.find((element) => element.id.includes(key));
  }
  throw new Error('Informações inválidas');
}

module.exports = getEmployeesCoverage; // linha de código fornecida pela escola Trybe

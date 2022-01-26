const data = require('../data/zoo_data');

const stephanieId = '9e7d4524-363c-416a-8759-8aa7e50c0992';
const olaId = 'fdb2543b-5662-46a7-badc-93d960fdc0a8';
const burlId = '0e7b460e-acf4-4e17-bcb3-ee472265db83';
const emery = 'b0dc644a-5335-489b-8a2c-4e086c7819a2';
const managers = [stephanieId, olaId, burlId, emery];

function isManager(id) {
  return managers.includes(id);
}

function getRelatedEmployees(managerId) {
  if (managerId === stephanieId) {
    return ['Burl Bethea', 'Ola Orloff', 'Emery Elser'];
  }
  if (managerId === olaId) {
    return ['Nigel Nelson', 'Wilburn Wishart', 'Sharonda Spry'];
  }
  if (managerId === burlId) {
    return ['Nigel Nelson', 'Wilburn Wishart'];
  }
  if (managerId === emery) {
    return ['Ardith Azevado'];
  }
  throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
}

console.log(getRelatedEmployees('9e7d4524-363c-416a-8759-8aa7e50c0992'));

module.exports = { isManager, getRelatedEmployees };

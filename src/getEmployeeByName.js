const data = require('../data/zoo_data'); // linha de código fornecida pela escola Trybe

function getEmployeeByName(employeeName) {
  const name = (element) => element.firstName === employeeName || element.lastName === employeeName;
  if (employeeName === undefined) {
    return {};
  }
  return data.employees.find(name);
}

module.exports = getEmployeeByName; // linha de código fornecida pela escola Trybe

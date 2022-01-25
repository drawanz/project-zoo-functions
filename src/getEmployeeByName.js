const data = require('../data/zoo_data');

function getEmployeeByName(employeeName) {
  const name = (element) => element.firstName === employeeName || element.lastName === employeeName;
  if (employeeName === undefined) {
    return {};
  }
  return data.employees.find(name);
}

console.log(getEmployeeByName());

module.exports = getEmployeeByName;

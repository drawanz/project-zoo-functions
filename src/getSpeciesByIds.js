const data = require('../data/zoo_data'); // linha de código fornecida pela escola Trybe

function getSpeciesByIds(...ids) {
  return ids.map((id) => data.species.find((element) => element.id === id));
}

module.exports = getSpeciesByIds; // linha de código fornecida pela escola Trybe

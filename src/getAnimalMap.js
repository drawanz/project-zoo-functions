const data = require('../data/zoo_data');

function getAnimalMap(options) {
  if (options === undefined) {
    let obj = {};
    const NE = data.species.filter((item) => item.location === 'NE').map((item) => item.name);
    const NW = data.species.filter((item) => item.location === 'NW').map((item) => item.name);
    const SE = data.species.filter((item) => item.location === 'SE').map((item) => item.name);
    const SW = data.species.filter((item) => item.location === 'SW').map((item) => item.name);
    obj = { NE, NW, SE, SW };
    return obj;
  }
}

console.log(getAnimalMap({ includeNames: true }));

module.exports = getAnimalMap;

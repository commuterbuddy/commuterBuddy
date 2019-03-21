/* eslint-disable no-prototype-builtins */
/*
  This file will output a function that looks up
  specific cities and their coordinates/ avg gas price

*/



const cityData = {
  'huntington beach': { lat: 33.6595, lng: -117.9988, gallon: 3.342 },
  'san bernardino': { lat: 34.1083, lng: -117.2898, gallon: 3.275 },
  'santa clarita': { lat: 34.3917, lng: -118.5426, gallon: 3.400 }, 
  'orange county': { lat: 33.7175, lng: -117.8311, gallon: 3.342 },  
  'santa barbara': { lat: 34.4208, lng: -119.6982, gallon: 3.503 },  
  'san francisco': { lat: 37.7749, lng: -122.4194, gallon: 3.542 },  
  'newport beach': { lat: 33.6189, lng: -117.9298, gallon: 3.342 },  
  'mountain view': { lat: 37.3861, lng: -122.0839, gallon: 3.542 },  
  'moreno valley': { lat: 33.9425, lng: -117.2297, gallon: 3.291 },  
  'san clemente': { lat: 33.4274, lng: -117.6126, gallon: 3.342 },  
  'laguna beach': { lat: 33.5427, lng: -117.7854, gallon: 3.342 },  
  'santa clara': { lat: 37.3541, lng: -121.9552, gallon: 3.542 },
  'west covina': { lat: 34.0686, lng: -117.9390, gallon: 3.400 },
  'chula vista': { lat: 32.6401, lng: -117.0842, gallon: 3.351 },
  'los angeles': { lat: 34.0522, lng: -118.2437, gallon: 3.400 },
  'long beach': { lat: 33.7701, lng: -118.1937, gallon: 3.400 },
  'dana point': { lat: 33.4672, lng: -117.6981, gallon: 3.342 },
  'san diego': { lat: 32.7157, lng: -117.1611, gallon: 3.351 },
  'palo alto': { lat: 37.4419, lng: -122.1430, gallon: 3.542 },
  'santa ana': { lat: 33.7455, lng: -117.8677, gallon: 3.342 },
  'el monte': { lat: 34.0686, lng: -118.0276, gallon: 3.400 },
  'el cajon': { lat: 32.7948, lng: -116.9625, gallon: 3.351 },
  northridge: { lat: 34.2381, lng: -118.5301, gallon: 3.300 },
  sacramento: { lat: 38.5816, lng: -121.4944, gallon: 3.269 },
  'san jose': { lat: 37.3382, lng: -121.8863, gallon: 3.405 },
  sunnyvale: { lat: 37.3688, lng: -122.0363, gallon: 3.542 },
  riverside: { lat: 33.9806, lng: -117.3755, gallon: 3.291 },
  cupertino: { lat: 37.3230, lng: -122.0322, gallon: 3.542 },
  oceanside: { lat: 33.1959, lng: -117.3795, gallon: 3.351 },
  escondido: { lat: 33.1192, lng: -117.0864, gallon: 3.351 },
  glendale: { lat: 34.1425, lng: -118.2551, gallon: 3.400 },
  lancaster: { lat: 40.0379, lng: -76.3055, gallon: 3.400 },
  palmdale: { lat: 34.5794, lng: -118.1165, gallon: 3.400 },
  torrance: { lat: 33.8358, lng: -118.3406, gallon: 3.400 },
  milpitas: { lat: 37.4323, lng: -121.8996, gallon: 3.542 },
  carlsbad: { lat: 33.1581, lng: -117.3506, gallon: 3.351 },
  pasadena: { lat: 34.1478, lng: -118.1445, gallon: 3.400 },
  stanford: { lat: 37.4241, lng: -122.1661, gallon: 3.542 },
  murrieta: { lat: 33.5539, lng: -117.2139, gallon: 3.291 },
  temecula: { lat: 33.4936, lng: -117.1484, gallon: 3.291 },
  norwalk: { lat: 33.9022, lng: -118.0817, gallon: 3.400 },
  burbank: { lat: 34.1808, lng: -118.3090, gallon: 3.400 },
  oakland: { lat: 37.8044, lng: -122.2711, gallon: 3.401 },
  anaheim: { lat: 33.8366, lng: -117.9143, gallon: 3.342 },
  pomona: { lat: 34.0551, lng: -117.7500, gallon: 3.400 },
  irvine: { lat: 33.6846, lng: -117.8265, gallon: 3.342 },
  downey: { lat: 33.9401, lng: -118.1332, gallon: 3.400 },
  corona: { lat: 33.8753, lng: -117.5664, gallon: 3.291 },
  vista: { lat: 33.2000, lng: -117.2425, gallon: 3.351 },
  // ventura: { lat: 0, lng: -0, gallon: 3.291 },
};

const findCityCoordsAndGas = (cityString) => {
  if (!cityData.hasOwnProperty(cityString)) {
    return null;
  }
  const { lat, lng, gallon } = cityData[cityString];

  return { lat, lng, gallon };
};

module.exports = {
  cityData,
  findCityCoordsAndGas,
};

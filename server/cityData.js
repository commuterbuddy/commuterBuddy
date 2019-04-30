/* eslint-disable no-prototype-builtins */
/*
  This file will output a function that looks up
  specific cities and their coordinates/ avg gas price

*/



const cityData = {
  'Huntington Beach': { lat: 33.6595, lng: -117.9988, gallon: 3.342 },
  'San Bernardino': { lat: 34.1083, lng: -117.2898, gallon: 3.275 },
  'Santa Clarita': { lat: 34.3917, lng: -118.5426, gallon: 3.400 }, 
  'Orange County': { lat: 33.7175, lng: -117.8311, gallon: 3.342 },  
  'Santa Barbara': { lat: 34.4208, lng: -119.6982, gallon: 3.503 },  
  'San Francisco': { lat: 37.7749, lng: -122.4194, gallon: 3.542 },  
  'Newport Beach': { lat: 33.6189, lng: -117.9298, gallon: 3.342 },  
  'Mountain View': { lat: 37.3861, lng: -122.0839, gallon: 3.542 },  
  'Moreno Valley': { lat: 33.9425, lng: -117.2297, gallon: 3.291 },  
  'San Clemente': { lat: 33.4274, lng: -117.6126, gallon: 3.342 },  
  'Laguna Beach': { lat: 33.5427, lng: -117.7854, gallon: 3.342 },  
  'Santa Clara': { lat: 37.3541, lng: -121.9552, gallon: 3.542 },
  'West Covina': { lat: 34.0686, lng: -117.9390, gallon: 3.400 },
  'Chula Vista': { lat: 32.6401, lng: -117.0842, gallon: 3.351 },
  'Los Angeles': { lat: 34.0522, lng: -118.2437, gallon: 3.400 },
  'Long Beach': { lat: 33.7701, lng: -118.1937, gallon: 3.400 },
  'Dana Point': { lat: 33.4672, lng: -117.6981, gallon: 3.342 },
  'San Diego': { lat: 32.7157, lng: -117.1611, gallon: 3.351 },
  'Palo Alto': { lat: 37.4419, lng: -122.1430, gallon: 3.542 },
  'Santa Ana': { lat: 33.7455, lng: -117.8677, gallon: 3.342 },
  'El Monte': { lat: 34.0686, lng: -118.0276, gallon: 3.400 },
  'El Cajon': { lat: 32.7948, lng: -116.9625, gallon: 3.351 },
  'Northridge': { lat: 34.2381, lng: -118.5301, gallon: 3.300 },
  'Sacramento': { lat: 38.5816, lng: -121.4944, gallon: 3.269 },
  'San Jose': { lat: 37.3382, lng: -121.8863, gallon: 3.405 },
  'Sunnyvale': { lat: 37.3688, lng: -122.0363, gallon: 3.542 },
  'Riverside': { lat: 33.9806, lng: -117.3755, gallon: 3.291 },
  'Cupertino': { lat: 37.3230, lng: -122.0322, gallon: 3.542 },
  'Oceanside': { lat: 33.1959, lng: -117.3795, gallon: 3.351 },
  'Escondido': { lat: 33.1192, lng: -117.0864, gallon: 3.351 },
  'Glendale': { lat: 34.1425, lng: -118.2551, gallon: 3.400 },
  'Lancaster': { lat: 40.0379, lng: -76.3055, gallon: 3.400 },
  'Palmdale': { lat: 34.5794, lng: -118.1165, gallon: 3.400 },
  'Torrance': { lat: 33.8358, lng: -118.3406, gallon: 3.400 },
  'Milpitas': { lat: 37.4323, lng: -121.8996, gallon: 3.542 },
  'Carlsbad': { lat: 33.1581, lng: -117.3506, gallon: 3.351 },
  'Pasadena': { lat: 34.1478, lng: -118.1445, gallon: 3.400 },
  'Stanford': { lat: 37.4241, lng: -122.1661, gallon: 3.542 },
  'Murrieta': { lat: 33.5539, lng: -117.2139, gallon: 3.291 },
  'Temecula': { lat: 33.4936, lng: -117.1484, gallon: 3.291 },
  'Norwalk': { lat: 33.9022, lng: -118.0817, gallon: 3.400 },
  'Burbank': { lat: 34.1808, lng: -118.3090, gallon: 3.400 },
  'Oakland': { lat: 37.8044, lng: -122.2711, gallon: 3.401 },
  'Anaheim': { lat: 33.8366, lng: -117.9143, gallon: 3.342 },
  'Pomona': { lat: 34.0551, lng: -117.7500, gallon: 3.400 },
  'Irvine': { lat: 33.6846, lng: -117.8265, gallon: 3.342 },
  'Downey': { lat: 33.9401, lng: -118.1332, gallon: 3.400 },
  'Corona': { lat: 33.8753, lng: -117.5664, gallon: 3.291 },
  'Vista': { lat: 33.2000, lng: -117.2425, gallon: 3.351 },
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

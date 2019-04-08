/*
  This file will output a function that looks up
  specific counties and their cities.

*/

const countyData = {
  'Alameda': ['Oakland'],
  'Los Angeles': ['Burbank', 'Downey', 'El Monte', 'Glendale', 'Lancaster', 'Long Beach', 'Los Angeles', 'Norwalk', 'Northridge', 'Palmdale', 'Pasadena', 'Pomona', 'Santa Clarita', 'Torrance', 'West Covina'],
  'Orange': ['Anaheim', 'Dana Point', 'Huntington Beach', 'Irvine', 'Laguna Beach', 'Orange', 'Newport Beach', 'San Clemente', 'Santa Ana'],
  'Riverside': ['Corona', 'Moreno Valley', 'Murrieta', 'Riverside', 'Temecula'],
  'Sacramento': ['Sacramento'],
  'San Bernardino': ['San Bernardino'],
  'San Diego': ['Escondido', 'El Cajon', 'Carlsbad', 'Chula Vista', 'Oceanside', 'San Diego', 'Vista'],
  'San Francisco': ['San Francisco'],
  'Santa Barbara': ['Santa Barbara'],
  'Santa Clara': ['Cupertino', 'Milpitas', 'Mountain View', 'Palo Alto', 'San Jose', 'Santa Clara', 'Stanford', 'Sunnyvale']
};

module.exports = countyData;

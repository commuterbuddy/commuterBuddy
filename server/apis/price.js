/* 
this file makes the object that will contain the pricing to send back
i am thinking that this file should export a class of prize?
with methods that fill it out? what could go wrong?
async functions dont play nice? i only need to calc them once
/*
Prices = {
  uber: {
    'X': '$10',
    'Lux': '$55',
  },

  lyft: {
    'Line': '$12',
    'Premier': '$45',
  },

  gas: '$18',
  avgGallon: 3.50,
  bird: '$30',
}
*/



const getPrice = async () => {
//this function needs to return an object with all the info
//in the same shape as above
//the uber and lyft apis need to provide the information for the properties

  const uberPrices = await //uber api return array
  const lyftPrices = await //lyft api return array

};

module.exports = Price;

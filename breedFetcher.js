const request = require("request");




const fetchBreedDescription = (breed, callback) => {
  request(`https://api.thecatapi.com/v1/breeds/search?q=${breed}`, (error, response, body) => {
    if (error !== null) {
      callback(error, null);
    } else {
      const data = JSON.parse(body);
      if (data[0]) {
        const description = data[0].description;
        callback(null, description);
      } else {
        callback(error, null);
      }
    } // Print the error if one occurred
  });
};




module.exports = {fetchBreedDescription};
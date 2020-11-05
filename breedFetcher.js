const request = require("request");




const fetchBreedDescription = (breed, callback) => {
  request(`https://api.thecatapi.com/v1/breeds/search?q=${breed}`, (error, response, body) => {
    if (!error) {
      const data = JSON.parse(body);
      if (data[0]) {
        const description = data[0].description;
        callback(null, description);
      } else {
        console.log(`Sorry. That breed isn't in our database.`);
      }
    } else {
      callback(error, null);
    } // Print the error if one occurred
  });
};




module.exports = {fetchBreedDescription};
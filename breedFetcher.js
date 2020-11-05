const request = require("request");

const query = process.argv[2];


request(`https://api.thecatapi.com/v1/breeds/search?q=${query}`, function(error, response, body) {
  if (error) {
    console.log('Error:', error);
    throw new Error(error);
  } // Print the error if one occurred
  console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  const data = JSON.parse(body);
  if (!data[0]) {
    console.log(`No breeds found matching your query. Try again.`);
  } else {
    console.log(data[0].description);
  }
});

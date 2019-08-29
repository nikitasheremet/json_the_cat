const request = require("request");

const fetchBreedDescription = (breedName, callback) => {
  request(`https://api.thecatapi.com/v1/breeds/search?q=${breedName}`, (error, response, body) => {
    // let data = JSON.parse(body);
    // console.log(error);
    if (error || JSON.parse(body)[0] === undefined) {
      callback(error, null);
    } else callback(null, JSON.parse(body)[0].description.trim())
  });
}

module.exports = fetchBreedDescription;

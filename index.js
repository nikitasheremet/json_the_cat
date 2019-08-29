const fetchBreedDescription = require("./breedFetcher");

fetchBreedDescription('gchhjgkh', (error, description) => {
  if (error) {
    console.log("Error fetch details: ", error);
  } else console.log(description);

});
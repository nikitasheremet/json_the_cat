const request = require("request");

request(`https://api.thecatapi.com/v1/breeds/search?q=${process.argv[2]}`, (error, response, body) => {
  if (error) throw error;
  const data = JSON.parse(body);
  if (data.length !== 0) {
    console.log(data[0].description);
  } else console.log(process.argv[2], "Not Found")
});
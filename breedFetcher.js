const request = require("request");

const fetchBreedDescription = function(breedName, callback) {
  request(
    `https://api.thecatapi.com/v1/breeds/search?q=${breedName}`,
    (error, response, body) => {
      if (error) {
        callback(`Error: ${error}`, null);
      } else {
        const data = JSON.parse(body);
        let matchFound = false;
        for (let i = 0; i < data.length; i++) {
          if (data[i].name.toLowerCase() === breedName.toLowerCase()) {
            callback(null, data[i].description);
            matchFound = true;
            break;
          }
        }
        if (!matchFound) {
          callback(`Sorry, the requested breed '${breedName}' was not found.`);
        }
      }
    }
  );
};

module.exports = { fetchBreedDescription };

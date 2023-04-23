const request = require("request");
const breedName = process.argv.slice(2)[0];
console.log(breedName);
if (!breedName || typeof breedName !== "string") {
  console.log("Please provide a valid breed name as a command-line argument.");
  process.exit(1);
}

request(
  `https://api.thecatapi.com/v1/breeds/search?q=${breedName}`,
  (error, response, body) => {
    if (error) {
      console.log(`Error: ${error}`);
    } else {
      const data = JSON.parse(body);
      let matchFound = false;
      for (let i = 0; i < data.length; i++) {
        if (data[i].name.toLowerCase() === breedName.toLowerCase()) {
          console.log(`Description of ${data[i].name}: `);
          console.log(data[i].description);
          matchFound = true;
          break;
        }
      }
      if (!matchFound) {
        console.log(`Sorry, the requested breed '${breedName}' was not found.`);
      }
    }
  }
);

const { fetchBreedDescription } = require("./breedFetcher");
const breedName = process.argv.slice(2)[0];

if (!breedName || typeof breedName !== "string") {
  console.log("Please provide a valid breed name as a command-line argument.");
  process.exit(1);
}

fetchBreedDescription(breedName, (error, description) => {
  if (error) {
    console.log(error);
  } else {
    console.log(`Description of ${breedName}`);
    console.log(description);
  }
});

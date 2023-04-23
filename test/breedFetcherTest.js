// breedFetcherTest.js

const { fetchBreedDescription } = require("../breedFetcher");
const { assert } = require("chai");

describe("fetchBreedDescription", () => {
  it("returns a string description for a valid breed, via callback", (done) => {
    fetchBreedDescription("Siberian", (err, description) => {
      // we expect no error for this scenario
      assert.equal(err, null);

      const expectedDesc =
				"The Siberians dog like temperament and affection makes the ideal lap cat and will live quite happily indoors. Very agile and powerful, the Siberian cat can easily leap and reach high places, including the tops of refrigerators and even doors.";

      // compare returned description
      assert.equal(expectedDesc, description.trim());

      done();
    });
  });
  it("returns an error and null for an invalid breed, via callback", (done) => {
    fetchBreedDescription("InvalidBreed", (err, description) => {
      // we expect an error for this scenario
      assert.exists(err);
      assert.equal(description, null);

      done();
    });
  });
});

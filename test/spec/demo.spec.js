require("../bootstrap");

const should = require("should");
const request = require("supertest");

describe("Test Index,", () => {
  it("Should get 200 response.", done => {
    request(app)
      .get("/")
      .set("Accept", "application/json")
      .expect(200)
      .expect("Content-Type", /html/)
      .end(done);
  });
});

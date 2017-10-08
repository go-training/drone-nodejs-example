require("../bootstrap");

const should = require("should");
const request = require("supertest");

describe("Test Index,", () => {
  it("Should get 200 response.", done => {
    request(app)
      .get("/")
      .expect(200)
      .expect("Content-Type", /html/)
      .end(done);
  });
});

describe("GET /users", () => {
  it("respond with json", done => {
    request(app)
      .get("/user")
      .set("Accept", "application/json")
      .expect(200)
      .expect("Content-Type", /json/)
      .end((err, res) => {
        if (err) return done(err);
        done();
      });
  });
});

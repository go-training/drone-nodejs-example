const redis = require("redis"),
  client = redis.createClient({
    host: "cache",
    port: 6379
  });

client.on("error", (err) => {
  console.log("Error " + err);
});

client.set("course", "drone");
client.get("course", (err, reply) => {
  // reply is null when the key is missing
  console.log("course value is " + reply);
});

client.quit();

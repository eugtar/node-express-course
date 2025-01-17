const { createReadStream } = require("fs");

const stream = createReadStream("./content/big.txt", {
  highWaterMark: 20000,
  encoding: "utf-8",
});
stream.on("data", (result) => console.log(result));
stream.on("error", (error) => console.error(error));

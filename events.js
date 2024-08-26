const { EventEmitter } = require("events");
const http = require("http");

class Sales extends EventEmitter {
  constructor() {
    super();
  }
}

const myEmitter = new Sales();

// even emitter can be used to set up multiple listeners from the same event.

myEmitter.on("newSale", () => {
  console.log("There was a new sale!");
});

myEmitter.on("newSale", () => {
  console.log("Customer name: Jonas");
});

myEmitter.on("newSale", (stock) => {
  console.log(`There are new ${stock} items left in stock. `);
});

myEmitter.emit("newSale", 9);

const server = http.createServer();

server.on("request", (req, res) => {
  console.log("request received!"); // zoomToPoint
  res.end("Request received");
});

server.on("request", (req, res) => {
  console.log("another request");
});

server.on('close', () => {
  console.log('Server closed')
})

server.listen(8000, '127.0.0.1', () => {
  console.log('waiting for requests...')
})

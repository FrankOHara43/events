const { EventEmitter } = require("events");
const http = require('http')

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

const server = http.createServer()
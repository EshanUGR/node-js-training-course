const EventEmitter = require("events");

const customeEmitter = new EventEmitter();

customeEmitter.on("response", (name, id) => {
  console.log(`data recived ${name} with id:${id} `);
});

customeEmitter.emit("response", "john", 34);
customeEmitter.on("response", () => {
  console.log("some other logic here");
});

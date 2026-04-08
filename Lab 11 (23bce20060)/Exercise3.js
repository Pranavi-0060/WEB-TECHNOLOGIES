const EventEmitter = require("events");

// Create emitter
const emitter = new EventEmitter();

// Listener 1
emitter.on("login", (user) => {
    console.log(`User ${user} logged in`);
});

// Listener 2 (same event)
emitter.on("login", (user) => {
    console.log(`Welcome ${user}!`);
});

// Another event
emitter.on("logout", (user) => {
    console.log(`User ${user} logged out`);
});

// Trigger events
console.log("Starting event execution...\n");

emitter.emit("login", "Student");

// Async event
setTimeout(() => {
    emitter.emit("logout", "Student");
}, 2000);
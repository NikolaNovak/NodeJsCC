import { EventEmitter } from "node:events"

const myEmitter = new EventEmitter()

const greetHandler = (name) => {
	console.log(`Hello ${name}`)
}

const goodbyeHandler = (name) => {
	console.log(`Goodbye ${name}`)
}

// add event listeners
myEmitter.on("greet", greetHandler)
myEmitter.on("goodbye", goodbyeHandler)

// emit events
myEmitter.emit("greet", "Nikola")
myEmitter.emit("goodbye", "Nikola")

// error event
myEmitter.on("error", (err) => {
	console.error("[error]", err)
})

// error event
myEmitter.emit("error", new Error("An error occurred"))

// remove event listeners
myEmitter.off("greet", greetHandler)
myEmitter.off("goodbye", goodbyeHandler)

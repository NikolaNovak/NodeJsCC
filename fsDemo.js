import fs from "node:fs"
import fsPromises from "node:fs/promises"

// sync
const data = fs.readFileSync("test.txt", "utf-8")
console.log("[data from sync]", data)

// async callback
fs.readFile("test.txt", "utf-8", (err, data) => {
	if (err) {
		console.log(err)
	} else {
		console.log("[data from async callback]", data)
	}
})

// async promises
fsPromises
	.readFile("test.txt", "utf-8")
	.then((data) => {
		console.log("[data from promises]", data)
	})
	.catch((err) => {
		console.log(err)
	})

// async await
const readFile = async () => {
	try {
		const data = await fsPromises.readFile("test.txt", "utf-8")
		console.log("[data from await]", data)
	} catch (err) {
		console.log(err)
	}
}
readFile()

// write file
const writeFile = async () => {
	try {
		await fsPromises.writeFile("test.txt", "Hello, world!")
		console.log("[write file] File written successfully")
	} catch (err) {
		console.log(err)
	}
}
writeFile()

// append file
const appendFile = async () => {
	try {
		await fsPromises.appendFile("test.txt", "\nAppended text")
		console.log("[append file] File appended successfully")
	} catch (err) {
		console.log(err)
	}
}
appendFile()

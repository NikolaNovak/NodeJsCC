import fs from "node:fs"
import url from "node:url"
import path from "node:path"

const __filename = url.fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

// create read stream
const readStream = fs.createReadStream(
	path.join(__dirname, "readStream.txt"),
	"utf-8",
)
const writeStream = fs.createWriteStream(
	path.join(__dirname, "writeStream.txt"),
)

// read
readStream.on("data", (chunk) => {
	console.log("[chunk]", chunk)
	// write
	writeStream.write(chunk)
})
readStream.on("end", () => {
	console.log("[end]")
})
readStream.on("error", (err) => {
	console.log("[error]", err)
})

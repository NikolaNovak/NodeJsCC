import fs from "node:fs"
import url from "node:url"
import path from "node:path"
import http from "node:http"

const PORT = process.env.PORT
const __filename = url.fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const server = http.createServer((req, res) => {
	console.log("req was made to: ", req.url)
	res.writeHead(200, { "Content-Type": "text/plain" })
	const readStream = fs.createReadStream(
		path.join(__dirname, "readStream.txt"),
		"utf-8",
	)
	readStream.pipe(res)
})

server.listen(PORT, () => {
	console.log(`Server is running on port ${PORT}`)
})

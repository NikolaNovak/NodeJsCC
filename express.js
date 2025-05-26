import express from "express"
import path from "node:path"
import url from "node:url"

const app = express()
const __filename = url.fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

// setup static files
app.use(express.static(path.join(__dirname, "public")))

app.get("/", (req, res) => {
	res.sendFile(path.join(__dirname, "public", "index.html"))
})

app.get("/about", (req, res) => {
	res.sendFile(path.join(__dirname, "public", "about.html"))
})

app.listen(3000, () => {
	console.log("Server is running on port 3000")
})

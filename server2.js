import { createServer } from "node:http"

const PORT = process.env.PORT

const users = [
	{ id: 1, name: "John Doe" },
	{ id: 2, name: "Jane Doe" },
	{ id: 3, name: "Jim Doe" },
]

const loggerMiddleware = (req, res, next) => {
	console.log(`[logger] ${req.method} ${req.url}`)
	next()
}

const server = createServer((req, res) => {
	loggerMiddleware(req, res, () => {
		if (req.url === "/api/users" && req.method === "GET") {
			res.writeHead(200, { "Content-Type": "application/json" })
			res.end(JSON.stringify(users))
		} else if (
			req.url.match(/\/api\/users\/([0-9]+)/) &&
			req.method === "GET"
		) {
			const id = req.url.split("/")[3]
			const user = users.find((user) => user.id === Number.parseInt(id))

			res.setHeader("Content-Type", "application/json")
			if (user) {
				res.statusCode = 200
				res.write(JSON.stringify(user))
			} else {
				res.statusCode = 404
				res.write(JSON.stringify({ message: "User not found" }))
			}
			res.end()
		} else {
			res.writeHead(404, { "Content-Type": "application/json" })
			res.end(JSON.stringify({ message: "Route not found" }))
		}
	})
})

server.listen(PORT, () => {
	console.log(`Server is running on port ${PORT}`)
})

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

const jsonMiddleware = (req, res, next) => {
	res.setHeader("Content-Type", "application/json")
	next()
}

const getUsersHandler = (req, res) => {
	res.statusCode = 200
	res.write(JSON.stringify(users))
	res.end()
}

const getUserByIdHandler = (req, res) => {
	const id = req.url.split("/")[3]
	const user = users.find((user) => user.id === Number.parseInt(id))

	if (user) {
		res.statusCode = 200
		res.write(JSON.stringify(user))
	} else {
		res.statusCode = 404
		res.write(JSON.stringify({ message: "User not found" }))
	}
	res.end()
}

const createUserHandler = (req, res) => {
	let body = ""
	req.on("data", (chunk) => {
		body += chunk.toString()
	})
	req.on("end", () => {
		const user = JSON.parse(body)
		users.push(user)
		res.statusCode = 201
		res.end(JSON.stringify(user))
	})
}

const notFoundHandler = (req, res) => {
	res.statusCode = 404
	res.write(JSON.stringify({ message: "Route not found" }))
	res.end()
}

const server = createServer((req, res) => {
	loggerMiddleware(req, res, () => {
		jsonMiddleware(req, res, () => {
			if (req.url === "/api/users" && req.method === "GET") {
				getUsersHandler(req, res)
			} else if (req.url === "/api/users" && req.method === "POST") {
				createUserHandler(req, res)
			} else if (
				req.url.match(/\/api\/users\/([0-9]+)/) &&
				req.method === "GET"
			) {
				getUserByIdHandler(req, res)
			} else {
				notFoundHandler(req, res)
			}
		})
	})
})

server.listen(PORT, () => {
	console.log(`Server is running on port ${PORT}`)
})

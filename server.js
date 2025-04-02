import http from 'http'

const PORT = process.env.PORT || 8000

const server = http.createServer((req, res) => {
    // res.setHeader('Content-Type', 'text/html')
    // res.statusCode = 200
    res.writeHead(200, { 'Content-Type': 'text/html' })
    res.end('<h1>Hello World</h1>')
})

server.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})

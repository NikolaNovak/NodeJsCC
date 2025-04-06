// process.argv
console.log("[process argv]", process.argv)

// process.env
console.log("[process env]", process.env)

// pid
console.log("[process pid]", process.pid)

// process.cwd
console.log("[process cwd]", process.cwd())

// title
console.log("[process title]", process.title)

// memory usage
console.log("[process memory usage]", process.memoryUsage())

// uptime
console.log("[process uptime]", process.uptime())

// exit code
process.on("exit", () => {
	console.log("[process exit]", process.exitCode)
})

process.exit(0)

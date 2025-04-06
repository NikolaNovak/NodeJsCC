import crypto from "node:crypto"

// create hash
const hash = crypto.createHash("sha256")

// update hash
hash.update("hello")

// digest
console.log("[hash]", hash.digest("hex"))

// randomBytes
crypto.randomBytes(16, (err, buf) => {
	if (err) {
		console.error("[err]", err)
	} else {
		console.log("[buf]", buf.toString("hex"))
	}
})

// createCipheriv & createDecipheriv
const algorithm = "aes-256-cbc"
const key = crypto.randomBytes(32)
const iv = crypto.randomBytes(16)

const cipher = crypto.createCipheriv(algorithm, key, iv)
let encrypted = cipher.update("hello, this is a secret message", "utf8", "hex")
encrypted += cipher.final("hex")

console.log("[encrypted]", encrypted)

const decipher = crypto.createDecipheriv(algorithm, key, iv)
let decrypted = decipher.update(encrypted, "hex", "utf8")
decrypted += decipher.final("utf8")

console.log("[decrypted]", decrypted)

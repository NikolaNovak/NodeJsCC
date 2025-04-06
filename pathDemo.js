import path from "node:path"
import url from "node:url"

const filePath = "./dir1/dir2/test.txt"

// basename
console.log("[basename]", path.basename(filePath))

// dirname
console.log("[dirname]", path.dirname(filePath))

// extname
console.log("[extname]", path.extname(filePath))

// parse
console.log("[parse]", path.parse(filePath))

const __filename = url.fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
console.log("[__filename]", __filename)
console.log("[__dirname]", __dirname)

// join
const filePath2 = path.join(__dirname, "dir1", "dir2", "test.txt")
console.log("[filePath2]", filePath2)

// resolve
const filePath3 = path.resolve(__dirname, "dir1", "dir2", "test.txt")
console.log("[filePath3]", filePath3)

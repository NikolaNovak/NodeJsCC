import url from "node:url"

const urlString = "https://www.google.com/search?q=node+js"

// URL object
const urlObj = new URL(urlString)
console.log("[urlObj]", urlObj)

// search params
console.log("[searchParams]", urlObj.searchParams)

// format
console.log("[format]", url.format(urlObj))

// import.meta.url
console.log("[import.meta.url]", import.meta.url)

// fileURLToPath
console.log("[fileURLToPath]", url.fileURLToPath(import.meta.url))

// URLSearchParams
const params = new URLSearchParams(urlObj.searchParams)
console.log("[params]", params)

// get param
console.log("[get param]", params.get("q"))

// append param
params.append("hello", "world")
console.log("[append param]", params)

// delete param
params.delete("hello")
console.log("[delete param]", params)

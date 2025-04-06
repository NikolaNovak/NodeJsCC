import os from "node:os"

// user info
console.log("[userInfo]", os.userInfo())

// total memory
console.log("[totalMemory]", os.totalmem())

// free memory
console.log("[freeMemory]", os.freemem())

// cpu
console.log("[cpu]", os.cpus())

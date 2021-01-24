const express = require("express")
require("dotenv").config();
// const session = require("express-session")
const cookieParser = require("cookie-parser") // cookie to object
const usersRouter = require("./users/users-router")


const server = express()
const port = process.env.PORT || 5000

server.use(express.json())
server.use(cookieParser())

server.use(usersRouter)
server.use((err, req, res, next) => {
	console.log(err)
	
	res.status(500).json({
		message: "Something went wrong",
	})
})

server.get("/", (req, res, next) => {
    res.send("YOU GOT IT!")
})

server.listen(port, () => {
	console.log(`Running at http://localhost:${port}`)
})
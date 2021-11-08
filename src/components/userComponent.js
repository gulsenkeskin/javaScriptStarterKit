import UserService from "../services/userService.js"

console.log("User componenet yüklendi")

let userService = new UserService
userService.add()
userService.getById()
userService.list()
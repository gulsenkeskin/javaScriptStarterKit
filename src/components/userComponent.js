import User from "../models/user.js"
import UserService from "../services/userService.js"

console.log("User componenet yüklendi")

let userService = new UserService

let user1 = new User();
userService.add()



userService.getById()
userService.list()

let customer = { id: 1, firstName: "Engin" }
//prototyping : js de sonradan bir değer ekleyebiliriz buna prototyping denir
customer.lastName = "Demiroğ"
console.log(customer.lastName)
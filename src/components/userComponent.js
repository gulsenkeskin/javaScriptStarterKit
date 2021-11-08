import { BaseLogger, ElasticLogger, MongoLogger } from "../curossCuttingConcerns/logging/logger.js"
import User from "../models/user.js"
import UserService from "../services/userService.js"

console.log("User componenet yüklendi")
let logger1 = new ElasticLogger()
let userService = new UserService(logger1)

let user1 = new User(1, "Gülsen", "Keskin", "Uşak");
let user2 = new User(2, "Elif", "Kaya", "Balıkesir");

userService.add(user1)
userService.add(user2)

console.log(userService.list())
console.log(userService.getById(2))

userService.getById(1)
userService.list()

let customer = { id: 1, firstName: "Engin" }
//prototyping : js de sonradan bir değer ekleyebiliriz buna prototyping denir
customer.lastName = "Demiroğ"
console.log(customer.lastName)
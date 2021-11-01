function addToCart(quantity, productName = "meyve") {
    console.log("Sepete eklendi: " + productName + " adet :  " + quantity)
}
addToCart()
addToCart(10)

let sayHello = () => {
    console.log("hello world")
}
sayHello()

let sayHello2 = function () {
    console.log("Hello world 2")
}

sayHello2()
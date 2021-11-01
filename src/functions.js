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

function addToCart2(productName, quantity, unitPrice) {
    console.log("productName : " + productName)

}
addToCart2("elma", 5, 10)


let product1 = { productName: "kivi", unitPrice: 8, quantity: 35 }

function addToCart3(product) {
    console.log("productName : " + product.productName)
}

addToCart3(product1)
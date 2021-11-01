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


//todooooooooooooooooooooooooooooo
let product2 = { productName: "bisküvi,", unitPrice: 5, quantity: 30 }
let product3 = { productName: "çikolata", unitPrice: 3, quantity: 15 }

let products = [{ productName: "bisküvi,", unitPrice: 5, quantity: 30 }, { productName: "çikolata", unitPrice: 3, quantity: 15 }]

let products2 = [product1, product2, product3]

function addToCart4(products) {
    console.log(products)
}
addToCart4(products)
addToCart4(products2)


//rest operatörü

function add(number1, number2, number3) {
    console.log(number1 + number2 + number3)
}

add(20, 30, 6)


function add2(...numbers) {
    let total = 0;

    for (let i = 0; i < numbers.length; i++) {
        total += numbers[i];
    }
    console.log(total)

}

add2(20, 30, 6)
add2(546, 45, 6456)
add2(798, 987, 456)


function add3(bisey, ...numbers) {
    let total = 0;

    for (let i = 0; i < numbers.length; i++) {
        total += numbers[i];
    }
    console.log(total)
    console.log("bisey", bisey)


}
//20 bisey olur
add3(20, 30, 6)
//546 bisey olur
add3(546, 45, 6456)

//rest operatörü dışında başka değişkenler kullanılıcaksa bunlar başa yazılmalıdır yoksa hata veririr
//----------------------------

//spread operatörü
let numbers = [30,
    554, 556152, 97, 6554, 6565, 87, 88]
console.log(Math.max(...numbers))


//spread ayrıştırır rest toparlar

//----------------
// let [icAnadolu, marmara] = ["iç anadolu", "marmara", "ege"]
// console.log(icAnadolu)
// console.log(marmara)

//----------
//DESTRUCTION EXAMPLE
let [icAnadolu, marmara, karadeniz, [icAnadoluSehirleri]] = [
    { name: "İç Anadolu", population: "20M" },
    { name: "Marmara", population: "30M" },
    { name: "Karadeniz", populations: "10M" },
    [
        ["Ankara", "Konya"],
        ["İstanbul", "Bursa"],
        ["Sinop", "Samsun"]

    ]
]
console.log(icAnadolu.name)
console.log(icAnadolu.population)
console.log(icAnadoluSehirleri)

//object destruction example
let newProductName, newUnitPrice, newQuantity
({ productName: newProductName, unitPrice: newUnitPrice, quantity: newQuantity } = { productName: "Elma", unitPrice: 10, quantity: 5 })

console.log(newProductName)
console.log(newUnitPrice)
console.log(newQuantity)



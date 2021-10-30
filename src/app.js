//spread example
//spread: ayrıştırmak : elimizdeki bir aray'i ayrıştırır
let points = [1, 2, 3, 545, 898]
console.log(...points)
console.log(Math.max(...points))

//rest example
//rest ile istediğimiz kadar parametre gönderebiliriz. Gönderdiğimiz parametreler dizi içinde gider
let showProducts = function (id, ...products) {
    console.log(id);
    console.log(products[0])
}
showProducts(10, "elma", "armut", "pizza")


//destructuring example
let populations = [1000, 2000, 3000, [4000, 5000]]
let [small, medium, high, [veryHigh, maximum]] = populations
console.log(small)
console.log(medium)
console.log(high)
console.log(veryHigh)
console.log(maximum)

//example: 2
function someFunction([small1], number) {
    console.log(small1)
}
someFunction(populations)
//gelen dizinin ilk elemanını small1 değişkenine atar ve onu yazar


let category = { id: 1, name: "içecek" }
console.log(category.id);
console.log(category["name"])

//object destruction example:
let { id, name } = category
console.log(id)
console.log(name)


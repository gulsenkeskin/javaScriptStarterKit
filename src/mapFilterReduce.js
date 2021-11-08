let cart = [
    { id: 1, productName: "Telefon", quantity: 3, unitPrice: 4000 },
    { id: 2, productName: "Bardak", quantity: 2, unitPrice: 30 },
    { id: 3, productName: "Kalem", quantity: 1, unitPrice: 20 },
    { id: 4, productName: "Şarj Cihazı", quantity: 2, unitPrice: 100 },
    { id: 5, productName: "Kitap", quantity: 3, unitPrice: 30 },
    { id: 6, productName: "Kahve Potu", quantity: 5, unitPrice: 150 },

]

// cart.push({ id: 7, productName: "Ruhsat", quantity: 1, unitPrice: 20 })

//push operasyonu bellekteki yeri değiştirmez
//angular react vue bu durumu referansın değişmesi yoluyla ele alır react bunu yapmaz
//bizim bu referansı değiştirmemiz gereekir.

//referans tip
function addToCart(sepet) {
    sepet.push({ id: 7, productName: "Ruhsat", quantity: 1, unitPrice: 20 })
}

addToCart(cart) // {id: 7, productName: "Ruhsat", quantity: 1, unitPrice: 20 } ekler
console.log(cart)


//değer tip
let sayi = 10

function sayiTopla(number) {
    number += 1
}
sayiTopla(sayi)
console.log(sayi) //10

//hem iterate eder hem yeni bir array verir 
// cart.map(product => console.log(product.productName))

console.log("<ul>")
cart.map(product => {
    console.log("<li>" + product.productName + " : " + product.unitPrice * product.quantity + "</li >")
})
console.log("</ul>")

//reduce
//acc accumulator , product takma isim
//toplam hesaplayacağımız için başlabgıç bir accumulatöre ihtiyacımız var ve her bir eleman için 0 toplamaya kaçtan başlanacağı accumulatör ün başlangııç değeri
// acc yi başlattığımız yer
let total = cart.reduce((acc, product) => acc + product.unitPrice * product.quantity, 0)


console.log(total)



//filter
let quantityOver2 = cart.filter(product => product.quantity)

console.log(quantityOver2)
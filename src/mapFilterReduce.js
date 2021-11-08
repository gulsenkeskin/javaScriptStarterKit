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

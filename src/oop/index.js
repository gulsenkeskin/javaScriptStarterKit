class Customer {
    constructor(id, customerNumber) {

    }

}

let customer = new Customer(1, "1145485");
//prototyping
customer.name = "gülsen"
console.log(customer.name)

//deperleri atamak için prototype dediğimiz yapıyı kullanıyoruz
//değerleri constructor ile geçiyoruz
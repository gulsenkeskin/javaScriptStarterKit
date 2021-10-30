class Customer {
    constructor(id, customerNumber) {

    }

}

let customer = new Customer(1, "1145485");
//instance a yapılan prototyping
customer.name = "gülsen"
console.log(customer.name)

//class a yapılan prototyping
Customer.bisey = "bişey"
console.log(Customer.bisey)

//deperleri atamak için prototype dediğimiz yapıyı kullanıyoruz
//değerleri constructor ile geçiyoruz

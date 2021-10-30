class Customer {
    constructor(id, customerNumber) {
        //prototyping example
        this.id = id;
        this.customerNumber = customerNumber;
    }

}

let customer = new Customer(1, "1145485");
//instance a yapılan prototyping
customer.name = "gülsen"
console.log(customer.name)

//class a yapılan prototyping
Customer.bisey = "bişey"
console.log(Customer.bisey)

console.log(customer.customerNumber)

//değerleri atamak için prototype dediğimiz yapıyı kullanıyoruz
//değerleri constructor ile geçiyoruz

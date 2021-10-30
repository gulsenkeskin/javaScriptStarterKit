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


class IndividualCustomer extends Customer {
    constructor(firstName, id, customerNumber) {
        //super base class ı çalıştırır
        super(id, customerNumber)
        this.firstName = firstName;
    }

}
class CorporateCustomer extends Customer {
    constructor(componyName, id, customerNumber) {
        super(id, customerNumber)
        this.componyName = componyName
    }
}










//değerleri atamak için prototype dediğimiz yapıyı kullanıyoruz
//değerleri constructor ile geçiyoruz

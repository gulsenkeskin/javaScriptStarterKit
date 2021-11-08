export default class User {
    constructor(id, firstName, lastName, city) {
        //user'ı newlediğimizde burası çalışır
        //prototyping
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.city = city;
    }
}
//burada this User class'ını kast eder
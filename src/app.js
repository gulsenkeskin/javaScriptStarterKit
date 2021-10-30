//spread example
//spread: ayrıştırmak : elimizdeki bir aray'i ayrıştırır
let points=[1,2,3,545,898]
console.log(...points)
console.log(Math.max(...points))

//destructuring example
let populations=[1000,2000,3000,[4000,5000]]
let [small,medium,high,[veryHigh,maximum]]=populations
console.log(small)
console.log(medium)
console.log(high)
console.log(veryHigh)
console.log(maximum)
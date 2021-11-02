//todoooooooo odev 1----------------------
function findPrime(...numbers) {
    for (let i = 0; i < numbers.length; i++) {
        let isPrime = true;
        if (numbers[i] === 1) {
            console.log("1 Asal sayı değildir.")
        } else if (numbers[i] > 1) {
            for (let j = 2; j < numbers[i]; j++) {
                if (numbers[i] % j == 0) {
                    isPrime = false;
                    break;
                }
            }
            if (isPrime) {
                console.log(`${numbers[i]} asal sayıdır.`)
            } else {
                console.log(`${numbers[i]} asal sayı değildir.`)
            }
        } else {
            console.log(`${numbers[i]} asal sayı değildir.`)
        }
    }
}

findPrime(2, 5, 8, 21, 13)
findPrime(3, 5)


//todoooooooo odev 2-------------------

function isFriend(number1, number2) {
    let total1 = 0;
    let total2 = 0;
    for (let i = 0; i < number1; i++) {
        if (number1 % i === 0) {
            total1 += i
        }
    }
    for (let i = 0; i < number2; i++) {
        if (number2 % i === 0) {
            total2 += i
        }
    }
    return total1 === number2 && total2 === number1 ? "we are friends" : "we are not friends"
}

console.log("599 and 89: " + isFriend(599, 89))
console.log("220 and 284: " + isFriend(220, 284))
console.log("55 and 4: " + isFriend(55, 4))

//todoooooooo odev 3-------------------
//mükemmel sayı kendisi dışındaki pozitif tam bölenlerinin sayısı kendisine eşit olan sayılara denir

function isPerfectNumber() {
    for (let number = 0; number < 1000; number++) {
        let total = 0;
        for (let j = 1; j < number; j++) {
            if (number % j === 0) {
                total += j;
            }
        }
        console.log(total === number ? `${number} is perfect` : `${number} is not perfect`)
    }
}
isPerfectNumber()



//todoooooooo odev 4-------------------
function listPrime() {
    for (let i = 0; i < 1000; i++) {
        let isPrime = true;
        if (i === 1) {
            console.log("1 Asal sayı değildir.")
        } else if (i > 1) {
            for (let j = 2; j < i; j++) {
                if (i % j == 0) {
                    isPrime = false;
                    break;
                }
            }
            if (isPrime) {
                console.log(`${i} asal sayıdır.`)
            } else {
                console.log(`${i} asal sayı değildir.`)
            }
        } else {
            console.log(`${i} asal sayı değildir.`)
        }
    }
}

listPrime()
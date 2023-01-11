//Fizz Buzz
//If number is divisble by 3 = Fizz
//if number is divisible by 5 = Buzz
//if number is divisible by 3 & 5 = FizzBuzz

document.querySelector('#submitNumber').addEventListener('click', fizzBuzz)

function fizzBuzz() {
    let input = document.querySelector('#userInput').value

    if (input % 3 === 0 && input % 5 === 0) {
        document.querySelector('#result').innerHTML = `FizzBuzz`
    } else if (input % 5 === 0) {
        document.querySelector('#result').innerHTML = `Buzz`
    } else if (input % 3 === 0) {
        document.querySelector('#result').innerHTML = `Fizz`
    } else {
        document.querySelector('#result').innerHTML = `<span>This is neither Fizz, Buzz, or FizzBuzz!</span>`
    }
}
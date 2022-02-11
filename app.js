// 1 Переменные
// var name1 = 'Vladilen'
// const lastName = 'Minin'
// let age=26

//name1='Vlad'

// console.log(name1)
// prompt('Введите фамилию')
// console.log(typeof name1)
//console.log(Math.round(4.5))
// console.log(typeof lastName)
// console.log (parseFloat((0.4 + 0.2).toFixed(2)))
// console.log(typeof 90071992547409919999n)
// console.log(parseInt(5 / 2))
console.log(Math.trunc(4.5))

function getRandomBetween(min, max){
    return Math.floor(Math.random() * (max-min+1)+min)
}
console.log(getRandomBetween(10, 42))

const name2 = 'Максим'
const age = 26
// const output = 'Привет, меня зовут ' + name2 + ' и мой возраст ' + age + ' лет.'
const output = `Привет меня зовут ${name2} и мой возраст ${age} лет.`
console.log(output)
console.log(name2.length)
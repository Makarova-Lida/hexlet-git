// Определение функции
// Определение не вызывает и не выполняет функцию
// Мы лишь говорим, что теперь такая функция существует
const printMotto = () => {
  // Внутри тела отступ 2 пробела для удобства чтения
  const text = 'Winter is coming'
  console.log(text)
}
const saveEmail = () => {
  // В реальности email приходит из формы
  const email = '  SuppORT@hexlet.IO'
  // обрезаем пробельные символы
  const trimmedEmail = email.trim()
  const preparedEmail = trimmedEmail.toLowerCase()
  console.log(preparedEmail)
}

//const greetingWithCodeAfterReturn = () => {
// return 'Hello, Hexlet!'
//  console.log('Я никогда не выполнюсь')
//}

const greetingWithReturnAndPrinting = () => {
  //console.log('Я появлюсь в консоли')
  return 'Hello, Hexlet!'
}
const getLastChar = (str) => {
  return str[str.length - 1]
}

const average = (a, b) => {
  return (a + b) / 2
}

const message = greetingWithReturnAndPrinting()
// Вызов функции
//saveEmail()
//printMotto()
//greetingWithCodeAfterReturn()
//console.log(message)
console.log(getLastChar('hexlet'))
console.log(message.length)
console.log(message[0])
console.log(average(90, 6))

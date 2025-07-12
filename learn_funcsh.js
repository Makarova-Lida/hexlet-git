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



//const print = (text = 'nothing') => console.log(text)
//const message = greetingWithReturnAndPrinting()
// Вызов функции
//saveEmail()
//printMotto()
//greetingWithCodeAfterReturn()
//console.log(message)
//console.log(getLastChar('hexlet'))
//console.log(message.length)
//console.log(message[0])
//console.log(average(90, 6))
//print() // nothing
//print('Hexlet') // Hexlet



const HiddenCard = '1234567812345678'
const x = 4


const getHiddenCard = (HiddenCard, x) =>{
return '*'.repeat(x) + HiddenCard.slice(-4)
}

//const getHiddenCard = (cardNumber, starsCount = 4) => {
//  const visibleDigitsLine = cardNumber.slice(12)
//  return `${'*'.repeat(starsCount)}${visibleDigitsLine}`
//}
//console.log(getHiddenCard('1234567812345678', 2)) // "**5678"
//console.log(getHiddenCard('1234567812345678', 3))// "***5678"
//console.log(getHiddenCard('1234567812345678', 4)) // "****5678"
//console.log(getHiddenCard('2034399002121100', 1)) // "*1100"

const name = 'arya'

const capitalize = (name) =>{
 
  return name.slice (0,1).toUpperCase() + name.slice (1,name.length)
}

//console.log(capitalize(name))

const result = 5 > 4
//console.log(result)

const isInfant = age => age < 1
//console.log(isInfant(6))
const isCastle = type => type === 'Castle'

//console.log(isCastle('Sea'))
//let y= HiddenCard.slice(-4)
//console.log(HiddenCard.slice(-4))

// функция проверки четности
const isEven = number => number % 2 === 0

//console.log(isEven(10)) 
//console.log(isEven(3) )


const isFirstLetterInUpperCase = (string) => {
  const firstLetter = string[0]
  return firstLetter.toUpperCase() === firstLetter
}

//console.log(isFirstLetterInUpperCase('marmont'))
//console.log(isFirstLetterInUpperCase('Robb'))

const NomerPhone = '89602223423'

const  isInternationalPhone = (NomerPhone) => {
const first = NomerPhone[0]
  return  NomerPhone[0] === '+'

}
//console.log(isInternationalPhone('89602223423'))
//console.log(NomerPhone[0])


const Year = '2018'

const  isLeapYear = (Year) => {

  return  Year % 400 === 0 || (Year % 4 === 0 && Year % 100 !== 0)

}
//console.log(isLeapYear ('2018'))
//console.log(isLeapYear ('2017'))
//console.log(isLeapYear ('2016'))

//const text = ''
//const length = ''

const truncate = (text, length) => {
   return text.slice(0, length) + '...'

}
//console.log(truncate('hexlet', 2))
//console.log(truncate('it works!', 4))
//console.log(truncate('hello', 3))

const nam = 'Hexlet'
const getLetter = (nam, index) => {
  return nam.slice( index - 1 , index)
}
//console.log(getLetter(nam, 11)) // ''
//console.log(getLetter(nam, 1)) // 'H'
//console.log(getLetter(nam, 0)) // ''
//onsole.log(getLetter(nam, 6)) // 't'
const getTypeOfSentence = (sentence) => {
  const lastChar = sentence[sentence.length - 1]
  if (lastChar === '?') {
    return 'question'
  }

  return 'general'
}

//console.log(getTypeOfSentence('Hodor')) 
//console.log(getTypeOfSentence('Hodor?'))



const getTypeOfSentence1 = (sentence) => {
  // Объявляем переменную, в которую запишем тип предложения
  let sentenceType
  // Предикат, проверяющий окончание текста
  // Если он оканчивается на символ '?', то вернется true,
  // иначе false
  if (sentence.endsWith('?')) {
    // Если условие выше сработало,
    // то это вопросительное предложение.
    // Присваиваем sentenceType соответствующее значение.
    sentenceType = 'Question'
  }
  else {
    // Во всех остальных случаях предложение — обычное
    sentenceType = 'General'
  }

  // С помощью интерполяции формируем строку
  return `${sentenceType} sentence`
}
//console.log(getTypeOfSentence1('Hodor')) 
//console.log(getTypeOfSentence1('Hodor?'))

const getTypeOfSentence2 = (sentence) => {
  const lastChar = sentence[sentence.length - 1]
  let sentenceType

  if (lastChar === '!') {
    sentenceType = 'exclamation'
  }
  else {
    sentenceType = 'normal'
  }

  if (lastChar === '?') {
    sentenceType = 'question'
  }

  return `Sentence is ${sentenceType}`
}

//onsole.log(getTypeOfSentence2('Who?')) // Sentence is question
//console.log(getTypeOfSentence2('No')) // Sentence is normal
//console.log(getTypeOfSentence2('No!')) // Sentence is exclamation
//const adres = 'https://google.com'
const normalizeUrl = (adres) => {
if (adres.startsWith('https://')) {
   return adres
      }
  else {
    return 'https://' + adres 

}
}
//console.log(normalizeUrl('google.com'))
//console.log(normalizeUrl('https://ai.fi'))

const getTypeOfSentenc = (sentence) => {
  //const lastChar = sentence.slice(-1)

  return (sentence.slice(-1) === '?') ? 'question' : 'normal'
}

//console.log(getTypeOfSentenc('Hodor'))
//console.log(getTypeOfSentenc('Hodor?'))

const newText = 'Hello!'
const convertText = (newText) => {
  const firstnewText = newText[0]
  if (newText ==='')    {   return ''  }
else  {
if (firstnewText === firstnewText.toUpperCase()) 
{   return newText}
 
else { return newText.split('').reverse().join('')}
}
}
//console.log(convertText ('Hello'))
//console.log(convertText ('hello'))
//console.log(convertText (''))

const f = (count) => {
  // Объявляем переменную
  let result

  // Заполняем
  switch (count) {
    case 1:
      result = 'one'
      break
    case 2:
      result = 'two'
      break
    default:
      result = null
  }

  // Возвращаем
  return result
}

//console.log(f(1))

const getNumberExplanation = (count) => {
  // Объявляем переменную
  let result

  // Заполняем
  switch (count) {
    case 666:
      result = 'devil number'
      break
    case 42:
      result = 'answer for everything'
      break
    case 7:
      result = 'prime number'
      break
    default:
      result = 'just a number'
  }

  // Возвращаем
  return result
}
//console.log(getNumberExplanation(8)) // just a number
//console.log(getNumberExplanation(666)) // devil number
//console.log(getNumberExplanation(42)) // answer for everything
//console.log(getNumberExplanation(7)) //prime number

const printNumbers = (lastNumber) => {
  // i – сокращение от index (порядковый номер)
  // используется по общему соглашению во множестве языков
  // как счетчик цикла
  let i = lastNumber

  while (i >= 1) {
    console.log(i)
    i = i - 1
  }
  console.log('finished!')
}

//printNumbers(4)



const sumNumbersFromRange = (start, finish) => {
  // Технически можно менять start
  // Но входные аргументы нужно оставлять в исходном значении
  // Это сделает код проще для анализа
  let i = start
  let sum = 0 // Инициализация суммы

  while (i <= finish) { // Двигаемся до конца диапазона
    sum = sum + i // Считаем сумму для каждого числа
    i = i + 1 // Переходим к следующему числу в диапазоне
  }

  // Возвращаем получившийся результат
  console.log(sum)
}

//sumNumbersFromRange(1, 3)


//const joinNumbersFromRange = (start, finish) => {
  // Нейтральный элемент для строк – пустая строка
  let result = ''
  let i = start

  while (i <= finish) {
    // Каждый раз добавляем строку к результату
    result = `${result}${i}`
    i = i + 1
  }


return result
}

console.log(joinNumbersFromRange(1, 3).toString())




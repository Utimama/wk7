const myName = document.querySelector('ul :first-child')
myName.innerText +='Iniubong'

const details = document.querySelectorAll('li')
details[1].innerText += 33
details[2].innerText += 'current Affairs'

const politician = document.getElementsByTagName('li')
politician[3].textContent += 'ABAT'
politician[4].innerHTML += 'Seyi <strong>Makinde</strong>' 

const champion = document.getElementById('soccer')
champion.innerHTML += 'Argentina'

// alert(champion.innerHTML)

const tennis =document.getElementsByClassName('tennis')
tennis[0].innerHTML += 'Novak Djukovic'
tennis[1].innerHTML += 'Coco Gauff'


//virtual DOM
const sect = document.createElement('section')
const paral = document.createElement('p')
const para2 = document.createElement('p')

const body = document.querySelector('body')
body.append(sect)
sect.append(para1)
sect.append(para2)

paral.innerHTML = 'My name is ${myName.innerText.slice(myName.innerText.indexOf(':')+1)} am ${details[1].innerText.slice(details[1].innerText.indexOf(':')+1)} years old. <br/>
I have <em>${details[2].innerText.slice(details[2].innerText.indexOf(':')+1)}.</em>'

para2.textContent = para1.innerText.toLowerCase() 

const text = para1.textContent

para2.textContent = text.toUpperCase()
f
para2.textContent = 'The text has ${text.length} characters.'

para2.textContent = text.replace('Iniubong', 'Franc')

para2.textContent = text.replaceAll('a', 'e')

para2.textContent = text.indexOf('am', 28)

para2.textContent = text.lastIndexOf('am', 20)

para2.textContent = text.slide(text.indexOf('I love'))

para2.textContent = text.split(' ')

para2.textContent = text.charAt(text.length-1)


para2.textContent = text.icludes('Franc')
para2.textContent = text.includes('ini')
para2.textContent = `franc`.concat('enemuo', 'ben', ' chris')
para2.textContent = text.endsWith('Franc')
para2.textContent = text.startsWith('Nmae', 3)
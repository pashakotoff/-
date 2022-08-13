let a = {
    'text': 'Hello!',
    'color': 'red',
    'showColor': function() {
        console.log(this.color)
    },
    'showFontSize': function(){
        console.log(this.fontSize)
    }
}

//Понадобился новый объект, в котором нужно указывать размер шрифта
let b = {
    'fontSize': '24px',
    __proto__: a
}
//В консоле видно, что в свойстве __proto__ находятся все свойства объекта заданного как прототип
console.log(b)
console.log(b.text)
console.log(b.color)

//Перезаписываем свойства
b.text = 'Good bye!'
b.color = 'black'
console.log(b.text)
console.log(b.color)

//This так же наследуется и работает
b.color = 'green'
b.showColor()
//This так же отрабатывает если в объекте прототипе не было такого элемента
b.fontSize = '100px'
b.showFontSize()
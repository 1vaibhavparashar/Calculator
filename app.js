let input = document.querySelector('input')

let Aclear = document.querySelector('#clear')

Aclear.addEventListener('click',function(e){
    input.value = ""
})

let one = document.querySelector('#one')
one.addEventListener('click',function(e){
    input.value = input.value + 1
})


let two = document.querySelector('#two')
two.addEventListener('click',function(e){
    input.value = input.value + 2
})

let three = document.querySelector('#three')
three.addEventListener('click',function(e){
    input.value =  input.value + 3
})


let four = document.querySelector('#four')
four.addEventListener('click',function(e){
    input.value = input.value + 4
})


let five = document.querySelector('#five')
five.addEventListener('click',function(e){
    input.value = input.value + 5
})


let six = document.querySelector('#six')
six.addEventListener('click',function(e){
    input.value = input.value + 6
})


let seven = document.querySelector('#seven')
seven.addEventListener('click',function(e){
    input.value = input.value + 7
})


let eight = document.querySelector('#eight')
eight.addEventListener('click',function(e){
    input.value = input.value + 8
})


let nine = document.querySelector('#nine')
nine.addEventListener('click',function(e){
    input.value = input.value + 9
})

let zero = document.querySelector('#zero')
zero.addEventListener('click',function(e){
    input.value = input.value + 0
})


let plus = document.querySelector('#plus')
plus.addEventListener('click',function(e){
    input.value = input.value + "+"
})


let minus = document.querySelector('#minus')
minus.addEventListener('click',function(e){
    input.value = input.value + "-"
})

let multiply = document.querySelector('#multiply')
multiply.addEventListener('click',function(e){
    input.value = input.value + "*"
})


let divide = document.querySelector('#divide')
divide.addEventListener('click',function(e){
    input.value = input.value + "/"
})

let dot = document.querySelector('#dot')
dot.addEventListener('click',function(e){
    input.value = input.value + "."
})

let equals = document.querySelector('#equals')
equals.addEventListener('click',function(e){
    let result = eval(input.value);
    result = parseFloat(result.toFixed(2));

    input.value = result;
})


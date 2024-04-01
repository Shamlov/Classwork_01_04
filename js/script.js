function maxNumber (a, b, c) {
    if (a > b && a > c) {return a}
    if (b > a && b > c) {return b}
    if (c > a && c > b) {return c} 
}
console.log(maxNumber(3, 5, 7))

function areaCircle(r) {      // радиус как параметр
    return Math.PI * r * r
}
console.log(areaCircle(20))

function circumference(r) {    // радиус как параметр
    return 2 * Math.PI * r
}
console.log(circumference(5))   

function areaTriangle(a, h) {           // основание, высота как параметр
    return 0.5 * a * h
}
console.log(areaTriangle(15, 5)) 

function repeatText (text, n) {        // текст в виде строки и колльчество
    for( let i = 0; i < n; i++ ) {
        console.log(text)
    }
}
repeatText ('Привет', 3)




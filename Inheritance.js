class Shape {
    #color
    constructor(color){
        this.#color = color 
    }

    setColor(color){
        this.#color = color
    }

    getColor(){
        return this.#color
    }

    getArea(){
        return null
    }
}

class Circle extends Shape {
    #radius
    constructor(color, radius){
        super(color)
        this.#radius = radius
    }

    getArea(){
        return Math.PI * Math.pow(this.#radius, 2)
    }

    print(){
        return `Circle (r: {${this.#radius}}, color: {${this.getColor()}}).`
    }
    
}

class Square extends Shape {
    #side
    constructor(color, side){
        super(color)
        this.#side = side
    }

    getArea(){
        return this.#side * this.#side
    }

    print(){
        return `Square (a: {${this.#side}}, color: {${this.getColor()}}).`
    }
    
}

class Rectangle extends Shape {
    #length
    #width
    constructor(color, length, width){
        super(color)
        this.#length = length
        this.#width = width
    }

    getArea(){
        return this.#length * this.#width
    }

    print(){
        return `Rectangle (l: {${this.#length}},  w: {${this.#width}}, color: {${this.getColor()}}).`
    }
    
}

class Paint {
    constructor(shape){
        console.log(shape)
        this.s=[]
        if(shape != undefined){
            this.addShape(shape)
        }
        console.log()
    }

    addShape(shape){
        return this.s.push(shape)
    }

    getShapes(){
        return this.s
    }
}


const shape1 =  new Shape('red')
console.log('shape color', shape1.getColor())
console.log('shape area', shape1.getArea())

const circle1 =  new Circle('blue', 5)
console.log(circle1.print())
console.log('circle area', circle1.getArea())

const square1 =  new Square('Black', 5)
console.log(square1.print())
console.log('square area', square1.getArea())

const rect1 =  new Rectangle('Blackish', 5, 2)
console.log(rect1.print())
console.log('rectangle area', rect1.getArea())

const painter = new Paint(rect1)
console.log(painter)
painter.addShape(square1)
console.log(painter)
console.log(painter.getShapes)
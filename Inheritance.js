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

const shape1 =  new Shape('red')
console.log('shape color', shape1.getColor())
console.log('shape area', shape1.getArea())

const circle1 =  new Circle('blue', 5)
console.log(circle1.print())
console.log('circle area', circle1.getArea())
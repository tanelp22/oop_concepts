class Person {
    #inimene
    #year
    constructor(inimene){
        this.#inimene = inimene
    }

    setDateOfBirth(year){
        this.#year = year
    }
    getDateOfBirth(){
        return this.#year
    }

    age(){
        return new Date().getFullYear() - this.#year
    }

    getName(){
        return this.#inimene
    }
    description(){
        return `${this.#inimene} Description`
    }
}

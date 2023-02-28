class Rabbit extends Object {
    constructor(name) {
        super(); // надо вызвать конструктор родителя, когда наследуемся
        this.name = name;
    }
}

let rabbit = new Rabbit("Кроль");

alert( Rabbit.prototype.__proto__ === Object.prototype ); // (1) true
alert( Rabbit.__proto__ === Object ); // (2) false (!)
alert( Rabbit.__proto__ === Function.prototype ); // как у каждой функции по умолчанию

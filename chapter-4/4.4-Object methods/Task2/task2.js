let calculator = {
    read(){
        this.a = +prompt("a", a);
        this.b = +prompt("b", b);
    },
    sum(){
        return this.a + this.b;
    },
    mul(){
        return this.a * this.b;
    },
};

calculator.read();
alert( calculator.sum() );
alert( calculator.mul() );
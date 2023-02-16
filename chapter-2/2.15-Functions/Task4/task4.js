function pow(x, n){
    let res = x;
    for(let i = 2; i <= n; i++){
        res *= x;
    }
    return res;
}

let x = +prompt("x","");
let n = 0;
while(n < 1) n = +prompt("n", n);
alert(pow(x, n));

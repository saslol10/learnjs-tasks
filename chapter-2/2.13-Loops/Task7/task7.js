let n = prompt("Enter number",'')
next:
    for (let i = 2; i <= n; i++) {
        for (let j = 2; j < Math.sqrt(i) + 1; j++) {
            if(i === 2) alert(2);
            if (i % j === 0) continue next;
        }
        alert( i );
    }

function choosenumcalc(){
    let num1 = prompt('num1?');
     let ope = prompt('operators');
     let num2 = prompt('num2');
     let ans = 0;
     let num11 = parseInt(num1)
     let num22 = parseInt(num2)
     if (ope === "*"){
ans = num11 * num22;
     }
     if (ope === "+"){
          ans = num11 + num22;
     }
     if (ope === "/"){
          ans = num11/num22;
     }
     if (ope === "-"){
          ans = num11-num22;
     }
     parseInt(ans)
     prompt(ans)
     document.getElementById("answer").innerHTML = ans;
}
function choosenumcalc(){
    let num1 = prompt('num1?');
     let ope = prompt('operators');
     let num2 = prompt('f');
     let ans = 0;
     if (ope === "*"){
ans = num1 * num2;
     }
     if (ope === "+"){
          ans = num1 + num2;
     }
     if (ope === "/"){
          ans = num1/num2;
     }
     if (ope === "-"){
          ans = num1-num2;
     }
     prompt(ans)
     document.getElementById("answer").innerHTML = ans;
}
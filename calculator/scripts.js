function choosenumcalc(){
    let num1 = prompt('num1?');
     let ope = prompt('operators');
     let num2 = prompt('num2');
     let ans = 0;
     parseInt(num1)
     parseInt(num2)
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
     parseInt(ans)
     prompt(ans)
     document.getElementById("answer").innerHTML = ans;
}
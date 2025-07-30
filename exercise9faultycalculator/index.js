/* create a faulty calculator using javascript
this calculator does the following things:
1 It takes two num as input from the user
2 it performs wrong operation as follows:
+--->-
*--->+
---->/
// --->**

it performs operation wrong 10% of times
*/

let random=Math.random()
console.log(random)
let a =prompt("Enter the first num")
let b =prompt("Enter the sec num")
let c =prompt("Enter the  operator")


let obj={
    "+":"-",
    "*":"+",
    "-":"/",
    "/":"**"
}

if(random>0.1){
    //perform correct operation
    // eval function is like a claculator 
    alert(`This is result ${eval(`${a}${c}${b}`)}`)
}
else{
    //perform wrong operation
    c=obj[c]
    alert(`This is result ${eval(`${a}${c}${b}`)}`)

}
function calculateArea(length, breadth) {
    let result=length * breadth;
    return result
    
}
console.log(calculateArea(4,2))


function isEven(input){
        let result = input % 2;
       if (result === 0) {
           return true 
       }else {
           return false
       }
    }
    
console. log(isEven(5))

function reverseString(input) {
    const stringReversed =
    input.split("").reverse().join("")
    return stringReversed    
}

console.log(reverseString("chiamaka"))
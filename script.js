const num = 266219;

let tmp = num;
let result = 1;
while (tmp>0){
 result *= tmp%10;
 tmp= Math.floor(tmp/10);
}
console.log(result);

result = result**3;

console.log(result.toString().substr(0,2));
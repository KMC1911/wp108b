  
function isPrime(n){
    for(var i=2; i<n; i++){
        if(n%i==0)
            return false;
    }
    return true;}
x=3, y=7, z=0;
for(var p=x; p<=y; p++){
    if(isPrime(p))
        z=z+1;}

console.log("countPrime(%d,%d)=>%d", x, y, z);
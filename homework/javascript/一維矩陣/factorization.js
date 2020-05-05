function Factor (n) 
{
    a = n;
    arry = [];

    for(i=2;i<=a;i++) {

        if(a%i == 0 && i!=1) 
        {
            a = a/i;
            arry.push (i);
            i=1;
        }
        console.log ("a=",a);
    }
    return arry;
}

console.log ("factor(45)=",Factor (45));
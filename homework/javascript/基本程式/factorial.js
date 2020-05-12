function n(num){
    for(var i=num-1;i>=1; i--)
    {
    num *=i;
    }
    return num;
    }
    console.log('10!=',n(10));
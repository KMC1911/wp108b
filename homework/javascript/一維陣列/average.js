var mean = [ 1, 2, 3, 4, 5] ;
var i = 0, sum = 0, ans = 0 ;

for (i = 0; i < mean.length; i++)
{
    sum = sum+mean[i] ;
}

ans = sum/ mean.length ;

console.log("%s的平均值為%d", mean, ans);
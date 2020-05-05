var mean = [ 1, 2, 3, 4, 5] ;
var i = 0, sum = 0, ans = 0 ;

for (i = 0; i < mean.length; i++)
{
    sum = sum+mean[i] ;
}
ans = sum/ mean.length ;

var sum2 =0;
for(i=0;i<mean.length;i++){

  mean[i]=mean[i]-ans;

  sum2 = sum2 + mean[i]*mean[i];

}

sd = Math.sqrt (sum2/mean.length);

console.log ("sd([1,2,3,4,5]) = sqrt((2^2+1^2+0^2+1^2+2^2)/5) = sqrt(2)=",sd);
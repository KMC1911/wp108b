function transpose(a)
{
    var array=[];
    for(var i=0;i<a[0].length;i++)
    {
        array[i]=new Array();
    }
    for(var i in a)
    {
        for(var j in a[i])
        {
            array[j][i]=(a[i][j]);
        }       
    }
    console.log("transpose([[1,2,3], [3,2,1]]) =>",array);
    
}
transpose([[1,2,3], [3,2,1]]);
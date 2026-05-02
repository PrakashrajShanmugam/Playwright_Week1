function oddoreven(num){
    for (num=0; num<=25; num++)
    {
        if(num%2!==0)
        {
            console.log(num, "is Odd Number");
            
        }
        else{
            console.log(num, "is Even Number");
        }
    }
}

let num = 1
oddoreven(num)

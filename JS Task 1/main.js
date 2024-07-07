let CheckEvenAndOdd=function()
{

    let num=Number(prompt("Enter The Number"))

    if(num%2===0)
    {
        console.log(`Even`)
    }
    else
    {
        console.log(`Odd`)
    }  
}


// 2-----

let FuzzBuzzGame=function()
{
let num=Number(prompt("Enter The number:")) 
if(num%3===0&&num%5===0)
{
     console.log("fizzbuzz") 
    }
else if(num%3===0) 
    {
         console.log("fizz")
         }
else if(num%5===0)
{ 
    console.log("buzz")
 }
else 
{ 
    console.log(num)
 }

}


CaculateCircle=function()
{
    let reduis=Number(prompt("Enter The reduis:")) 

let area=Number(Math.PI*(reduis*reduis)).toFixed(2)

let circumrefrence=Number(2*Math.PI*reduis).toFixed(2)

console.log(`area of circle :${area} ,circumrefrence of circle :${circumrefrence}`)


}

let check50=function()
{
let Num1=Number(prompt("Enter The First Number:")) 
let Num2=Number(prompt("Enter The Second Number:")) 


if(Num1===50|| Num2===50||Num1+Num2===50)
    {
        console.log(`${true}`)
    }
    else
    {
        console.log(`${false}`)
    }

}
// 5--------    



// 6-----
let checkPostiveAndNegtive=function()
{

    let Num1=Number(prompt("Enter The First Number:")) 
let Num2=Number(prompt("Enter The Second Number:")) 


if(Num1>=0&&Num2>=0)
{
    console.log(` First Number : ${Num1} Is Postive \n Second Number ${Num2} Is Postive `)
}


else if (Num1>=0&&Num2<0)
    {
        console.log(` First Number : ${Num1} Is Postive \n Second Number ${Num2} Is Negative `)

    }

else if (Num1<0&&Num2>=0)
    {
        console.log(` First Number : ${Num1} Is Negative \n Second Number ${Num2} Is Postive `)
    
    }
else
{
    
    console.log(` First Number : ${Num1} Is Negative \n Second Number ${Num2} Is Negative `)
    
}

}



// 7----
let CheckMuiltple_8_Or_5=function()
{
     let Num1=Number(prompt("Enter The First Number:")) 

if(Num1%5===0)
    {
        console.log(`${Num1} Is a Multiple Of 5 `)
    }
else if (Num1%8===0)
    {
        console.log(`${Num1} Is a Multiple Of 8 `)
    }
else
{
    console.log(`${Num1} Is Not a Multiple Of 8  and 5`)

}

// 8-------
let FindMaxNumber=function()
{
    const numberString=prompt(`Enter The Numbers:`);
const numbers=numberString.split(',');
let max=0;
for(var i=0;i<numbers.length;i++)
    {
        if(max<numbers[i])
            {
                max=numbers[i];
            }
    }

console.log(`The Largest Number : ${max}`)


}

}

// 9------
let Sum_1_To_10=function()
{
    // loop
let sum=0
for(var i=1;i<=10;i++)
    {
        sum+=i
    }


console.log(`sum of 10 :${sum}`)

//  without loop

console.log(`sum of 10 :${10 *(10+1)/2}`)



}

// 10----
drawStars=function()
{
var conct=''
for(var i=1;i<=5;i++)
    {
        conct=''
        for(var x=1;x<=i;x++)
            {
                // console.log(x)
               conct+='*'
            }
            console.log(conct)
    }



}


// 11----

let checkPostiveAndNegetive=function()
{
let Num1=Number(prompt("Enter The First Number:")) 

if(Num1<0)
{
    console.log('Postive')
}
else
{
    console.log('Negtive')
}

}



// 12-------
let simpleSum=function()
{
    let Num1=Number(prompt("Enter The First Number:")) 
let Num2=Number(prompt("Enter The Second Number:")) 


console.log(`sum : ${Num1+Num2} `)
}



// 13-----

let Factorial=function()
{
    let Num=Number(prompt("Enter The Number:")) 
let conter=Num
var sum=1
while(conter!==0)
    {
        sum*=conter
        conter--
    }

    console.log(`factorial of ${Num} is ${sum}`)

}





// 14-------


let Caculator=function()
{
    let Num1=Number(prompt("Enter The First Number:")) 
    let Num2=Number(prompt("Enter The Second Number:")) 
    let Op=prompt("Enter The Opetator:")
    switch(Op)
    {
        case "+":
            console.log(`${Num1} + ${Num2} = ${Num1 + Num2}`);
            break;
        case '*':
            console.log(`${Num1} * ${Num2} = ${Num1 * Num2}`);
            break;
        case '/':
            console.log(Num2>0?`${Num1} / ${Num2} = ${Num1 / Num2}`:`Error: divided by zero`);
            break;
        case '-':
            console.log(`${Num1} - ${Num2} = ${Num1 - Num2}`);
            break;
        default :
        console.log('Error : known operator');
    }
    
    

}




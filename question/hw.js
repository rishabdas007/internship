function hm1()
{
    //Print even number from an array

    function arrayeven(list){
        console.log("Print even numbers in array");
        for(var i=0;i<=list.length;i++){
            if(list[i]%2==0){
                console.log(list[i]);
            }
        }
    }
    arrayeven([1,2,3,4,5,6,7,8,9,10]);

    //Print  factorial of a number

    function factorial(num){
        console.log("Factorial of that number: ");
        if(num<1){
            return 0;
        }
        let fact = 1;
        for (let i =1; i<=num;i++){
            fact=fact*i;
        }
        return fact;
    }
    console.log(factorial(5));

    //Print Multiplication table

    function multiplication(num){
        console.log("Multiplication table:")
        for(let i=1; i<=10;i++){
            console.log(`${num} x ${i} = ${num * i}`);
        }
    }
    multiplication(5);

    //Sum of all numbers

    function sumNaturalNumber(num){
        console.log("Print sum of natural numbers:")
        if (num < 1) {
            return 0;
        }
        return (num * (num + 1)) / 2;
    }
    console.log(sumNaturalNumber(10));

    //Find the largest number 

    function largestestnumber(num){
        console.log("Print largest number:")
        let largest = num[0];
        for(let i=0;i<=num.length;i++){
            if(num[i]>largest){
                largest=num[i];
            }
        }
        console.log(largest);
    }
    largestestnumber([10,20,50,80,70,100])

    //Find leap year

    function leapyear(num){
        if((num%4==0 && num%100!==0)|| (num%400==0)){
            console.log( num,"is leap year ");
        }
        else{
            console.log(num,"is not leap year");
        }
    }
    leapyear(2024);
}
module.exports=hm1;
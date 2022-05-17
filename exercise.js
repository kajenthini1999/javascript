//question1
let birthyear;
let futureyear;
birthyear=1999;
futureyear=2029;
age=(futureyear-birthyear);
console.log("i will be either"+"="+age);

//question2
let celsius;
let fahrenheit;
celsius=378;
fahrenheit=278;
f=(celsius*9)/5+32;

console.log(f)
c=(fahrenheit-32*5)/9;
console.log(c)

//question3 condition

function marks(){
    let marks=45;
    if(marks>=75){
        console.log("A")
    }
    else if(marks>=65){

        console.log("B")
    }
    else if(marks>=55){
        console.log("c")
    }
    else if (marks>=45){
        console.log("s")
    }
    else if(marks<45){
        console.log("f")
    }
}
marks();
//question 4
let input=6;
switch(input){
    case 1:
        console.log("january")
        break;
        case 2:
        console.log("february")
        break;
        case 3:
        console.log("march")
        break;
        case 4:
        console.log("Apirl") 
        break;
        case 5:
        console.log("may")
        break;
        case 6:
        console.log("june") 
        break;
        case 7:
        console.log("july")
        break;
        case 8:
        console.log("auguest")
        break;
        case 9:
        console.log("september")
        break;
        case 10:
        console.log("october")
        break;
        case 11:
        console.log("november")
        break;
        case 12:
        console.log("december")


}



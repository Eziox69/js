if(true){

}
//<,  >,  <=,  >=,  ==, !=, ===(checks type too)
//  strict -ve check !==


const score= 200
if(score> 100){
    const power="fly"
    //console.log(`User power: ${power}`)
}
//console.log(`User power: ${power}`)//will not work out of scope power

const balance =1000
if(balance<500){
  //  console.log("less than 500");
}else if(balance <900){
  //  console.log("less tha 900")
}else{
   // console.log("less than")
}

const userLoggedIn=true
const debitCard=true
const loggedInFromGoogle=false
const loggedInFromEmail=true

if(userLoggedIn&&debitCard){//both should be true
    console.log("allow to buy course")
}

if(loggedInFromGoogle||loggedInFromEmail){
    
}
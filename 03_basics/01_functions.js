function sayMyname(){
    console.log("h");
    console.log("e");
    console.log("y");
    console.log("a");
}

//sayMyname()//execution
//function addTwonumbers(Number1,Number2){
  //  console.log(Number1+Number2)
//}
//addTwonumbers(3,4)
//addTwonumbers(3,"4")
//addTwonumbers(3,"a")
//addTwonumbers(3,null)

//const result=addTwonumbers(3,4)
//console.log("result:",result)//result ki value is undefined pr output to aarha h
//console is just printing 
//we have to return
function addTwonumbers(Number1,Number2){
   // let result=Number1+Number2
    //return result
    return Number1+Number2
    //return ke baad kuch bhi print nhi hoga
}
const result=addTwonumbers(3,4)
//console.log("result:",result)

function loginUserMessage(username){//(username="sam")
    if(username===undefined){//or (!username)//undefined is false value
          //console.log("please enter a username")
           return//taaaki aage ka print na ho
        }
    return `${username} just logged in`
}

//console.log(loginUserMessage("hitesh"))//willl overwrite sam
//console.log(loginUserMessage())//undefined if we dont pass args


////shopping cart 
//isme args pta nhi hote
//user add karta jaata hna samaaan

function calculateCartPrice(...num1){
   return num1
}
//console.log(calculateCartPrice(200,400,500))//kaafi values param ek to hum rest operator use karenge
//rest operator is like spread ... use case pe differentiate kia jaat h

function calculateCartPrice2(val1,val2, ...num1){
    return num1
 }
 //onsole.log(calculateCartPrice2(200,400,500,1000,2000))// 200 val1,400 val2

const user={
    username:"hitesh",
    price:199
}


function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`)
}

//handleObject(user)
//OR
//direct passkr skte h obj
handleObject({
    username: "sam",
    price: 399

})

//passing array
const myNewArray=[200,300,400,600]

function returnSecondValue(getArray){
    return getArray[1]

}
//console.log(returnSecondValue(myNewArray))
console.log(returnSecondValue([200,300,400]))
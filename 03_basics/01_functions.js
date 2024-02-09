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
          console.log("please enter a username")
           return//taaaki aage ka print na ho
        }
    return `${username} just logged in`
}

//console.log(loginUserMessage("hitesh"))//willl overwrite sam
console.log(loginUserMessage())//undefined if we dont pass args




//const userEmail="h@hotesh.ai"
const userEmail=[]
if(userEmail){
    console.log("got user email");
}else{
    console.log("dont have user email")
}
//isme kisi cheez se comparison nhi hua still if is checking kyuki string ko true maana h
// empty hoti to false mante

/*
falsy values
false,0, -0, BigInt, " ", null,undefined, NaN

truthy(everything except falsy)
"0","false", " ",[],{},function(){}
*/
// if(userEmail.length===0){
//   console.log("empty")
// }

// const emptyObj={}
// if(Object.keys(emptyObj).length===0){//keys ka array aajata h banke
//     console.log("empty")
//   }

//Nullish Coalescing Operator (??):null undefined

//let val1;
//val1 =5??10//op 5

//val1=null??10                  op 10
//val1=undefined??10             op 10
//val1=null??10??20              op 10
//console.log(val1)


//Terniary Operator
 //condition ? true: false
//  const iceTeaPrice=100
//  iceTeaPrice <=80 ? console.log("less than 80"):console.log("more than 80")
 //more than 80

  
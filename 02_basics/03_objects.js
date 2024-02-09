//singleton  (literals ki tarah banega object to ignore
               //constructor se banega to always singleton
//Object.create
//object literals


const mySym=Symbol("key1")
 
const JsUser={
 name: "hitesh",
 "full name":"hitesh singh",
 [mySym]:"myKey1",//syntax
age: 18,
location: "Jaipur",
email: "hitesh@gmail.com",
isLoggedIn: false,
lastLoginDays: ["Monday", "Saturday"]

}

//console.log(JsUser.email)//but its's not the apt way of doing
//console.log(JsUser[email])//ye sahi h pr isme error aaega kyuki email key jo hai wo string ki tarah treat krni hogi
//console.log(JsUser["email"])//Correct
//"full name":"hitesh singh", ye line ye bracket waale ke alawa aur kisi way me access nhi ho sakti so ya

//console.log(JsUser[mySym])

JsUser.email="hehhehe@gmail.com"//change the values

//Object.freeze(JsUser)//iske bad no changes
JsUser.email="oakaoakoake@gmail.com"
// console.log(JsUser)
 JsUser.greetings=function(){
    console.log("Hello everyone");
 }
 console.log(JsUser.greetings())

 JsUser.greetingsTwo=function(){
    
    console.log(`Hello js user ${this.name}`)//this will show all all properties of name//same obj ka ref


 }
 console.log(JsUser.greetingsTwo())
 



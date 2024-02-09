const user={
  usernmae: "hitesh",
  price:999,
  welcomeMessage: function(){
    //console.log(`${this.usernmae}, welcome to website`);
  }
}

//user.usernmae//no output
//user.welcomeMessage()//print messagee
// user.usernmae="sam"
// user.welcomeMessage()// ab it will print sam
//context change krdia humne isne


//console.log(this)//current context// line 10,11,12 chalaega

//in node//jab wo lines comment out hongi to it will give empty object
//in console//will give window
//browser ke andar global object is window obj


// function chai(){
//     console.log(this);//print kr rha h bhut saari values
// }
// chai()


// function chai(){
//     username="hitesh"
//     console.log(this.username);//undefined 
//     //funcs ke andar nhi chlta ye
// }
// chai()


// const chai=function(){//aise waale way me bhi undefined

// }

// const chai=() =>{
//     let username="hitesh"
//     console.log(this.username);//undefined
//     console.log(this)//empty paranthesis
// }
// chai()

// aisa nhi h ki arrow func me this chl jaata h ais anhi h

// const addTwo= (num1,num2) => {
//   return num1+num2
// }
//console.log(addTwo(3,4));
//const addTwo= (num1,num2) =>   num1+num2//implicit return
//const addTwo= (num1,num2) =>  ( num1+num2)//no use of return keyword if there is parenthesis
//const addTwo= (num1,num2) =>  ({username:"hitesh"})//obj return paranthesis needed

  
//console.log(addTwo(3,4));




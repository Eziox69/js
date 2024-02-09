//singleton

//const tinderUser=new Object()//same
const tinderUser={}//same

tinderUser.name="hitsh"
tinderUser.email="hitsh@gmail.com"
tinderUser.age=18
//console.log(tinderUser)

const regularUser={
  email:"some@gmail.com",
  fullname:{
    userfullname:{
        firstname:"hitesh",
        lastname: "singh"
    }
  }
}

//console.log(regularUser.fullname.userfullname.firstname);

const obj1={1:"a", 2:"b"}
const obj2={3:"a", 4:"b"}

//const obj3={obj1,obj2}
//console.log(obj3)//is se obj ke andar obj aajega
//const obj3=Object.assign({},obj1,obj2)//(target,source)
const obj3={...obj1,...obj2}
//console.log(obj3)

const user=[
    {
        id:1,
        email:"h@gmail.com"
    },
    {
        id:2,
        email:"hdeed@gmail.com"
    },
    {
        id:3,
        email:"hcce@gmail.com"
    },
]
user[1].email
console.log(tinderUser);
console.log(Object.keys(tinderUser))//sari keys dedo
//output value ka data type h array
console.log(Object.values(tinderUser))

console.log(Object.entries(tinderUser))//array ke andar array bana deta hai first value key second value

console.log(tinderUser.hasOwnProperty('isLoggedIn'))//bata dega ye ki ye cheez obj me hai ki nhi










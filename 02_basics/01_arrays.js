const myArr=[0,1,2,3,4,5]
const myHeroes=["shaktiman","naagraj"]
const myArr2=new Array(1,2,3,4)
//console.log(myArr[0])

//Array Methods
//myArr.push(6)//cahnges in original array
//console.log(myArr)
//myArr.pop()//last element
//myArr.unshift(9)//adds in begining pr ye use nhi krte kyuki is se saari values shift hoti h its time consuming and comp pe load aata h

//console.log(myArr)
//myArr.shift()//remove first element
//console.log(myArr.includes(9))
//console.log(myArr.indexOf(9))//exist nhi krti to -1
//console.log(myArr)
const newArr=myArr.join()//adds all the elements of array to string
//console.log(newArr)
//console.log(typeof newArr)


//slice,splice
console.log("A",myArr)
const myn1=myArr.slice(1,3)
console.log(myn1)

console.log("b",myArr)
const myn2=myArr.splice(1,3)//3 is also included but its not the difference
console.log(myn2)
//slice me ending range is not included but it do not change the original array where as splice me ending range is included but it removes those elements from the original array

console.log("C",myArr)










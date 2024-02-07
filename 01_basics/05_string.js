const name ="harivansh"
const repoCount=50
//console.log(name+repoCount+"Value");

//console.log(`Hello my name is ${name} and my repo count is ${repoCount}`)//string interpolation
const gameName=new String('harivansh-hc')
//console.log(gameName[0]);
//console.log(gameName.__proto__);
//console.log(gameName.length)
//console.log(gameName.toUpperCase())//copy me change hua cuz its in stack
//console.log(gameName.charAt(3))
const newString=gameName.substring(0,4)//4 is not included
//console.log(newString)
const anotherString = gameName.slice(-5, 4)
//console.log(anotherString);

const newStringOne="   hitesh   "//trimming
//console.log(newStringOne)
//console.log(newStringOne.trim())

const url="https://hitesh.com/hitesh%20singh" //user spaces deta h to browser use %20 krdeta h
//replace
//console.log(url.replace('%20','-'))

//console.log(url.includes('-'))

console.log(gameName.split('-'))//(separator,limit)




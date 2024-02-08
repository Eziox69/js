 const marvel_heros=["ironman","spiderman","thor"]
 const dc_heros=["superman","flash","batman"]
 //marvel_heros.push(dc_heros)//pushed array inside array
 //console.log(marvel_heros)//existing array pe hi push from push
 //access karne k liye [3][0]-->give superman
//const all_heros=marvel_heros.concat(dc_heros)
//console.log(all_heros)//new array me


const all_new_heros=[...marvel_heros, ...dc_heros]//spread operator

//console.log(all_new_heros)

const another_array=[1,2,3,[4,5,6],7,[6,7,[4,5]]]

const real_another_array=another_array.flat(Infinity)//infinity ki jagah depth deni hoti h matlab no. of arrays
//console.log(real_another_array)



 console.log(Array.isArray("Hitesh"))
 console.log(Array.from("Hitesh"))
 console.log(Array.from({name: "hitesh"}))//it will give empty array kyuki aise convert nhi krta bolna pdta h what to convert
 
 let score1=100
 let score2=200
 let score3=300
 console.log(Array.of(score1,score2,score3))

//is method




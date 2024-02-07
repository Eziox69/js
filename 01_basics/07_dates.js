//dates
 let myDate=new Date()
 //console.log(myDate)
 //console.log(myDate.toString())
 //console.log(myDate.toDateString())
 //console.log(myDate.toLocaleString())
 //console.log(typeof myDate)//object

 //let myCreateDate=new Date(2023,0,23)//month 0se start hote h js me
 //console.log(myCreateDate)
 //console.log(myCreateDate.toDateString())
 //let myCompleteDate=new Date(2023,0,23,5,6)
 //let myCompleteDate=new Date("2023-01-14")//jb yy mm dd karte h to month 1 se start hota h
 //let myCompleteDate=new Date("01-14-2023")//mm dd yy
 //console.log(myCompleteDate.toLocaleString())

// let myTimeStamp=Date.now()//time in miliseconds till now
// console.log(myTimeStamp)
// console.log(myCreateDate.getTime())
// console.log(Math.floor(Date.now()/1000))//converting in seconds and rounding off to avoid decimals

let newDate=new Date()
//console.log(newDate);
//console.log(newDate.getMonth()+1);//0 se start

//console.log(newDate.getDate()+1);//0 se start
//console.log(newDate.getDay());

console.log(`${newDate.getDate()+1} this is todays date`)

newDate.toLocaleString('default', {
    weekday: "long",
    
})


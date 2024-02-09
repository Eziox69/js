var c=300
if(true){
    let a=10
    const b=20
    var c=30

}

//console.log(a)
//console.log(b)
//console.log(c)//ye chal gya isiliye usenhi krte var because of its scope
//ab bhi var ki value 30 aaaegi cahhe globally declared 300 ho

//pr let ko agar globally declare karenge tw wo chalega
//and agar block ke andar bhi declared h to
//print block ke andar h to andar wala chalega 
//warna global


//browser ke andar scope is diff
//env ke andar node ke andar scope is diff


function one(){
    const username="hitesh"

    function two(){
        const website="yt"
       // console.log(username);//krlega access
    }
    //child can access parent's things
   // console.log(website)//error scope ke bahar
    two()
}
one()

if(true){
    const username="hitesh"
    if(username==="hitesh"){
        const website="yt"
        //console.log(username+website)
    }
        //console.log(website)//error out of scope
}
//console.log(username)//error out of scope

//======================interesting=================
//addOne(5)//yha bhi chl jaaega
function addOne(num){//basic func
return num+1

}
addOne(5)

//addTwo(5)//ye yaha nhi chalega kyuki humne const me rakha h func
const addTwo=function(nume){//expression
    //in js vars a powerful they can hold fns too
    return nume+2
}
addTwo(5)
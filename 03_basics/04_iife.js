// Immediately Invoked Function Expressions(IIFE)
//1.Used taaki global scope se pollution na ho kyuki bacche to bado se maang sakte h
//2.Koi function turant use karna ho//used regarding db's


// function chai(){
//     console.log(`DB CONNECTED`);
// }
// chai()

// function chai(){
//     console.log(`DB CONNECTED`);
// }() //error

(function chai(){//named iife
         console.log(`DB CONNECTED`);
     })();//wrapping func in paranthesis
    // isme semicolon lagana is imp kab evoke karna h taaki ye pta lage machine ko
   // warna two waala nhi chalega jab tk ye evoke nhi hoga

    (() => { //unnamed iffe
        console.log(`DB CONNECTED TWO`)
    })()// arrow func bhi chl jaate h aise wrap karke


    ((name) => {//iife with params
        console.log(`DB CONNECTED TWO ${name}`)
    })("hitesh")
 //two iife me smicolon yaad rakhna h
 
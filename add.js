// name
// added
// price
// Image
var arr=[
    {
        name:"orange",added:false,price:100,image:"https://images.unsplash.com/photo-1580052614034-c55d20bfee3b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8b3JhbmdlfGVufDB8fDB8fHww"
    },
    {
        name:"kiwi",added:true,price:60,image:"https://images.unsplash.com/photo-1585059895524-72359e06133a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8a2l3aXxlbnwwfHwwfHx8MA%3D%3D"
    },
    {
        name:"gauva",added:true,price:150,image:"https://images.unsplash.com/photo-1629367308711-b7fc438561e5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8Z3VhdmF8ZW58MHx8MHx8fDA%3D"
    },
    {
        name:"apple",added:false,price:200,image:"https://images.unsplash.com/photo-1589217157232-464b505b197f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8YXBwbGV8ZW58MHx8MHx8fDA%3D"
    },
    {
        name:"banana",added:false,price:50,image:"https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8YmFuYW5hfGVufDB8fDB8fHww"
    }
]


function mainFunction(){


    var clutter=""
    arr.forEach(function(elem){
        clutter+=`
    
        <div id="card">
                    <h2>${elem.name}</h2>
                    <img src="${elem.image}" alt="">
                    <h4>Price-₹${elem.price}</h4>
                    <button>Add to cart</button>
                </div>`
    })
    
    document.querySelector("#prodmain").innerHTML=clutter
}
mainFunction()
var close=document.querySelector("#Close")
var show=document.querySelector("#fullnav button")

var prod=document.querySelector("#prod")

close.addEventListener("click",function(){
        prod.style.transform="translateY(-100%)"
})
show.addEventListener("click",function(){
    prod.style.transform="translateY(0)"
})

// document.querySelector("#prodmain").addEventListener("click",function(dets){
//     if(dets.target.classList.contains("add")){
//         console.log(target.classList.contains("add").index)
//     }

// })
// arr.forEach(function(elem){
//     clutter2+=`
    
//                         <img src="${elem.image}" alt="">
//                         <h2>${elem.name}</h2>
//                         <h2>₹${elem.price}</h2>
//                         <h3>Quantity <button>0</button></h3>
    
//                     `

// })
// document.querySelector("#boxmain").innerHTML=clutter2
var clutter2=""
arr.forEach(function(elem){
    if(elem.added==true){

        clutter2+=`
        <img src="${elem.image}" alt="">
        <h2>${elem.name}</h2>
        <h2>₹${elem.price}</h2>
        <h3>Quantity <button>0</button></h3>`
    }
    })
     document.querySelector("#boxmain").innerHTML=clutter2

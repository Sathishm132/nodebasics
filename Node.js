console.log("hello")
let fruits=["apple","mango","","lemon","","orange",""]
let newf=fruits.map((fruit)=>{
    if(fruit){
        return fruit
    }
    else{
        return "empytystring"
    }
})
console.log(newf);
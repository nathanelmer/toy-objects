const toys = [
    {
    id : 1,
    type : "Race Car", 
    maker : "Toys R Us",
    price : 21
},
{
    id : 2,
    type : "Action Figure",
    maker : "Target", 
    price : 10
},
{
    id : 3, 
    type : "Stuffed Animal", 
    maker : "Care Bear", 
    price : 30
}
]

let wantedToy = 2
let budget = 25

for (const toy of toys){
    const toyPrice = toy.price / 100
    const toyIncrease = toyPrice * 5
    toy.price += toyIncrease 
    console.log(toy.price)
}

for (const toy of toys){
    if (toy.id === wantedToy){
        console.log(`${toy.maker} made my ${toy.type}, and it costed $${toy.price}.`)
    }   
}

for (toy of toys){
    if(toy.price <= budget){
        console.log("We have found 1 option!")
    }    
}

console.log(toys)

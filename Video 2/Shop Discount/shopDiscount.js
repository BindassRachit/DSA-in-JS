let shoping = Number(prompt("Enter your Shopping Amount ?"))
let dis = 0;

if (shoping >= 0 && shoping <= 1000){
    dis = 5;
} else if(shoping >= 1000 && shoping <= 3000){
    dis = 10;
} else if(shoping >= 3000 && shoping <= 5000){
    dis = 20;
} else if(shoping > 5000 ){
    dis = 30;
}else{
    console.log("okay")
}

console.log(Math.floor((dis*shoping)/100));
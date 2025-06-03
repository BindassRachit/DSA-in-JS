let vote = Number(prompt("Enter Age ? ="));

if (isNaN(vote)) {
    console.log("Please Enter Your age");
} else if(vote>=18){
    console.log("eligible for vote");
}else{
    console.log("not eligible for vote");
}
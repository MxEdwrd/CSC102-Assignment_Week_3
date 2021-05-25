function btrcountdowntimer(){
    console.log("Better Countdown Timer Started")
    var currTime = 50
    for (var i = 0; i < 10; i++){
        setTimeout(function(){
            console.log(i)
            document.getElementById("countdownstatus").innerHTML = currTime
            currTime = currTime - 5
        },5000 * i)
        setTimeout(function(){
            document.getElementById("countdownstatus").innerHTML = "Blast Off!"
        },50000)
    }
}
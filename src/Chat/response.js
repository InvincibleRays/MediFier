const responseObj = {
    hi: "Hey ! How are you doing ?",
    hey: "Hey! What's Up",
    today: new Date().toDateString(),
    time: new Date().toLocaleTimeString(),
  };


const answers = ["What is your name?","What is your postcode?", "How far are you willing to travel?", "Would you be available on weekdays or weekends?", "What time of the day do you prefer?" ];



$(document).ready(function(){
    var user1ans1 = document.querySelector(".user1ans1");
    user1ans1.addEventListener("click",function(){
        setTimeout(function(){
            $("#loader1").hide(); 
            $("#bot2").show();
            $("#user2").show();
        },500);
        $("#loader1").show();
    })
    })
$(document).ready(function () {
    var user1ans1 = document.querySelector(".user1ans2");
    user1ans1.addEventListener("click", function () {
        setTimeout(function () {
            $("#loader1").hide();
            $("#bot2").show();
            $("#user2").show();
        }, 500);
        $("#loader1").show();
    })
})
$(document).ready(function(){
    var user1ans1 = document.querySelector(".user1ans3");
    user1ans1.addEventListener("click",function(){
        setTimeout(function(){
            $("#loader1").hide(); 
            $("#bot2").show();
            $("#user2").show();
        },500);
        $("#loader1").show();
    })
    })



 /* const questions = ["What is your postcode?","How far are you willing to travel?", "When would you be available?", "What time of the day?", "Thank you for your patience"];
let text = "";
let i = 0;
while (i < c) {
  text += c[i] + "<br>";
  i++;
}*/
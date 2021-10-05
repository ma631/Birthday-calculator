var month=document.getElementById("user-month");
var day=document.getElementById("user-day");
var year=document.getElementById("user-year");

var submitbtn=document.getElementById("submit-date");

submitbtn.addEventListener("click" , function(evt){
    var message= document.getElementById('message');
    var parsemonth=(parseInt(month.value)-1);
    var parseday=parseInt(day.value);
    var parseyear=parseInt(year.value);
    var months=["January","February","March","April","May","June","July","August","September","October","November","December"];
    var weekday=["Sunday","Monday","Tuesday","Wednesday","Thrushday","Friday","Saturday"];
    var dateIs=new Date(parseyear,parsemonth,parseday);
    var weekdayIs=weekday[dateIs.getDay()];
    var monthIs=months[parsemonth];

    if(weekdayIs === undefined || monthIs===undefined){
        message.innerText="";
        setTimeout(function(){
            message.innerText="Please emter a valid date";}, 500)
    }
    else{
        message.innerText=weekdayIs + ", "+ monthIs + " "+ parseday + ", " + parseyear;
    }

})
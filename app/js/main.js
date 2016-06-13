$(document).ready(function(){
    
    function displayTime(){
        var currentTime = new Date();
        
        //get hours, minutes and seconds
        var hours = currentTime.getHours();
        var minutes = currentTime.getMinutes();
        var seconds = currentTime.getSeconds();
        
        var meridiem = "AM";
        
        if(hours > 12){
            hours -= 12;
            meridiem = "PM";
        }
        if (hours < 10){
            hours = "0" + hours;
        }
        if(minutes < 10){
            minutes = "0" + minutes;
        }
        if(seconds < 10) {
            seconds = "0" + seconds;
        }
        
        var clockDiv = document.getElementById('clock');
        clockDiv.innerHTML = hours + ":" + minutes + ":" + seconds + " " + meridiem;
        
        var year = currentTime.getFullYear();
        var month = currentTime.getMonth();
        var date = currentTime.getDate();
        
        var monthList = ["January", "February", "March","April", "May", "June", "July", "August", "September", "October", "November", "December"];
        
        var dateDiv = document.getElementById('date');
        dateDiv.innerHTML = date + " " + monthList[month] + " " + year;
        
        var day = currentTime.getDay();
        
        var dayList = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
        
        var dayDiv = document.getElementById('day');
        dayDiv.innerHTML = dayList[day];
        
    }
    
    displayTime();
    setInterval(displayTime, 1000);
});
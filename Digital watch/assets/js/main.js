function myTime(){
    var myDate= new Date();
    var hr,min = (myDate.getMinutes()<10) ? "0" + myDate.getMinutes(): myDate.getMinutes(),
    sec = (myDate.getSeconds()<10) ? "0" + myDate.getSeconds(): myDate.getSeconds(),
    M = (myDate.getHours()>=12) ? "PM": "AM";
    if(myDate.getHours()==0){
        hr=12;
    }else if(myDate.getHours()>12){
        hr= myDate.getHours()-12;
    }else{
        hr=myDate.getHours();
    }

    var currentTime= hr +":"+min+":"+sec;
}


const displayTime = ()=>{
    let timeArea = document.querySelector(".timeArea");
    let date = new Date(),
          hr = date.getHours(),
          min = date.getMinutes(),
          sec = date.getSeconds();
    let text;
    if(hr===0){
        hr=12
        text = "AM"
    };
    if(hr>12){
        hr -12;
        text = "PM"
    }
    if(hr < 12){
        text="AM"
    }
   timeArea.textContent=`${hr} : ${min} : ${sec} ${text}`;
    setTimeout(displayTime,100)
}
displayTime();
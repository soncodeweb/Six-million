// thời gian hết hạn
function getTime(){

    const deadlineDate = new Date(deadline);
    const now = new Date(); // Date.now
    
    
    const distant = (deadlineDate - now)/1000; // chia 1000 de ra giay
    console.log(distant); // minigiay
    
    // days
    const days = Math.floor(distant/3600/24);
    
    const hours = Math.floor(distant/3600)%24;
    
    const minutes = Math.floor(distant/60)%60;
    
    const seconds = Math.floor(distant)%60;
    
   
    $(".time-days").text(days);
    $(".time-hours").text(hours);
    $(".time-mins").text(minutes);
    $(".time-secs").text(seconds);
}   

setImmediate(()=>{
    getTime("2021/06/01");
},1000)

$(selector).addClass(className);
var SetDate = new Date("Oct 8, 2020 20:05:30").getTime();
var x = setInterval(function() {

    // Get todays date and time
    var now = new Date().getTime();
    
    // Find the distance between now and the count down date
    var distance = SetDate - now;
    
    // Time calculations for days, hours, minutes and seconds
    var hari = Math.floor(distance / (1000 * 60 * 60 * 24));
    var jam = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var menit = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var detik = Math.floor((distance % (1000 * 60)) / 1000);
    
    // Output the result in an element with id="demo"
    if(hari!==0){
        var hasil = hari + " Hari, " + jam + " : "+ menit + " : " + detik ;
    }else if(jam!==0){
        var hasil = jam + " : "+ menit + " : " + detik ;
    }else if(menit!==0){
        var hasil = menit + " : " + detik ;
    }else if (detik!==0){
        var hasil = detik ;
    }
    document.getElementById("demo").innerHTML = hasil;
    
    // If the count down is over, write some text 
    if (distance < 0) {
        clearInterval(x);
        document.getElementById("demo").innerHTML = "EXPIRED";
    }
}, 1000);
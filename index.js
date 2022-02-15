var sendButton = document.getElementById("telegramSendButton");
sendButton.addEventListener("click", sendMessage);

var sendCooldown = false;


var cd = false;

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}


function helperCount(timeLeft, sendString, i) {
    setTimeout(function(){
        document.getElementById("telegramStatus").innerHTML = "sent: " + sendString + "<br> Cooldown left in seconds: " + timeLeft;
        console.log(timeLeft);
    }, i*100);

}


function countDown2second(sendString){
    

    var timeLeft = 2.1;

    for (i=0; i<=20; i++){
        
        timeLeft = timeLeft - 0.1;
        timeLeft = timeLeft.toFixed(1);

        helperCount(timeLeft, sendString, i);

        
    }
}

function setCooldown(){
    setTimeout(function(){sendCooldown = false;}, 2000);
}

function sendMessage(){
    

    if (sendCooldown) {
        console.log("cooldown la");

        return;
    }
    else {sendCooldown = true;}

    var telegramMessageElement = document.getElementById("telegramMessage");

    var sendString = telegramMessageElement.value;
    var sendURL = "https://api.telegram.org/bot2062650826:AAFYO8AnpEVy23ma1N84wpefkNoS-jctqRU/sendMessage?chat_id=237977665&text=";

    sendURL += sendString;

    axios.get(sendURL, {
        params: {
        }
    })

    .then(response =>  {
        //console.log(response.data);
        document.getElementById("telegramStatus").innerHTML = "sent: " + sendString;
        setCooldown();
        countDown2second(sendString);

    })
    .catch(error => {
        //console.log(error.message)
        document.getElementById("telegramStatus").innerHTML = "error in trying to send: " + sendString;
        setCooldown();
        countDown2second("nothing, please retry"+sendString);

    });



    
    
}

var sendButton = document.getElementById("telegramSendButton");
sendButton.addEventListener("click", sendMessage);

var sendCooldown = false;

function helperCount(timeLeft, sendString, i) {
    setTimeout(function(){
        document.getElementById("telegramStatus").innerHTML = "sent: " + sendString + "<br> Cooldown left in seconds: " + timeLeft;
        console.log(timeLeft);
    }, i*100);

}

function countDown5second(sendString){
    

    var timeLeft = 5.1;

    for (i=0; i<=50; i++){
        
        timeLeft = timeLeft - 0.1;
        timeLeft = timeLeft.toFixed(1);

        helperCount(timeLeft, sendString, i);

        
    }
}

function setCooldown(){
    setTimeout(function(){sendCooldown = false;}, 5000);
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
        countDown5second(sendString);
    
    })
    .catch(error => {
        //console.log(error.message)
        document.getElementById("telegramStatus").innerHTML = "error in trying to send: " + sendString;


    });



    
    
}

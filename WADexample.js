var sendButton = document.getElementById("telegramSendButton");
sendButton.addEventListener("click", sendMessage);

var BOTTOKEN = "2001239054:AAHGMkcRfNvPzfV3dl98IPSNti9E56Cp4GU"

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
    else {
        var sendString = telegramMessageElement.value;
        sendCooldown = true;
        setCooldown();
        countDown5second(sendString);
    }


    var telegramMessageElement = document.getElementById("telegramMessage");
    var chatID = document.getElementById("telegramChatId").value;

    
    var sendURL = "https://api.telegram.org/bot" + BOTTOKEN + "/sendMessage?chat_id=" + chatID + "&text=" + sendString;



    axios.get(sendURL, {
        params: {
            
        }
    })


    .then(response =>  {
        //console.log(response.data);
        document.getElementById("telegramStatus").innerHTML = "sent: " + sendString;
        
    
    })
    .catch(error => {
        console.log(error)
        document.getElementById("telegramStatus").innerHTML = "error in trying to send: " + sendString +"<br>" + error.data.description;



    });



    
    
}

function random(min,max){
    return Math.round(Math.random() * (max-min) + min);
}


function dropBox(){
    var length = random(50, ($(".game").width() - 50));
    var velocity = random(50000, 100000);
    var size = random(50, 150);
    var thisBox = $("<div/>", {
      class: "box",
      style:  "width:" +size+ "px; height:"+size+"px; left:" + length+  "px; transition: transform " +velocity+ "ms linear;"
    });
    
    //set data and bg based on data
    thisBox.data("test", Math.round(Math.random()));
    if(thisBox.data("test")){
      thisBox.css({"background": "url('https://cdn.discordapp.com/attachments/818102115058450474/887315665273368596/pipbw.gif')", "background-size":"contain", "background-repeat": "no-repeat"});
    } else {
      thisBox.css({"background": "url('https://cdn.discordapp.com/attachments/818102115058450474/887315665273368596/pipbw.gif')", "background-size":"contain", "background-repeat": "no-repeat"});
    }
    
    
    //insert gift element
    $(".game").append(thisBox);
    
    //random start for animation
    setTimeout(function(){
      thisBox.addClass("move");
    }, random(0, 20) );

    
    
    //remove this object when animation is over
    thisBox.one("webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend",
                function(event) {
      $(this).remove();
    });
}

setInterval(() => {
    dropBox();
}, 200);


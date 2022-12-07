window.onload = function() {
    // to resolve missing "use strict" statement jshint error
    "use strict";
    var timer = null;
    var speed = 250;
    var frame = 0;
    var size = document.getElementById("fontsize").value;

    // attach event handler for start button
    document.getElementById("start").onclick = function() {
        toggleButton();
        timer = setInterval(display, speed);
    };

    // attach event handler for stop button
    document.getElementById("stop").onclick = function() {
        if(timer){
            clearInterval(timer);
            timer = null;
        } 
        display("idle");   
        toggleButton();
    };

    // attach event handler for animation option change
    document.getElementById("animation").onchange = function() {
        frame = 0;
        display("idle"); 
    };

    // attach event handler for font size change
    document.getElementById("fontsize").onchange = function() {
        size = document.getElementById("fontsize").value;
        document.getElementById("text-area").className = size;
        resetInterval();
    };

    // attach event handler for speed change
    document.getElementById("turbo").onchange = function() {
        speed = document.getElementById("turbo").checked ? 50 : 250;
        resetInterval();
    };

    // function to button toggle buttons when animation is running and stopped
    function toggleButton(){
        document.getElementById("start").disabled = !document.getElementById("start").disabled;
        document.getElementById("stop").disabled = !document.getElementById("stop").disabled;
        document.getElementById("animation").disabled = !document.getElementById("animation").disabled;
    }

    // function to display different text in textarea
    function display(state) {
        let txtarea = document.getElementById("text-area");
        
        // when idle then all the animation text should be displayed
        if(state === "idle"){
            txtarea.value = ANIMATIONS[document.getElementById("animation").value];
        } else {
            let parts = ANIMATIONS[document.getElementById("animation").value].split("=====");

            if(parts.length === frame){
                frame = 0;
            }
    
            txtarea.value = parts[frame];
        }

        //increment frame value so that next frame is displayed when display function is called next time
        frame++;
    }

    // function to clear existing interval and create new with different delay
    function resetInterval(){
        if(timer){
            clearInterval(timer);
            timer = setInterval(display, speed);
        }
    }
};
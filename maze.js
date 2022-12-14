$(()=>{
    $("#start").click(function(){
        $("#status").text("Game Started!");
        $(".example").text("0%");
    });

    $("#end").mouseenter(function(){
        if( $("#status").text().indexOf("Started!") > 0){
            $("#status").text("You won! Click S to start again.");
            alert("You Won!");
            $(".example").text("100%");
        }
    });

    $(".boundary").mouseenter(function(){
        if( $("#status").text().indexOf("Started!") > 0){
            $("#status").text("You lost! Click S to start again.");
            alert("You Lost!");
        }
    });

    
    $("#maze").mouseleave(function(){
        if( $("#status").text().indexOf("Started!") > 0){
            $("#status").text("You lost! Click S to start again.");
            alert("You Lost!");
        }
    });
});
 
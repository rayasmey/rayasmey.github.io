$(()=>{
    $("#btn").click(btnClicked);

    function btnClicked(){
        $.get("/8ball")
            .done(changeValue);
    }

    function changeValue(result){
        $("#question").val(result);
        $("#question").focus();
    }
});
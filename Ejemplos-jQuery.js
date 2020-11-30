$(document).ready(function () 
{
    $("#ms1").click(function()
    {
        $(this).hide(500);
        $("#ms2").show(500);
    });
    $("#ms2").dblclick(function()
    {
        $(this).hide(500);
        $("#ms3").show(500);
    });
    $("#ms3").mouseenter(function()
    {
        $(this).hide(500);
        $("#ms4").show(500);
    });
    $("#ms4").mouseleave(function()
    {
        $(this).hide(500);
        $("#ms5").show(500);
        $(".inp1").show(500);
        $("#btn1").show(500);
    });
    $(".inp1").focus(function()
    {
        $(this).css("background-color", "white");
    });
    $(".inp1").blur(function()
    {
        $(this).css("background-color", "black");
    });
    $("#btn1").click(function()
    {
        $("#ms5").hide(500);
        $(".inp1").hide(500);
        $(this).hide(500);
        $("#div1").fadeIn();
        $("#div2").fadeIn("slow");
        $("#div3").fadeIn(750);
        $("#div1").fadeOut();
        $("#div2").fadeOut("slow");
        $("#div3").fadeOut(750);
        $("#btn2").show(500);
    });
    $("#btn2").click(function()
    {
        $(this).hide(500);
        $("#div1").fadeToggle();
        $("#div2").fadeToggle("slow");
        $("#div3").fadeToggle(1000);
        $("#btn3").show(500);
    });
    $("#btn3").click(function()
    {
        $(this).hide(500);
        $("#div1").fadeTo("slow", 0.20);
        $("#div2").fadeTo("slow", 0.20);
        $("#div3").fadeTo("slow", 0.20);
        $("#btn4").show(500);
    });
    $("#btn4").click(function()
    {
        $(this).hide(500);
        $("#div1").hide(500);
        $("#div2").hide(500);
        $("#div3").hide(500);
        $("#div4").show(500);
    });
    $("#div4").click(function()
    {
        $("#div5").slideDown("slow");
        $("#btn5").show(500);
    });
    $("#btn5").click(function()
    {
        $(this).hide(500);
        $("#div4").hide(500);
        $("#div5").hide(500);
        $("#div6").show(500);
        $("#div7").show(500);
        
    });
    $("#div6").click(function()
    {
        $("#div7").slideUp("slow");
        $("#div6").hide(500);
        $("#btn6").show(500);
    });
    $("#btn6").click(function()
    {
        $(this).hide(500);
        $("#div8").show(500)
        .animate({height: '300px', opacity: '0.6'}, "slow")
        .animate({width: '300px', opacity: '0.9'}, "slow")
        .animate({height: '130px', opacity: '0.6'}, "slow")
        .animate({width: '130px', opacity: '0.9'}, "slow");
        $("#btn7").show(500);
    });
    $("#btn7").click(function()
    {
        $(this).hide(500);
        $("#div8").hide(500);
        $("#btn8").show(500);
        $("#div9").show(500);       
    });
    $("#div9").click(function()
    {
        $("#div10").slideDown(5000);
    });
    $("#btn8").click(function()
    {
        $("#div10").stop();  
        $("#btn9").show(500);
    });
    $("#btn9").click(function()
    {
        $(this).hide("slow", function()
        {
            $("#div9").hide(500);
            $("#div10").hide(500);
            $("#btn8").hide(500);
            $("#div11").show(500);
        });
    });
    $("#div11").click(function()
    {
        alert("HTML: " + $("#div11").html());
        $("#div11").hide(500);
        $("#div12").show(500);
        $("#btn10").show(500);
    });
    $("#div12").click(function()
    {
        $(this).html("<h1><b>Hola :D</b></h1>");
    });
    $("#btn10").click(function()
    {
        $(this).hide(500);
        $("#div12").hide(500);
        $("#div13").show(500);
        $("#btn11").show(500);
    });
    $("#div13").click(function()
    {
        $(this).append(" <b>Gracias</b>.");
    });
    $("#btn11").click(function()
    {
        $(this).hide("slow", function()
        {
            $("#div13").remove(); 
            $("#btn12").show(500);
            $("#div14").show(500);
        });
    });
    $("#btn12").click(function()
    {
        $("#div14").load("final.txt", function(responseTxt, statusTxt, xhr)
        {
        if(statusTxt == "success")
            alert("External content loaded successfully!");
        if(statusTxt == "error")
            alert("Error: " + xhr.status + ": " + xhr.statusText);
        });
    });
});  
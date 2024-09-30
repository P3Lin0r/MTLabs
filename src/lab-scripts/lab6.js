var windowWidth = $(window).width();

$(document).ready(function () {
    $("#btn").click(function(){
        $("#btn").css("display", "none")
        var tar = `<textarea id="textar"></textarea>`;
        $("body").append(tar);
        $("#textar").css({
            "position": "absolute",
            "bottom": "30px",
            "right": "180px"
        });
        setTimeout(function(){
            $("#textar").css({
                "bottom": "",
                "right": "",
                "top": "auto",
                "left": "auto"
            });
        });
        $("#textar").animate({
            left: "0",
            top: "0"
        },2000, function(){
            $(this).css({
                "border-color": "red",
                "text-align": "center"
            })
            $(this).val("МАМА");

            $(this).animate({
                left: windowWidth-$(this).outerWidth()-1,
                top: "0"
            }, 2000, function(){
                $(this).fadeOut(1000, function(){
                    $(this).remove();
                });
                $("#btn").fadeIn(500);
            });
        });
    });
});
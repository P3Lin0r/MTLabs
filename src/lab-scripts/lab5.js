$(document).ready(function(){
    $("#addImage").click(function(){
        $("#imgcontainer img").fadeOut(0).fadeIn(2000);
        $(this).toggleClass("active");
    });
});

var windowWidth = $(window).width();
var blockWidth = $("#animatedBlock").width();

$(document).ready(function(){
    $("#startanimation").click(function(){
        $("#animatedBlock").animate({
            left: windowWidth - blockWidth,
        }, 2000, function(){
            $(this).animate({
                left: 0
            }, 2000, function(){
                $(this).animate({
                    left: (windowWidth / 2) - (blockWidth/5)
                }, 2000, function(){
                    $(this).css("background-color", "red");
                    $(this).css("color", "yellow");
                    $(this).animate({
                        width: "50px",
                        height: "50px"
                    }, 2000);
                });
            });
        });
    });
});

$(document).ready(function(){
   $("#chbox").change(function(){
    if($(this).is(":checked")){
        var newElement = `
                    <div class="input-box" id="addtext">
                        <label>Введіть ще текст:</label>
                        <input type="text">
                    </div>
                `;
        $(".task-form").append(newElement);
    }
    else{
        $("#addtext").remove(newElement);
    }
   }); 
});
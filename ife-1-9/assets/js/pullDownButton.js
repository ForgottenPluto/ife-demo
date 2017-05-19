/**
 * Created by Administrator on 2017/5/12.
 */
$(function () {
    /*个人报表二级目录*/
    function buttonTwoClick() {
        var $folder = $(this);
        var $i=$folder.children("i");
        function buttonOn() {
            $folder.addClass("publicButton-On")
                .attr("id", "twoChecked")
                .siblings().slideDown(200);
            $i.eq(0).html("&#xe8eb;");
            $i.eq(1).html("&#xe8ea;");
            return false;
        };

        function buttonOff() {
            $i.eq(0).html("&#xe6a7;");
            $i.eq(1).html("&#xe64f;");
            $folder.removeClass("publicButton-On")
                .removeAttr("id")
                .siblings().slideUp();
            return false;
        };
        if ($folder.attr("id")=="twoChecked") {
            $folder.siblings().find("#threeChecked").click();
            buttonOff();
            console.log("off");
        }else {
            $("#twoChecked").click();
            buttonOn();
            console.log("on");
        }
    };


    /*个人报表三级目录*/
    function buttonThreeClick() {
        var $folder = $(this);
        function buttonOn() {
            $folder.addClass("publicButton-On")
                .attr("id","threeChecked");
            return false;
        }

        function buttonOff() {
            $folder.removeClass("publicButton-On")
                .removeAttr("id");
            return false;
        }

        if ($folder.attr("id")=="threeChecked") {
            buttonOff();
        } else {
            if ($("#threeChecked").length) {
                $("#threeChecked").click();
            }
            buttonOn();
        }
    }

    $(".publicVice-Button").on("click", buttonTwoClick);
    $(".publicDocument-Button").on("click",buttonThreeClick);


});
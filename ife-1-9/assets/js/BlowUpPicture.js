/**
 * Created by Administrator on 2017/5/8.
 */
$(function () {
    function BlowUpClick() {
        $("body").css("overflow", "hidden");
        var $bigImg = $("#bigImg").find("img");
        var imgLength = $(".publicPersonal img").length;
        var img_src = $(this).parents(".depotWrapper").find("img").attr("src");
        var img_type = img_src.lastIndexOf(".");
        var img_length = img_src.length;
        var img_file_attr = img_src.substring(img_type, img_length);
        var new_scr = img_src.substring(0, img_src.lastIndexOf("/") - 5) + "bigImg/";
        var img_num = img_src.substring(img_src.lastIndexOf("/") + 1, img_src.lastIndexOf("_"));
        var img_big_src = new_scr + img_num + img_file_attr;
        $bigImg.attr("src", img_big_src);
        var imgBigHeight = $(window).height();
        $(".pictureFrame").show()
            .css({
                "height": imgBigHeight
            });
        function RightButtonClick() {
            if (img_num == imgLength) {
                img_num = 1;

            } else {
                img_num++;
            }
            ;
            img_big_src = new_scr + img_num + img_file_attr;
            $bigImg.attr("src", img_big_src);
        };

        function LeftButtonClick() {
            if (img_num == 1) {
                img_num = 12;

            } else {
                img_num--;
            }
            ;
            img_big_src = new_scr + img_num + img_file_attr;
            $bigImg.attr("src", img_big_src);
        };

        $(".rightButton a").on("click", RightButtonClick);
        $(".leftButton a").on("click", LeftButtonClick);

    };
    function BigImgClick() {
        $(this).children("img").attr("src", "#")
            .parents(".pictureFrame").hide();
        $("body").css("overflow", "auto");
        $(".rightButton a").off("click");
        $(".leftButton a").off("click");
    }

    $(".BlowUp").on("click", BlowUpClick);
    $("#bigImg").on("click", BigImgClick);
});
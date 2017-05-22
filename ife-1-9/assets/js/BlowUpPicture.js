/**
 * Created by Administrator on 2017/5/8.
 */
$(function () {
    function BlowUpClick() {
        $("body").css("overflow", "hidden");
        let $bigImg = $("#bigImg").find("img");
        let imgLength = $(".publicPersonal img").length;
        let img_src = $(this).parents(".depotWrapper").find("img").attr("src");
        let img_type = img_src.lastIndexOf(".");
        let img_length = img_src.length;
        let img_file_attr = img_src.substring(img_type, img_length);
        let new_scr = img_src.substring(0, img_src.lastIndexOf("/") - 5) + "bigImg/";
        let img_num = img_src.substring(img_src.lastIndexOf("/") + 1, img_src.lastIndexOf("_"));
        let img_big_src = new_scr + img_num + img_file_attr;
        $bigImg.attr("src", img_big_src);
        let imgBigHeight = $(window).height();
        $(".pictureFrame").show()
            .css({
                "height": imgBigHeight
            });
        function RightButtonClick() {
            if (img_num === imgLength) {
                img_num = 1;

            } else {
                img_num++;
            }

            img_big_src = new_scr + img_num + img_file_attr;
            $bigImg.attr("src", img_big_src);
        }

        function LeftButtonClick() {
            if (img_num === 1) {
                img_num = 12;

            } else {
                img_num--;
            }
            img_big_src = new_scr + img_num + img_file_attr;
            $bigImg.attr("src", img_big_src);
        }

        $(".rightButton a").on("click", RightButtonClick);
        $(".leftButton a").on("click", LeftButtonClick);

    }
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
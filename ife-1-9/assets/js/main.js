$(function () {
    $(document).ready(showDate());
    $(".publicButton a").bind("click", buttonOnClickFile);
    $(".publicVice-Button a").bind("click", buttonOnClickFile);
    $(".publicDocument-Button a").bind("click", buttonOnClickDocument);

    /*加载运行*/
    //showData();//显示时间


    /*登录*/


    /*交换买卖方 */

    /*左右移动  */


    /*左边公共栏*/
    function buttonOnClickFile() {
        var $folder = $(this).parent().siblings();//点击的下一级设为变量
        if ($folder.is(":visible")) {
            //下级要关闭----------------------------------------------------未调试
            $folder.parent()
                .css("background-color", "inherit")//背景颜色
                .children(".publicButton-On").removeClass("publicButton-On checkButton");


            $folder.hide()                                          //隐藏目录
                .siblings().removeClass("publicButton-On")
                .children(".viceIcoRight").attr("src", "assets/imags/fileOFF.png")//被点击的目录关闭，恢复颜色
                .siblings(".viceIcoLeft").attr("src", "assets/imags/buttonOFF.png");
            return false;
        } else {
            // $folder.parent().siblings().children("div").find(a).triggerHandler("click");//同辈其他要关闭------未调试
            $folder.parent().css("background-color", "#393e4e");//背景颜色
            $folder.show()                                             //点击显示
                .siblings().addClass("publicButton-On checkButton")
                .children(".viceIcoRight").attr("src", "assets/imags/fileON.png")//被点击的目录打开，设为白色
                .siblings(".viceIcoLeft").attr("src", "assets/imags/buttonON.png");
            return false;
        }
    }

    function buttonOnClickDocument() {
        $(".publicDocumentButton-On").removeClass("publicDocumentButton-On")//没被选中的文档去掉白色
            .children("img").attr("src", "assets/imags/documentOFF.png");//更改图标
        $(this).siblings().attr("src", "assets/imags/documentON.png");//选中设置白色
        $(this).parent().addClass("publicDocumentButton-On");//选中设置白色
    }


    /*日历功能*/

    /*显示时间*/
    function showDate() {
        for (var ye = 1970; ye <= 2070; ye++) {
            var yearHtml = "<option value=" + ye + ">" + ye + "年" + "</option>";
            $(".MenologyTop .select1").append(yearHtml);
        }
        for (var mo = 1; mo <= 12; mo++) {
            var mouthHtml = "<option value=" + mo + ">" + mo + "月" + "</option>";
            $(".MenologyTop .select2").append(mouthHtml)
                .attr("value", "mo");
        }

    }
});
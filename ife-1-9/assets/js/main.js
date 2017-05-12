/*personalDepot.html*/
$(function () {
    /*初始化*/
    $(".leftSideBar").height($(".indexMain").height());

    /*绑定事件*/
    $(".depotWrapper>a img").bind("mouseenter", depotMouseShow);
    $(".depotWrapper>div").bind("mouseleave", depotMouseHide);//mouseleave
    $(".BlowUp").bind("click", blowUpClick);

    /*窗口改变时候*/
    window.onresize = function (){
        $(".leftSideBar").height($(".indexMain").height());

    }

    /*方法*/
    function depotMouseShow(e) {
        var $depotOperate = $(this).parent().siblings();
        $depotOperate.show();
        $depotOperate.children().children().animate({top: "42%"}, 200);
        e.stopPropagation();
    }

    function depotMouseHide(e) {
        var $this = $(this);
        $this.hide();
        $this.children().children().css("top", "0");
        e.stopPropagation();
    }

    function blowUpClick() {
        var $blowUpClick = $(this);

    }


    $(function () {
        $(document).ready(showDate());
// $(document).ready(showMenology());

        $(".publicVice-Button a").bind("click", buttonTwoClick);
        $(".publicDocument-Button a").bind("click", buttonThreeClick);
//$(".returnButton").bind("click",selectClick);
        $(".MenologyTop .select1").bind("change", selectClick);
    });
    /*左边工具栏事件*/

    /*加载后自动触发*/
// $("#personalReport").click();//默认个人报表


    /*测试程序*/
// function buttonText() {
//     var textDay=new Date(showMenology());
//     alert(textDay);
// }


    /*加载运行*/
//showData();//显示时间


    /*登录*/


    /*交换买卖方 */

    /*左右移动  */


    /*左边公共栏按钮*/

    /*个人报表二级*/
    function buttonTwoClick() {
        var $folder = $(this).parent();

        function buttonOn() {
            $folder.addClass("publicButton-On twoChecked")
                .siblings().slideDown(500);
            $(".twoChecked>span").html("<i class='iconfont'>&#xe8eb;</i><i class='iconfont'>&#xe8ea;</i>");
            return false;
        }

        function buttonOff() {
            $(".twoChecked>span").html("<i class='iconfont'>&#xe6a7;</i><i class='iconfont'>&#xe64f;</i>");
            $folder.removeClass("publicButton-On twoChecked")
                .siblings().slideUp();
            return false;
        }

        if ($folder.is(".twoChecked")) {
            if ($(".manFolder div.threeChecked").length > 0) {
                $(".threeChecked>a").click();
            }
            buttonOff();
        } else {
            if ($(".manFolder div.twoChecked").length > 0) {
                $(".twoChecked>a").click();
            }
            buttonOn();
        }
    }

    /*个人收藏二级*/

    /*我的分享二级*/

    /*图库二级*/

    /*成长记录二级*/

    /*账户信息二级*/

    /*个人报表三级目录*/
    function buttonThreeClick() {
        var $folder = $(this).parent();

        function buttonOn() {
            $folder.addClass("threeChecked publicButton-On");
            return false;
        }

        function buttonOff() {
            $folder.removeClass("threeChecked publicButton-On");
            return false;
        }

        if ($folder.is(".threeChecked")) {
            buttonOff();
        } else {
            if ($(".manFolder div.threeChecked").length > 0) {
                $(".threeChecked>a").click();
            }
            buttonOn();
        }
    }


    /*日历功能*/
    /*function showMenology() {
     var $clickYear=$(".MenologyTop .select1 option[selected=selected]");
     var $clickMonth=$(".MenologyTop .select2 option[selected=selected]");
     return[$clickYear,$clickMonth,1];
     }
     */
    /*显示时间*/
    function showDate() {
        var menologyDate = "";
        var myDate = new Date();
        var myYear = myDate.getFullYear();
        var myMouth = myDate.getMonth() + 1;
        var $MenologyBottom = $(".MenologyBottom");

        for (var ye = 1970; ye <= 2070; ye++) {
            var yearHtml;
            if (ye == myYear) {
                yearHtml = "<option value=" + ye + " selected=\"selected\"" + ">" + ye + "年" + "</option>";
                $(".MenologyTop .select1").append(yearHtml);
            } else {
                yearHtml = "<option value=" + ye + ">" + ye + "年" + "</option>";
                $(".MenologyTop .select1").append(yearHtml);
            }
        }
        for (var mo = 1; mo <= 12; mo++) {
            var mouthHtml;
            if (mo == myMouth) {
                mouthHtml = "<option value=" + mo + " selected=\"selected\"" + ">" + mo + "月" + "</option>";
                $(".MenologyTop .select2").append(mouthHtml);
            }
            else {
                mouthHtml = "<option value=" + mo + ">" + mo + "月" + "</option>";
                $(".MenologyTop .select2").append(mouthHtml);
            }
        }
        for (var i = 0; i < 6; i++) {
            menologyDate += "<tr>" + "<td>1</td>" + "<td></td>" + "<td></td>" + "<td></td>" + "<td></td>" + "<td></td>" + "</tr>";
            $MenologyBottom.append("<table><tr><td>1</td><td>2</td><td>3</td><td>4</td><td>5</td><td>6</td><td>7</td></tr></table>");
        }
    }

    /*动态更改select*/
    /*function selectClick() {
     var selectChecked = $(this).val();
     var selectLength = $(this).children("option");
     for (var i = 0; i < selectLength.length; i++) {
     if (selectLength[i].value == selectChecked) {
     //selectLength[i].selected=true;
     alert(selectChecked);
     return false;
     } else {
     //selectLength[i].selected=false;
     //alert(selectChecked+ljx);


     }
     }

     }*/


});

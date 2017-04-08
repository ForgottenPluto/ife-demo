$(function () {
    $(document).ready(showDate());
    // $(document).ready(showMenology());
    $(".publicButton a").bind("click", buttonOnClickFile);
    $(".publicVice-Button a").bind("click", buttonOnClickFile);
    $(".publicDocument-Button a").bind("click", buttonOnClickDocument);
    // $(".returnButton").bind("click",selectClick);
    $(".MenologyTop .select1").bind("change", selectClick);

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


    /*左边公共栏一级按钮*/
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

    /*左边公共栏二级按钮*/
    function buttonOnClickDocument() {
        $(".publicDocumentButton-On").removeClass("publicDocumentButton-On")//没被选中的文档去掉白色
            .children("img").attr("src", "assets/imags/documentOFF.png");//更改图标
        $(this).siblings().attr("src", "assets/imags/documentON.png");//选中设置白色
        $(this).parent().addClass("publicDocumentButton-On");//选中设置白色
    }


    /*日历功能*/
    // function showMenology() {
    //     var $clickYear=$(".MenologyTop .select1 option[selected=selected]");
    //     var $clickMonth=$(".MenologyTop .select2 option[selected=selected]");
    //     return[$clickYear,$clickMonth,1];
    // }


    /*显示时间*/
    function showDate() {
        // var menologyDate = "";
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
            // menologyDate += "<tr>" + "<td>1</td>" + "<td></td>" + "<td></td>" + "<td></td>" + "<td></td>" + "<td></td>" + "</tr>";
            $MenologyBottom.append("<table><tr><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr></table>");
        }
    }


    /*动态更改select*/
    function selectClick() {
        var selectChecked = $(this).val();
        var selectLength=$(this).children("option");
        for(var i = 0;i<selectLength.length;i++){
            if(selectLength[i].value==selectChecked){
                // selectLength[i].selected=true;
                alert(selectChecked);
                return false;
            }else {
                // selectLength[i].selected=false;
                alert(selectChecked+1);
            }
        }

    }


});
/**
 * Created by Administrator on 2017/5/21.
 */
$(function () {

    let $localPhoto=$("#localPhoto");
    let dateObj2 = dateFun();

    /*绑定事件*/
    $localPhoto.on("click",LocalPhotoOn);



    /*初始化html部分*/
    birthDayHtml();

    /*时间对象*/
    function dateFun() {
        let _date = new Date();    // 默认为当前系统时间
        return {
            getDate: function () {
                return _date;
            },
            setDate: function (date) {
                _date = date;
            },
        };
    }

    /*html初始化*/
    function birthDayHtml() {
        /*表格html*/
        let _year = dateObj2.getDate().getFullYear();
        let _month = dateObj2.getDate().getMonth() + 1;
        let _day = dateObj2.getDate().getDate();
        let dates = new Date(_year, _month, 0).getDate();
        let $day = $("#birthDay");
        let $year = $("#birthYear");
        let $month = $("#birthMon");
        for (let ye = _year - 100; ye <= _year; ye++) {
            let yearHtml;
            yearHtml = "<option value=" + ye + ">" + ye + "</option>";
            $year.append(yearHtml);
        }
        $year.val(_year);
        for (let mo = 1; mo <= 12; mo++) {
            let mouthHtml;
            if (mo <= 9) {
                mouthHtml = "<option value=" + mo + ">" + "0" + mo + "</option>";
            } else {
                mouthHtml = "<option value=" + mo + ">" + mo + "</option>";
            }
            $month.append(mouthHtml);
        }
        $month.val(_month);
        for (let day = 1; day <= dates; day++) {
            let dayHtml;
            dayHtml = "<option value=" + day + ">" + day + "</option>";
            $day.append(dayHtml);
        }
        $day.val(_day);
    }

    function LocalPhotoOn() {




    }

});
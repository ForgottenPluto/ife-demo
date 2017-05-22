/**
 * Created by Administrator on 2017/5/13.
 */
$(function () {
    /* 用于记录日期，显示的时候，根据dateObj中的日期的年月显示*/
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

    let dateObj = dateFun();
    // 设置calendar div中的html部分
    renderHtml();
    DayHtml();
    // 表格中显示日期
    showCalendarData();

    /*day的html*/
    function DayHtml() {
        let _year = dateObj.getDate().getFullYear();
        let _month = dateObj.getDate().getMonth() + 1;
        let _day = dateObj.getDate().getDate();
        let dates = new Date(_year, _month, 0).getDate();
        let $day = $("#day");
        $day.empty();
        for (let day = 1; day <= dates; day++) {
            let dayHtml;
            dayHtml = "<option value=" + day + ">" + day + "日" + "</option>";
            $day.append(dayHtml);
        }
        $day.val(_day);
    }

    /*** 渲染html结构*/
    function renderHtml() {
        let calendar = document.getElementById("calendar");
        let bodyBox = document.createElement("div");  // 表格区 显示数据

        // 设置表格区的html结构
        bodyBox.className = 'calendar-body-box';
        let _bodyHtml = "";

        // 一个月最多31天，所以一个月最多占6行表格
        for (let i = 0; i < 6; i++) {
            _bodyHtml += "<tr>" +
                "<td></td>" +
                "<td></td>" +
                "<td></td>" +
                "<td></td>" +
                "<td></td>" +
                "<td></td>" +
                "<td></td>" +
                "</tr>";
        }
        bodyBox.innerHTML = "<table id='calendarTable' class='calendar-table'>" + _bodyHtml + "</table>";
        // 添加到calendar div中
        calendar.appendChild(bodyBox);
        /*表格html*/
        let _year = dateObj.getDate().getFullYear();
        let _month = dateObj.getDate().getMonth() + 1;
        let $year =$("#year");
        let $month =$("#month");
        for (let ye = _year - 90; ye <= _year + 10; ye++) {
            let yearHtml;
            yearHtml = "<option value=" + ye + ">" + ye + "年" + "</option>";
            $year.append(yearHtml);
        }
        $year.val(_year);
        for (let mo = 1; mo <= 12; mo++) {
            let mouthHtml;
            mouthHtml = "<option value=" + mo + ">" + mo + "月" + "</option>";
            $month.append(mouthHtml);
        }
        $month.val(_month);
    }


    /**
     * 表格中显示数据，并设置类名
     */
    function showCalendarData() {
        let _year = dateObj.getDate().getFullYear();
        let _month = dateObj.getDate().getMonth() + 1;
        let _day = dateObj.getDate().getDate();
        // 刷新显示
        $("#year").val(_year);
        $("#month").val(_month);
        $("#day").val(_day);

        // 设置表格中的日期数据
        let _table = document.getElementById("calendarTable");
        let _tds = _table.getElementsByTagName("td");
        let _firstDay = new Date(_year, _month - 1, 1);  // 当前月第一天
        for (let i = 0; i < _tds.length; i++) {
            let _thisDay = new Date(_year, _month - 1, i + 1 - _firstDay.getDay());
            let _thisDayStr = getDateStr(_thisDay);
            _tds[i].innerText = _thisDay.getDate();
            _tds[i].setAttribute('data', _thisDayStr);
            if (_thisDayStr === getDateStr(new Date())) {    // 当前天
                _tds[i].className = 'currentDay';
            } else if (_thisDayStr.substr(0, 6) === getDateStr(_firstDay).substr(0, 6)) {
                _tds[i].className = 'currentMonth';  // 当前月
            } else {    // 其他月
                _tds[i].className = 'otherMonth';
            }
        }


    }

    /*动态更改select*/
    function selectClick() {
        let thisYear = $("#year").val();
        let thisMon = $("#month").val();
        dateObj.setDate(new Date(thisYear, thisMon - 1, 1));
        showCalendarData();
        DayHtml();
    }

    /**
     * 点击上个月图标触发
     */
    function toPrevMonth() {
        let date = dateObj.getDate();
        dateObj.setDate(new Date(date.getFullYear(), date.getMonth() - 1, 1));
        showCalendarData();
        DayHtml();
    }

    /**
     * 点击下个月图标触发
     */
    function toNextMonth() {
        let date = dateObj.getDate();
        dateObj.setDate(new Date(date.getFullYear(), date.getMonth() + 1, 1));
        showCalendarData();
        DayHtml();
    }

    /**
     * 日期转化为字符串， 4位年+2位月+2位日
     */
    function getDateStr(date) {
        let _year = date.getFullYear();
        let _month = date.getMonth() + 1;    // 月从0开始计数
        let _d = date.getDate();

        _month = (_month > 9) ? ("" + _month) : ("0" + _month);
        _d = (_d > 9) ? ("" + _d) : ("0" + _d);
        return _year + _month + _d;
    }

    function todayButtonClick() {
        dateObj.setDate(new Date());
        showCalendarData();
        DayHtml();
    }

    /*绑定上个月下个月事件*/
    $("#prevMonth").on("click", toPrevMonth);
    $("#nextMonth").on("click", toNextMonth);
    $("#year").on("change", selectClick);
    $("#month").on("change", selectClick);
    $("#todayButton").on("click", todayButtonClick);

});
/**
 * Created by Administrator on 2017/5/13.
 */
$(function () {
    /* 用于记录日期，显示的时候，根据dateObj中的日期的年月显示*/
    function dateFun() {
        var _date = new Date();    // 默认为当前系统时间
        return {
            getDate: function () {
                return _date;
            },
            setDate: function (date) {
                _date = date;
            },
            clear: function () {
                _date = new Date();
            }
        };
    }
    var dateObj=dateFun();
    // 设置calendar div中的html部分
    renderHtml();
    DayHtml();
    // 表格中显示日期
    showCalendarData();

    /*day的html*/
    function DayHtml() {
        var _year = dateObj.getDate().getFullYear();
        var _month = dateObj.getDate().getMonth() + 1;
        var _day = dateObj.getDate().getDate();
        var dates = new Date(_year, _month, 0).getDate();
        $("#day").empty();
        for (var day = 1; day <= dates; day++) {
            var dayHtml;
            if (day == _day) {
                dayHtml = "<option value=" + day + " selected=\"selected\"" + ">" + day + "日" + "</option>";
            }
            else {
                dayHtml = "<option value=" + day + ">" + day + "日" + "</option>";
            }
            $("#day").append(dayHtml);
        }

    }

    /*** 渲染html结构*/
    function renderHtml() {
        var calendar = document.getElementById("calendar");
        var bodyBox = document.createElement("div");  // 表格区 显示数据

        // 设置表格区的html结构
        bodyBox.className = 'calendar-body-box';
        var _bodyHtml = "";

        // 一个月最多31天，所以一个月最多占6行表格
        for (var i = 0; i < 6; i++) {
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
        var _year = dateObj.getDate().getFullYear();
        var _month = dateObj.getDate().getMonth() + 1;

        for (var ye = _year - 90; ye <= _year + 10; ye++) {
            var yearHtml;
            if (ye == _year) {
                yearHtml = "<option value=" + ye + " selected=\"selected\"" + ">" + ye + "年" + "</option>";
            } else {
                yearHtml = "<option value=" + ye + ">" + ye + "年" + "</option>";
            }

            $("#year").append(yearHtml);
        }
        for (var mo = 1; mo <= 12; mo++) {
            var mouthHtml;
            if (mo == _month) {
                mouthHtml = "<option value=" + mo + " selected=\"selected\"" + ">" + mo + "月" + "</option>";
            }
            else {
                mouthHtml = "<option value=" + mo + ">" + mo + "月" + "</option>";
            }
            $("#month").append(mouthHtml);
        }
    }


    /**
     * 表格中显示数据，并设置类名
     */
    function showCalendarData() {
        var _year = dateObj.getDate().getFullYear();
        var _month = dateObj.getDate().getMonth() + 1;
        var _day = dateObj.getDate().getDate();
        // 刷新显示
        $("#year").val(_year);
        $("#month").val(_month);
        $("#day").val(_day);

        // 设置表格中的日期数据
        var _table = document.getElementById("calendarTable");
        var _tds = _table.getElementsByTagName("td");
        var _firstDay = new Date(_year, _month - 1, 1);  // 当前月第一天
        for (var i = 0; i < _tds.length; i++) {
            var _thisDay = new Date(_year, _month - 1, i + 1 - _firstDay.getDay());
            var _thisDayStr = getDateStr(_thisDay);
            _tds[i].innerText = _thisDay.getDate();
            _tds[i].setAttribute('data', _thisDayStr);
            if (_thisDayStr == getDateStr(new Date())) {    // 当前天
                _tds[i].className = 'currentDay';
            } else if (_thisDayStr.substr(0, 6) == getDateStr(_firstDay).substr(0, 6)) {
                _tds[i].className = 'currentMonth';  // 当前月
            } else {    // 其他月
                _tds[i].className = 'otherMonth';
            }
        }


    }

    /*动态更改select*/
    function selectClick() {
        var $this = $(this);
        $this.find("option[selected='selected']").attr("selected", false);
        var thisYear = $("#year").val();
        var thisMon = $("#month").val();
        dateObj.setDate(new Date(thisYear, thisMon-1, 1));
        showCalendarData();
        DayHtml();
    }

    /**
     * 点击上个月图标触发
     */
    function toPrevMonth() {
        var date = dateObj.getDate();
        dateObj.setDate(new Date(date.getFullYear(), date.getMonth() - 1, 1));
        showCalendarData();
        DayHtml();
    }

    /**
     * 点击下个月图标触发
     */
    function toNextMonth() {
        var date = dateObj.getDate();
        dateObj.setDate(new Date(date.getFullYear(), date.getMonth() + 1, 1));
        showCalendarData();
        DayHtml();
    }

    /**
     * 日期转化为字符串， 4位年+2位月+2位日
     */
    function getDateStr(date) {
        var _year = date.getFullYear();
        var _month = date.getMonth() + 1;    // 月从0开始计数
        var _d = date.getDate();

        _month = (_month > 9) ? ("" + _month) : ("0" + _month);
        _d = (_d > 9) ? ("" + _d) : ("0" + _d);
        return _year + _month + _d;
    }

   function todayButtonClick() {
       dateObj.clear();
       alert(222);
   }
    /*绑定上个月下个月事件*/
    $("#prevMonth").on("click", toPrevMonth);
    $("#nextMonth").on("click", toNextMonth);
    $("#year").on("change", selectClick);
    $("#month").on("change", selectClick);
    $("#todayButton").on("click",todayButtonClick);


});
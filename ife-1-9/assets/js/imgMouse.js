/**
 * Created by Administrator on 2017/5/4.
 */
$(function () {
    function ImgHtml() {
        let $img = $(this).find("img");
        let img_w = $img.width();
        let ico_marginLeft = img_w * 0.5 - 44;
        let img_h = $img.height();
        let spanHtml =
            '<span class="imgeMask" style="position: absolute; top:5px;left:20px; width:' +
            img_w +
            'px;height:' +
            img_h +
            'px;"><div style="display: none;margin-top: 0; margin-left:' +
            ico_marginLeft +
            'px;width:' +
            img_w +
            '"><a class="BlowUp"  href="#" title="Blow Up"><i class="iconfont">&#xe6d3;</i></a><a class="Download" href="#" title="Download"><i class="iconfont">&#xe6c5;</i></a><a class="Delete" href="#" title="Delete"><i class="iconfont">&#xe649;</i></a></div></span>';
        $(this).append(spanHtml);
    }

    $(".depotWrapper").each(ImgHtml)
        .on("mouseenter mouseleave", ".imgeMask", function () {
            let $this = $(this);
            let $imgOverBlack = $this.children();
            let $img = $this.siblings().find("img");
            $this.toggleClass("imgeOver");
            if ($imgOverBlack.hasClass("icoOver")) {
                $imgOverBlack.eq(0).removeClass("icoOver")
                    .stop(true, false)
                    .animate({marginTop: "0"}, 0);
                return false;
            } else {
                let imgNewWitth = $img.width();
                let imgNewHeight = $img.height();
                let icoNewMar = imgNewWitth * 0.5 - 44;
                $this.width(imgNewWitth);
                $this.height(imgNewHeight);
                $imgOverBlack.css("margin-left", icoNewMar);
                $imgOverBlack.eq(0).addClass("icoOver")
                    .stop(true, false)
                    .animate({marginTop: "28%"}, 150);
            }
        })

});

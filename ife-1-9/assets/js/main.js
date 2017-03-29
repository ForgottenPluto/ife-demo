window.onload = function () {
    $(".publicButton a").click(buttonOnClickFile());
    $(".publicVice-Button a").click(buttonOnClickDocument());

    function buttonOnClickFile() {
        var $folder = $(this).parent().siblings();
        if ($folder.is(":visible")) {
            $folder.hide()
                .siblings().removeClass("publicButton-On")
                .children().attr("src", "assets/imags/demo2.png")
        } else {
            $folder.show()
                .siblings().addClass("publicButton-On")
                .children().attr("src", "assets/imags/demo6.png");
        }
    }

    function buttonOnClickDocument() {
        var $folder = $(this).parent().siblings();
        if ($folder.is(":visible")) {
            $folder.hide()
                .siblings().removeClass("publicButton-On")
                .children().attr("src", "assets/imags/demo7.png")
        } else {
            $folder.show()
                .siblings().addClass("publicButton-On")
                .children().attr("src", "assets/imags/demo6.png");
        }
    }

//
//
//
//     
// 
// 
// 
// 
// $(".publicButton a").click(function () {
//         var $folder = $(this).parent().siblings();
//         if ($folder.is(":visible")) {
//             $folder.hide()
//                 .siblings().removeClass("publicButton-On")
//                     .children().attr("src","assets/imags/demo2.png")
//
//
//
//
//                 // .children().removeClass("publicVice-on-Button")
//                 // .addClass("publicVice-Button");
//
//         } else {
//             $folder.show()
//                 .siblings().addClass("publicButton-On")
//                 .children().attr("src","assets/imags/demo6.png");
//
//
//                 // .children().removeClass("publicVice-Button")
//                 // .addClass("publicVice-on-Button");
//
//         }
//
//     });
//
};
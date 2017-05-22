/**
 * Created by Administrator on 2017/5/13.
 */
$(function () {
    $("#buttonExchange").on("click", ButtonExchange);

    /*交换买卖方*/
    function ButtonExchange() {
        var $line1Buyer = $("#line1Buyer");
        var $line1Seller = $("#line1Seller");
        var buy_Man = $line1Buyer.val();
        var sell_man = $line1Seller.val();
        $("#line1Buyer").find("option:selected").attr("value", sell_man)
            .text(sell_man);
        $("#line1Seller").find("option:selected").attr("value", buy_Man)
            .text(buy_Man);
    }

});
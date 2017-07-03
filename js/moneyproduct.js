/**
 * Created by sy on 2017/6/30.
 */
$(function () {
    var productid =tools.getHref("productid");
    log(productid);
    Route.getData("getmoneyctrlproduct?productid="+productid,function (res) {
        // console.log(res);
        Route.render(".money-product","moneyProduct",res);
    })
})
/**
 * Created by sy on 2017/6/28.
 */
$(function () {
    var href=location.href;
    href=href.match(/productid=([0-9])+/);
    Route.getData("getdiscountproduct?"+href[0],function (res) {
        // console.log(res);
        Route.render(".discount-product","discount-product",res);
    })
})
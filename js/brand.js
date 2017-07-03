/**
 * Created by sy on 2017/6/28.
 */
$(function () {
    //商品排行
    var href=location.href;
    href=href.match(/brandtitleid=[0-9]+/);
    Route.getData("getbrand?"+href[0],function (res) {
        // log(res);
        Route.render(".brand-list","brandList",res);
    })
    //品牌商品列表
    Route.getData("getbrandproductlist?"+href[0],function (res) {
        Route.render(".product-list","brandProduct",res);
        var productid=$(".product-list > ul > li > a").attr("data-product");
        Route.getData("getproductcom?productid="+productid,function (res1) {
            Route.render(".product-com","ProductCom",res1);
        })
    })
    //品牌商品评论


})
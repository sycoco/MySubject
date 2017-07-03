/**
 * Created by sy on 2017/6/28.
 */
$(function () {
    var href=location.href;
    href=href.match(/productid=([0-9])+/);
    // console.log(href);
    Route.getData("getproduct?"+href[0],function (res) {
       //导航条
       //  Route.render(".product-list-title","bijiaTempList",res);
        var categoryId =res.result[0].categoryId;
        Route.getData("getcategorybyid?categoryid=" + categoryId, function (info) {
            var html=info.result[0].category;
            Route.render(".product-list-title","bijiaTempList",res);
            $("#category").html(html);
            console.log(html);
            var str=$("#category").attr("href")+"categoryid="+categoryId;
            console.log(str);
            $("#category").attr("href",str);

        });
        Route.render(".product-name","bijiaTempTitle",res);
        Route.render(".product-img","bijiaTempImg",res);
    })
    //获取评论数据
    Route.getData("getproductcom?"+href[0],function (res) {
        Route.render(".product-com-list","bijiaTempComment",res);
    })
})


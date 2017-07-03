/**
 * Created by sy on 2017/6/28.
 */
$(function () {
    Route.getData("getinlanddiscount",function (res) {
        console.log(res);
        Route.render(".inland-discount-list","productList",res);
    })
})
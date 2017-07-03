/**
 * Created by sy on 2017/6/28.
 */
$(function () {
    Route.getData("getbrandtitle",function (res) {
        Route.render(".category-title","categoryTitle",res);
        log(res);
    })
})
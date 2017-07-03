/**
 * Created by sy on 2017/6/28.
 */
$(function () {
    Route.getData("getsitenav",function (res) {
        Route.render(".site-nav","siteNav",res);
    })
})
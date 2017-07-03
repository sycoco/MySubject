/**
 * Created by sy on 2017/6/28.
 */
$(function () {
    var href=location.href;
    href=href.match(/couponid=[0-9]+/);
    Route.getData("getcouponproduct?"+href[0],function (res) {
        log(res);
        Route.render(".coupon-list","couponList",res);
    })
})
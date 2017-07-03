/**
 * Created by sy on 2017/6/28.
 */
$(function () {
    Route.getData("getcoupon",function (res) {
        // log(res);
        Route.render(".coupon-title","couponTitle",res);
    })
})
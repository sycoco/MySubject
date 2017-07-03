/**
 * Created by sy on 2017/6/27.
 */
/**
 * Created by Jepson on 2017/5/30.
 */
$(function() {
    //渲染首页菜单数据
    function menuHandle(res) {
        var data=template("menuCtrl",res);
        $("#menu > .row").html(data);
        //隐藏最后四个元素
        $('.menu-item:gt(7)').addClass("hide");
        $(".menu-item:eq(7)").on('click',function () {
            $('.menu-item:gt(7)').toggleClass('hide');
        })
    }
    Route.getData("getindexmenu",menuHandle);

    //首页折扣内容
    function discountHandle(res) {
        var data=template("moneyCtrl",res);
        $("#recommen-product>.recommen-product-list").html(data);
    }
    Route.getData("getmoneyctrl",discountHandle);
});

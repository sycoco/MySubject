/**
 * Created by sy on 2017/6/28.
 */
$(function () {
    // Route.getData("getgsshop",function (res) {
    //     log(res);
    //     Route.render(".filter","filter",res);
    // })
    setFilter($(".filter"));
    setgsShop($("#shop"));
    setgsArea($("#area"));
    setProductList($(".gs-product-list"),{"shopid":0,"areaid":0})
});
function setFilter(dom){
    var data = { "result": [{ "selected": "京东", "selectName": "shop" }, { "selected": "华北", "selectName": "area" }, { "selected": "全部价格", "selectName": "price" }] };
    dom.html(template("filter",data));
}
function setgsShop(dom){
    Route.getData("getgsshop",function (res) {
        console.log(res);
        Route.render(dom,"gsShop",res);
    })
}
function SelectShow(selectname) {
    $('#' + selectname).toggleClass('on');
}

function setgsArea(dom){
    Route.getData("getgsshoparea",function (res) {
        console.log(res);
        Route.render(dom,"gsArea",res);
    })
}

//渲染产品列表
function setProductList(dom, data, callback) {
    var shopid = data.shopid || 0;
    var areaid = data.areaid || 0;
    Route.getData( "getgsproduct?"+"shopid="+shopid+"&areaid="+areaid, function( data ) {
        Route.render(dom,"gsProductList",data);
    })
}

function GetShopProduct(select, shopid, shopname) {
    $('.shop').html(shopname + "<i></i>");
    $('.shop').attr('data-id', shopid);
    $('[data-' + select + ']').parent().removeClass('on');
    $('[data-' + select + '=' + shopid + ']').parent().addClass('on');
    $('[data-' + select + '=' + shopid + ']').parent().parent().parent().removeClass('on');
    var areaid = $('.filter').find('.area').data('id');
    setProductList($('.gs-product-list'), { "shopid": shopid, "areaid": areaid });
}

function GetAreaProduct(select, areaid, areaname) {
    $('.area').html(areaname + "<i></i>");
    $('.area').attr('data-id', areaid);
    $('[data-' + select + ']').parent().removeClass('on');
    $('[data-' + select + '=' + areaid + ']').parent().addClass('on');
    $('[data-' + select + '=' + areaid + ']').parent().parent().parent().removeClass('on');
    var shopid = $('.filter').find('.shop').data('id');
    setProductList($('.gs-product-list'), { "shopid": shopid, "areaid": areaid });
}

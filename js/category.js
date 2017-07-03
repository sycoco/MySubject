/**
 * Created by sy on 2017/6/27.
 */
$(function () {
    var category = $('#category > .row');
    function comparePrice(res) {
        var data=template("comparePrice",res);
        category.html(data);
        //点击列表弹出细节
        $('.row >li >a').one('click',function () {
            var titleId=$(this).attr('data-id');
            var title=$(this);
            function clickGetcategory(info) {
                console.log(info);
                var data=template("compareTemp",info);
                // console.log(title.next(".category-list"));
                title.next(".category-list").html(data);

            }
            Route.getData("getcategory?titleid="+titleId,clickGetcategory);
        })
        $(".category-list").addClass("hide");
        $('.row >li >a').on("click", function () {
            $(".category-list").toggleClass("hide");
        })
    }
    Route.getData("getcategorytitle",comparePrice);

})
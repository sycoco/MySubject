/**
 * Created by sy on 2017/6/27.
 */
$(function () {
    var categoryid=tools.getHref("categoryid");
    var pageid=tools.getHref("pageid");
    var category=tools.getHref("category");
    var render=function () {
        Route.getData("getproductlist?categoryid="+categoryid+"&pageid="+pageid,function(res){
            var data=template('productTemp',res);
            $('.product-list>ul').html(data);
            var page=Math.ceil(res.totalCount/res.pagesize);
            var select=pageSelect(page,pageid);
            $("span.w33:eq(1)").append(select);
            //保存上一页下一页跳转
            var prevPageid=pageid<=1?1:pageid-1,
                nextPageid=pageid>=page?page:pageid-1+2;
            var prevStr="productlist.html?categoryid="+categoryid+"&category="+category+"&pageid="+prevPageid,
                nextStr=$("#prev-page").attr("href")+"categoryid="+categoryid+"&category="+category+"&pageid="+nextPageid;
            $("#prev-page").attr("href",prevStr);
            $("#next-page").attr("href",nextStr);
            //选择框选择事件
            $("#selectPage").on("change",function(){
                pageid=$(this).val();
                console.log(pageid);
                render();
                //调用自己
                // window.location.href="productlist.html?categoryid="+categoryid+"&category="+category+"&pageid="+pageid;
            });
        })
        //设置3级导航
        Route.getData("getcategorybyid?categoryid="+categoryid,function (res) {
            // console.log(res);
            var data=template('productList',res);
            $('#product-list>nav').html(data);
        })
    }
    render();
    function pageSelect(page,pageid){
        var str='';
        str+='<select id="selectPage" name="select" selected="" style="border: 1px solid #bababa; font-size: 16px; padding: 8px 15px; height: 36px">';
        for(var i=1;i<=page;i++){
            if(i==pageid){
                str+='<option value='+i+' selected="selected">'+i+'/'+page+'</option>';
            }else{
                str+='<option value='+i+'>'+i+'/'+page+'</option>';
            }
        }
        str+='</select>';
        return str;
    }

});


(function (window) {
    //获取后台数据
    var Route={
        dataUrl:"http://127.0.0.1:9090/api/",
        getData:function (url,callback) {
            url=Route.dataUrl+url;
            $.get(url,function (res) {
                callback&&callback(res);
                // console.log(res);
            },"json" );
        },
        render:function (dom,tempid,res) {
            $(dom).html(template(tempid,res))
        }
    }
    window.Route=Route;
    window.log = console.log;
})(window);
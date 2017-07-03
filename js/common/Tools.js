/**
 * Created by sy on 2017/6/27.
 */
(function(window){
    var tools={
        getHref:getHref,
        getUrl:getUrl
    }
    function getHref(name) {
        var reg = new RegExp("(^|&)" +
            name + "=([^&]*)(&|$)");
        var r = window.location.search.substr(1).match(reg);
        if (r != null) return unescape(r[2]);
        return null;
    }
    function getUrl(){

    }
    window.tools=tools;
})(window)
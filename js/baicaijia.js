/**
 * Created by sy on 2017/6/28.
 */
$(function () {
    //tab导航
    var href=location.href;
    if(href.match(/titleid=([0-9]+)/)){
        href=parseInt(href.match(/titleid=([0-9]+)/)[1]);
    }else{
        href=0;
    }
    Route.getData("getbaicaijiatitle",function (res) {
        Route.render(".bcj-title","bcjTitle",res);
        //数据内容主体
        Route.getData("getbaicaijiaproduct?titleid="+href,function (res) {
            Route.render(".bcj-list","bcjProductList",res);
        })
        $('.tabs li').eq(href).addClass("active");
    //获取标题列表li标签,设置ul宽度为所有li标签宽的和
        var titleLi=$(".tabs li");
        var titleUl=$("ul.tabs");
        var titleUlWidth=0;
        console.log(titleLi.length);
        for(var i=0;i<titleLi.length;i++){
            titleUlWidth+=$(titleLi[i]).width();
        }
        var windowWidth = $(window).width();
        if(windowWidth<768){
            titleUl.css("width",titleUlWidth+38);
        }
        titleRender(titleUl,href);
        log(titleUlWidth);
        function titleRender(dom,href){
            var domWidth=dom.width();//ul的宽
            var maxMove=dom.parent().width()-domWidth;//负值,ul最大移动距离
            var minMove=0;//ul最小移动距离
            var minDis=50;//向右滑屏最大移动位置
            var maxDis=maxMove-minDis;//向左滑屏最大移动位置
            var startX=0;//滑屏开始时手指触摸的位置
            var moveX=0;//滑屏移动中手指触摸的位置
            var endX=0;//滑屏结束时手指触摸的位置
            var distanceX=0;//滑屏开始到结束的距离
            var currentX=0;//目标当前位置
            var list=dom.find("li");

            //设置ul偏移
            for(var i=0;i<href;i++){
                currentX-=$(list[i]).width();
            }
            if(currentX<maxMove){
                currentX=maxMove;
            }else if(currentX>minMove){
                currentX=minMove;
            }
            addTransition(dom);
            setTranslateX(dom,currentX);

            //dom=dom[0];//jQ对象转为dom元素
            //监听滑屏开始,记录开始位置

            dom[0].addEventListener("touchstart", function (e) {

                startX= e.touches[0].clientX;
            });
            //监听滑屏移动,ul跟着移动
            dom[0].addEventListener("touchmove",function (e){
                moveX= e.touches[0].clientX;
                distanceX=moveX-startX;
                if((currentX+distanceX)>maxDis&&(currentX+distanceX)<minDis){
                    addTransition(dom);
                    setTranslateX(dom,currentX+distanceX);
                }
            });
            //监听滑屏结束,判断是否超出位置
            dom[0].addEventListener("touchend",function (e){
                if(currentX+distanceX<maxMove){
                    currentX=maxMove;
                }else if(currentX+distanceX>minMove){
                    currentX=minMove;
                }else{
                    currentX=currentX+distanceX
                }
                setTranslateX(dom,currentX);
            })

        }
    })




    /*添加过渡*/
    function addTransition(dom) {
        dom.css('transition', "all 0.2s");
    }
    /*删除过渡*/
    function removeTransition(dom) {
        dom.css('transition', "none");
    }
    /*设置偏移量*/
    function setTranslateX(dom, x) {
        dom.css('transform', "translateX(" + x + "px)");
    }


})


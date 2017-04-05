$(function(){
    cou($('.content'))
    function cou(dom,callback){
        $.ajax({
            url:"http://mmb.ittun.com/api/getcoupon",
            success: function (data) {
                var html=template('brands',data);
                dom.html(html);
            }
        })
    }
})
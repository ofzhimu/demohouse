$(function(){
    Pro($('.content'), $.getUrl('couponid'),
        function (mmm) {
            var html=template('products',mmm);
            console.log(mmm);
            this.html(html);
        }
    )
    function Pro(dom,couponid,callback){
        $.ajax({
            type:'get',
            url:"http://mmb.ittun.com/api/getcouponproduct",
            data:{'couponid':couponid},
            success: function (data) {
                callback.call(dom,data)
            }
        })
    }
})


//
//$.ajax({
//    url: "http://mmb.ittun.com/api/getdiscountproduct?"+window.location.href.split("?")[1],
//    dataType: 'jsonp',
//    jsonp: "callback",
//    success: function(data) {
//        var html = template('product', data);
//        $('.discount-product').html(html);
//    }
//});
var btn_right_scroll = document.getElementById("right_scroll");
var btn_left_scroll = document.getElementById("left_scroll");
var product_slider = document.getElementById("product_img_slider");

btn_right_scroll.addEventListener('click' , function(){
    product_slider.scrollBy({
        left: 540 ,
        behavior: "smooth"
    })
});

btn_left_scroll.addEventListener('click' , function(){
    product_slider.scrollBy({
        left: -540 ,
        behavior: "smooth"
    })
});
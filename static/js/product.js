var btn_right_scroll = document.getElementById("right_scroll");
var btn_left_scroll = document.getElementById("left_scroll");
var product_slider = document.getElementById("product_img_slider");
setInterval(function(){
    if(window.innerWidth >1440)
    {
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
    }
    else if(window.innerWidth <= 1440 && window.innerWidth >=1025)
    {
        btn_right_scroll.addEventListener('click' , function(){
            product_slider.scrollBy({
                left: 430 ,
                behavior: "smooth"
            })
        });

        btn_left_scroll.addEventListener('click' , function(){
            product_slider.scrollBy({
                left: -430 ,
                behavior: "smooth"
            })
        });
    }
} , 10);
    

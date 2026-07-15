var btn_right_scroll = document.getElementById("right_scroll");
var btn_left_scroll = document.getElementById("left_scroll");
var product_slider = document.getElementById("product_img_slider");
var btn_right_pro_con1 = document.getElementById("btn_right");
var btn_left_pro_con2 = document.getElementById("btn_left");
var product_container1 = document.getElementById("container1");

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
                left: 405 ,
                behavior: "smooth"
            })
        });

        btn_left_scroll.addEventListener('click' , function(){
            product_slider.scrollBy({
                left: -405 ,
                behavior: "smooth"
            })
        });
    }
    else if(window.innerWidth <= 1024 && window.innerWidth >=768)
    {
        btn_right_scroll.addEventListener('click' , function(){
            product_slider.scrollBy({
                left: 500 ,
                behavior: "smooth"
            })
        });

        btn_left_scroll.addEventListener('click' , function(){
            product_slider.scrollBy({
                left: -500 ,
                behavior: "smooth"
            })
        });
    }
    else if(window.innerWidth <= 767 && window.innerWidth >=480)
    {
        btn_right_scroll.addEventListener('click' , function(){
            product_slider.scrollBy({
                left: 432 ,
                behavior: "smooth"
            })
        });

        btn_left_scroll.addEventListener('click' , function(){
            product_slider.scrollBy({
                left: -432 ,
                behavior: "smooth"
            })
        });
    }
} , 10);

btn_right_pro_con1.addEventListener('click' , function(){
    product_container1.scrollBy({
        left: 120,
        behavior: "smooth"
    });
});

btn_left_pro_con2.addEventListener('click' , function(){
    product_container1.scrollBy({
        left: -120,
        behavior: "smooth"
    });
});
    

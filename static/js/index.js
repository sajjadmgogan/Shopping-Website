var search_button = document.getElementById("searchbutton");
var search_button_nav = document.getElementById("searchboxfooterimg");
var search_box = document.getElementById("searchbox");
var search_input = document.getElementById("searchinput");
var product_container1 = document.getElementById("container1");
var btn_right_pro_con1 = document.getElementById("btn_right");
var btn_left_pro_con2 = document.getElementById("btn_left");
var banner_slider = document.getElementById("banner_container");
var banners = document.querySelectorAll(".banner");
var menu_strip_btn = document.getElementById("menufooterimg");
var menu_strip = document.getElementById("menu_strip");
var styl = getComputedStyle(banners[0])
var widths = 0;
var current = 0;


setInterval(function(){
    widths = window.innerWidth;
    if(window.innerWidth>=1025 && window.innerWidth<=1440)
    {

        for(var i=0 ; i < (banners.length) ; i++)
        {
            banners[i].style.marginLeft = (widths - 800)/2 + "px";
            banners[i].style.marginRight = (widths - 800)/2 + "px";
        }
    }
    else if (window.innerWidth>1440)
    {
        for(var i=0 ; i < (banners.length) ; i++)
        {
            banners[i].style.marginLeft = (widths - 1200)/2 + "px";
            banners[i].style.marginRight = (widths - 1200)/2 + "px";
        }

    }
    else if(window.innerWidth>=768 && window.innerWidth<=1024)
    {
        for(var i=0 ; i < (banners.length) ; i++)
        {
            banners[i].style.marginLeft = (widths - 700)/2 + "px";
            banners[i].style.marginRight = (widths - 700)/2 + "px";
        }
    }
    else if(window.innerWidth>=480 && window.innerWidth<=767)
    {
        for(var i=0 ; i < (banners.length) ; i++)
        {
            banners[i].style.marginLeft = (widths - 400)/2 + "px";
            banners[i].style.marginRight = (widths - 400)/2 + "px";
        }
    }
},100)

menu_strip_btn.addEventListener('click' , function(){
    menu_strip.style.display = "flex";
})



search_button.addEventListener('click' , function(){
    search_box.style.display = 'block';
    search_input.focus();
});

search_button_nav.addEventListener('click' , function(){
    search_box.style.display = 'block';
    search_input.focus();
});

document.addEventListener("click", function(e){

    if(!search_box.contains(e.target) && !menu_strip.contains(e.target) && e.target !== search_button && e.target !== search_button_nav && e.target !== menu_strip_btn){

        search_box.style.display = "none";
        menu_strip.style.display = "none";

    }

});

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

setInterval(function(){
    current++;
        banner_slider.scrollTo({
            left: current * widths,
            behavior: "smooth"
    });
    if(current == (banners.length))
    {
            banner_slider.scrollTo({
                left: 0,
            });
        current = 0;
    }
},3000);

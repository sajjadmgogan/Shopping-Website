var search_button = document.getElementById("searchbutton");
var search_box = document.getElementById("searchbox");
var search_input = document.getElementById("searchinput");
var product_container1 = document.getElementById("container1");
var btn_right_pro_con1 = document.getElementById("btn_right")
var btn_left_pro_con2 = document.getElementById("btn_left")

search_button.addEventListener('click' , function(){
    search_box.style.display = 'block';
    search_input.focus();
});

search_input.addEventListener('blur' , function(){
    search_box.style.display = 'none';
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

var search_button = document.getElementById("searchbutton");
var search_button_nav = document.getElementById("searchboxfooterimg");
var search_box = document.getElementById("searchbox");
var search_input = document.getElementById("searchinput");
var menu_strip_btn = document.getElementById("menufooterimg");
var menu_strip = document.getElementById("menu_strip");

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
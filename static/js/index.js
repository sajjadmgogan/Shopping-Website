var search_button = document.getElementById("searchbutton");
var search_box = document.getElementById("searchbox");
var search_input = document.getElementById("searchinput");

search_button.addEventListener('click' , function(){
    search_box.style.display = 'block';
    search_input.focus();
});

search_input.addEventListener('blur' , function(){
    search_box.style.display = 'none';
});


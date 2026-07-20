var pages = document.getElementById("pages");
var backbtn = document.getElementById("back");
var nextbtn = document.getElementById("next");

var currentpage = 1;
var totalpage = 10;

function renderpagination()
{
    pages.innerHTML = "" ;

    var start = currentpage - 2;
    var end = currentpage + 2;

    if(start < 1)
    {
        start = 1;
        end = 5;
    }

    if(end > totalpage)
    {
        start = totalpage - 5;
        end = totalpage;
    }

    for(let i=start;i<=end;i++)
    {
        var button = document.createElement("button");
        button.textContent = i;
        button.style.width = 50 + "pxs";
        button.style.height = 50 + "px";
        button.addEventListener("click", function(){

            currentpage = i;

            renderpagination();

        });
        pages.appendChild(button);

        if(i == currentpage){

        button.style.backgroundColor = "blue";

        }
    }
}

nextbtn.addEventListener('click' , function(){
    if(currentpage < totalpage)
    {
        currentpage ++ ;

        renderpagination();
    }
});

backbtn.addEventListener('click' , function(){
    if(currentpage > 1)
    {
        currentpage -- ;

        renderpagination();
    }
});

renderpagination();

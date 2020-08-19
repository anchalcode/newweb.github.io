var a= 0;
show();

function show(){
    var i;
    var slide=document.getElementById("myslide");
    for(i=0;i<slide.length;i++)
    {
        slide[i].style.display ="none";
    }
    a++;
    if(a>slide.length)
    {
        a=1
    }
    slide[a-1].style.display="block";
    setTimeout(show,2000);
}
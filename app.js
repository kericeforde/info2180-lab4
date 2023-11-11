const search=document.querySelector(".btn");

search.addEventListener("click",function e(){
    const request=new XMLHttpRequest();
    request.onreadystatechange = function display(){
        if (request.readyState=== XMLHttpRequest.DONE && request.status===200){
            alert(request.responseText);
        }
    }
    request.open("GET","superheroes.php");
    request.send();

})
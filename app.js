const search=document.querySelector(".btn");
const request=new XMLHttpRequest();

search.addEventListener("click",function e(){
   
    request.onreadystatechange = function display(){
        if (request.readyState=== XMLHttpRequest.DONE && request.status===200){
            
            document.getElementById("result").innerHTML=request.responseText;
        }
    }
    request.open("GET","http://localhost/info2180-lab4/info2180-lab4/superheroes.php",true);
    request.send();

})
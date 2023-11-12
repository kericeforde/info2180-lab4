// Initializing variables.
const search=document.querySelector(".btn");
const request=new XMLHttpRequest();
const textform=document.querySelector("form");

//Adding action listener to the form. 
textform.addEventListener('submit',function(e){
e.preventDefault();

//Getting value from the textfield.
const text=document.getElementById("text").value;

//Using AJAX'S XMLHttpRequest to get information from the php file.
request.onreadystatechange = function display(){
        if (request.readyState=== XMLHttpRequest.DONE && request.status===200){
            //Adding results to a div.
            document.getElementById("result").innerHTML=request.responseText;
        }
    }
    request.open("GET",`superheroes.php? query=${text} `,true);
    request.send();

}


)
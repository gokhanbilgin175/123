const durum = "light";
const body = document.querySelector("body")

function mode(){

    if(durum == "light"){
       

        body.classList.remove("light")
        body.classList.add("dark")
        durum = "light";
    }
    else{
        body.classList.remove("dark")
        body.classList.add("light")
        durum = "light"        

    }




}
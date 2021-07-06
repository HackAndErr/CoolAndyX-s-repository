if(document.body.clientWidth < 481){

const menuBtn = document.querySelector(".menu-btn");
const menu = document.getElementById("menu");

menuBtn.addEventListener("click", function(){
    if(menu.classList.contains("show")){
        menu.classList.remove("show");
        menuBtn.innerHTML = "&#10005";
    }
    else{
           menu.classList.add("show")
    }
})

const navLinkBorder = document.createElement("div");
navLinkBorder.classList.add("active-border");
let selectedLink = document.querySelector(".header__selected-link");
selectedLink.append(navLinkBorder);
selectedLink.style.color = "#8D81AC";

function cleanColor(){
    for (key of document.getElementById("menu").children){
        key.style.color = "white";
    }
}

menu.addEventListener("mouseleave", function(){
    
    selectedLink.append(navLinkBorder);
    cleanColor();
    selectedLink.style.color = "#8D81AC";
})

menu.addEventListener("mousemove", function(event){
    event.target.append(navLinkBorder);
    cleanColor()
    
    event.target.style.color = "#8D81AC";
})



}

var plus=document.getElementById("addpopup")
var over=document.querySelector(".overlay")
var pop=document.querySelector(".popupbox")
plus.addEventListener("click",function(){
    over.style.display="block"
    pop.style.display="block"
})
var cancel=document.getElementById("cancel")
cancel.addEventListener("click",function(event){
    event.preventDefault()
    over.style.display="none"
    pop.style.display="none"

})
var container=document.querySelector(".container")
var addval=document.querySelector(".addip")
var bname=document.getElementById("bookinput")
var aname=document.getElementById("authorinput")
var description=document.getElementById("desinput")

addval.addEventListener("click",function(event){
    event.preventDefault()
    var div=document.createElement("div")
    div.setAttribute("class","bookcontainer")
    div.innerHTML=`<h3>${bname.value}</h3>
    <h5>${aname.value}</h5>
    <p>${description.value}</p>
    <button  id='del' onclick='del(event)'>Delete</button>` 
    container.append(div)
    over.style.display="none"
    pop.style.display="none"

})

// val del=document.getElementById("del")
function del(event){
    event.target.parentElement.remove()
}
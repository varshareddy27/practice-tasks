document.getElementsByTagName("nav")[0].firstElementChild.style.color="red"
//3)
document.getElementsByTagName("nav")[0].firstElementChild.style.color = "green"
document.getElementsByTagName("nav")[0].lastElementChild.style.color = "green"
//4)
Array.from(document.getElementsByTagName("li")).forEach((element) =>{
  element.style.background = "cyan";
})     

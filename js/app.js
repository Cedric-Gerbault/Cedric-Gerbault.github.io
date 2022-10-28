// nav variables
const sections = document.querySelectorAll(".anchor");
const navLi = document.querySelectorAll(".menu li");
const toggle = document.getElementById("menu-toggle");
const navCurrent = document.getElementById('current');
const dateSpans = document.querySelectorAll(".experiences_list--time span")
// parallax variables
var parallax = document.querySelectorAll(".background"),
speed = 0.05;

function init(){
  navLi.forEach(
    (li) =>{
      li.addEventListener("click",onClickMenuLink);
      
    }
  );
  
  dateSpans.forEach((span)=>{
    console.log(span)
    leftCalc = -45 - span.offsetWidth;
    span.style.left = leftCalc +"px";
  }
  );
};



window.onscroll = () => {
  var current = "";

//   bloc parallax
  [].slice.call(parallax).forEach(function(el){
  
    var scrollY = window.scrollY,
        elBackgrounPos = "50% -" + (scrollY * speed) + "px";

    el.style.backgroundPosition = elBackgrounPos;

  });

//bloc nav
  sections.forEach((a) => {
    const sectionTop = a.offsetParent.offsetTop;
    if (scrollY >= sectionTop - 100) {
      current = a.getAttribute("id"); 
      navLi.forEach((li)=>{
        console.log(li);
        if(li.innerHTML.includes(current)){
          li.classList.add("active")
        }
        else{
          li.classList.remove("active")
          }
        }
      );
    
    }
      navCurrent.textContent=current.toUpperCase();

  });

 
    
  

};

function onClickMenuLink(){

toggle.checked = false;

};

this.init();



  

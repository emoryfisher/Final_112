var contentEle = document.body.querySelector(".content");
var message = document.body.querySelector(".message");


function Keyboards(){
  contentEle.innerHTML="Build your own"
}

function about(){
  contentEle.innerHTML="About us page"
}

function Home(){
  contentEle.innerHTML="Home Page"
}

function Contact(){
  contentEle.innerHTML="Contact us Page"
}

function Mice(){
  contentEle.innerHTML="Customize your Own mouse"
}

document.body.querySelector(".miceButt").addEventListener("click", function(){
  Mice();
});

document.body.querySelector(".contactButt").addEventListener("click", function(){
  Contact();
});

document.body.querySelector(".homeButt").addEventListener("click", function(){
  Home();
});

document.body.querySelector(".keyButt").addEventListener("click", function(){
  Keyboards();
});

document.body.querySelector(".aboutButt").addEventListener("click", function(){
  about();
});
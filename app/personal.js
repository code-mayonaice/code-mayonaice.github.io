
function profile(){
 
  const profilepopup = document.querySelector('.popup-profile');
  profilepopup.classList.add('popup-active');

}


function projects(){

  const projectpopup = document.querySelector('.popup-projects');
  projectpopup.classList.add('popup-active');

}

function skills(){

  const skillstpopup = document.querySelector('.popup-skills');
  skillstpopup.classList.add('popup-active');

}


function contact(){

  const contactpopup = document.querySelector('.popup-contact');
  contactpopup.classList.add('popup-active');

}

function home(){


  const contactpopup = document.querySelector('.popup-contact');
  const skillstpopup = document.querySelector('.popup-skills');
  const projectpopup = document.querySelector('.popup-projects');
  const profilepopup = document.querySelector('.popup-profile');

   contactpopup.classList.remove('popup-active');
   skillstpopup.classList.remove('popup-active');
   projectpopup.classList.remove('popup-active');
   profilepopup.classList.remove('popup-active');

}


function resume(){

  const resumeholder = document.querySelector('.resume-holder');
  resumeholder.classList.add('resume-active');
  
}

function remove(){
 
  const profilepopup = document.querySelector('.popup-profile');
  const contactpopup = document.querySelector('.popup-contact');
  const skillstpopup = document.querySelector('.popup-skills');
  const projectpopup = document.querySelector('.popup-projects');
  

  profilepopup.classList.remove('popup-active'); 
  skillstpopup.classList.remove('popup-active'); 
  projectpopup.classList.remove('popup-active'); 
  contactpopup.classList.remove('popup-active'); 
 

}

function hamburger(){
  const hamburgernav = document.querySelector('.responsive-navbar-container');
  hamburgernav.classList.toggle('responisve-navbar-active');
}

function resumeremove(){
  const resumeholder = document.querySelector('.resume-holder');
  resumeholder.classList.remove('resume-active');
}




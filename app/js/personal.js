

//declarations 
 const popupcontainer = document.querySelectorAll('.popupcontainer');
 const profilepopup = document.querySelector('.popup-profile');
 const contactpopup = document.querySelector('.popup-contact');
 const skillstpopup = document.querySelector('.popup-skills');
 const projectpopup = document.querySelector('.popup-projects');
 const arrowselect = document.querySelectorAll('.arrow');





arrowselect.forEach(function(arrow){  // arrow button eventlistener
  arrow.addEventListener('click',()=>{

     if(arrow.classList.contains('profile')){
      profilepopup.classList.add('popup-active');
     }
     else if(arrow.classList.contains('projects')){
      projectpopup.classList.add('popup-active');
     }
     else if(arrow.classList.contains('contacts')){
      contactpopup.classList.add('popup-active');
     }
     else if(arrow.classList.contains('home')){

      profilepopup.classList.remove('popup-active');
      projectpopup.classList.remove('popup-active');
      contactpopup.classList.remove('popup-active');

     }

  });

});


const remover = document.querySelectorAll('.remover');

//loop through all x button and remove it

remover.forEach(function(remove){
   remove.addEventListener('click',()=>{
     
    if(remove.classList.contains('profile')){
      profilepopup.classList.remove('popup-active');
    }
    else if(remove.classList.contains('projects')){
      projectpopup.classList.remove('popup-active');
    }
    else if(remove.classList.contains('skills')){
     skillstpopup.classList.remove('popup-active');
    }
    else if(remove.classList.contains('contact')){
      contactpopup.classList.remove('popup-active');
    }
        
   });

});


//hamburger menu click event

const hamburger = document.querySelector('.hamburger');
const mobilenav = document.querySelector('.responsive-navbar-container');

hamburger.addEventListener('click',()=>{
   mobilenav.classList.toggle('responisve-navbar-active');
});


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







//popup projects declarations
const projectimage = document.querySelectorAll('.projects-box img');
const cancel = document.querySelectorAll('.cancel')
const projectsection = document.querySelectorAll('.project-section');
const opacity = document.querySelector('.opacity');




function popup(){
 
  projectimage[0].addEventListener('click',()=>{
     const fitness = document.querySelector('.fitness-project-popup');//firs image popup
     fitness.classList.add('project-section-active');
     opacity.style.display = "block"
  });

  projectimage[1].addEventListener('click',()=>{
    const footsanity = document.querySelector('.footsanity-project-popup');//second image popup
    footsanity.classList.add('project-section-active');
    opacity.style.display = "block"
 });

 projectimage[2].addEventListener('click',()=>{
  const realestate = document.querySelector('.realestate-project-popup');//second image popup
  realestate.classList.add('project-section-active');
  opacity.style.display = "block"
});


projectimage[3].addEventListener('click',()=>{
  const portfolio = document.querySelector('.portfolio-project-popup');//second image popup
  portfolio.classList.add('project-section-active');
  opacity.style.display = "block"
});


projectimage[4].addEventListener('click',()=>{
  const figma = document.querySelector('.figma-project-popup');//second image popup
  figma.classList.add('project-section-active');
  opacity.style.display = "block"
});
 
 
    
}

popup();

cancel.forEach(function(canc){  //loop through all projects and remove it
   canc.addEventListener('click',()=>{
    opacity.style.display = "none";
    projectsection.forEach(function(projectsec){
      projectsec.classList.remove('project-section-active');
    })
    
   });
});






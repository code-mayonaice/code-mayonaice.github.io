const profilearrow = document.querySelector('.arrow');
const profilepopup = document.querySelector('.popup-profile');
const projectpopup = document.querySelector('.popup-projects');
const projectarrow = document.querySelector('.projects-arrow');
const skillsarrow = document.querySelector('.skills-arrow');
const contactarrow = document.querySelector('.contact-arrow');
const popupskills = document.querySelector('.popup-skills');
const popupcontact = document.querySelector('.popup-contact');
const homearrow = document.querySelector('.home-arrow');
const resumeholder = document.querySelector('.resume-holder');

const profilenav = document.querySelector('.profilenav');
const projectnav = document.querySelector('.projectnav');
const skillnav = document.querySelector('.skillnav');
const contactnav = document.querySelector('.contactnav');

const profileremover = document.querySelector('.remover');
const projectremover = document.querySelector('.cancel');
const skillsremover = document.querySelector('.skillsremover');

const contactremover = document.querySelector('.contact-remover');
const resumeremover = document.querySelector('.resumeremover');


profilearrow.addEventListener('click',function(){
profilepopup.classList.add('popup-active');

});

projectarrow.addEventListener('click',function(){
     projectpopup.classList.add('popup-active');
});

  skillsarrow.addEventListener('click',function(){
    popupskills.classList.add('popup-active');
  });

contactarrow.addEventListener('click',function(){
  popupcontact.classList.add('popup-active');
});

  profilenav.addEventListener('click',function(){
    profilepopup.classList.add('popup-active');
  });
  
  projectnav.addEventListener('click',function(){
    projectpopup.classList.add('popup-active');
  });
  

  skillnav .addEventListener('click',function(){
    popupskills.classList.add('popup-active');
  });

  contactnav.addEventListener('click',function(){
    popupcontact.classList.add('popup-active');
  });

contactremover.addEventListener('click',function(){
  popupcontact.classList.remove('popup-active');

});

skillsremover.addEventListener('click',function(){
  popupskills.classList.remove('popup-active');
})

projectremover.addEventListener('click',function(){
  projectpopup.classList.remove('popup-active');
});

profileremover.addEventListener('click',function(){
  profilepopup.classList.remove('popup-active');

});

homearrow.addEventListener('click',function(){
  popupcontact.classList.remove('popup-active');
  popupskills.classList.remove('popup-active');
  projectpopup.classList.remove('popup-active');
  profilepopup.classList.remove('popup-active');
});

resumeremover.addEventListener('click',function(){
  resumeholder.classList.remove('resume-active');
  
});

function resume(){
  resumeholder.classList.add('resume-active');
  
}


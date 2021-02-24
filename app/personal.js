const profilearrow = document.querySelector('.arrow img');
const profilepopup = document.querySelector('.popup-profile');
const profileremover = document.querySelector('.remover');
const projectpopup = document.querySelector('.popup-projects');
const projectarrow = document.querySelector('.projects-arrow img');
const projectremover = document.querySelector('.cancel');


profilearrow.addEventListener('click',function(){
profilepopup.classList.add('popup-active');

});

profileremover.addEventListener('click',function(){
  profilepopup.classList.remove('popup-active');
});

projectarrow.addEventListener('click',function(){
     projectpopup.classList.add('popup-active');
});

 projectremover.addEventListener('click',function(){
    projectpopup.classList.remove('popup-active');
  });



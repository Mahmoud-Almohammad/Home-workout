'use strict';

let planForm = document.getElementById('planForm');
planForm.addEventListener('submit', drawPlan);

function drawPlan (event){
  event.preventDefault();

  // save the data in the localstorage
  let trainingDays = [];
  for(let i = 1; i <=7; i++){
    if(event.target[i].checked === true){
      trainingDays.push(event.target[i].name);
    }
  }
  saveToLocalStorage(trainingDays);

  // load the schedule page
  window.location.href = 'schedule.html';
}

function saveToLocalStorage (checkedValues){

  let userTrainingDays = JSON.stringify(checkedValues);
  localStorage.setItem('trainingDays', userTrainingDays);

  let minutes = JSON.stringify(document.getElementById('minutes').value);
  localStorage.setItem('trainingHours', minutes);


}

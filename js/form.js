'use strict';

let planForm = document.getElementById('planForm');
planForm.addEventListener('submit', drawPlan);

function drawPlan (event){
  event.preventDefault();
  console.log(event);
  // save the data in the localstorage
  let trainingDays = [];
  for(let i = 0; i < 7; i++){
    if(event.target[i].checked === true){
      trainingDays.push(event.target[i].name);
    }
  }
  let minutesTraining = event.target.minutes.value;
  saveToLocalStorage(trainingDays, minutesTraining);

  if(localStorage.userSchedule){
    localStorage.removeItem('userSchedule');
  }

  // load the schedule page
  window.location.href = 'schedule.html';

}

function saveToLocalStorage (checkedValues, minutesTraining){

  let userTrainingDays = JSON.stringify(checkedValues);
  localStorage.setItem('trainingDays', userTrainingDays);

  let minutes = JSON.stringify(minutesTraining);
  localStorage.setItem('trainingMinutes', minutes);


}

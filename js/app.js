'use strict';

let nonSchedule = document.getElementById('non-schedule');
nonSchedule.addEventListener('click', loadNonSchedulePage);

function loadNonSchedulePage(){
  window.location.href = 'non-schedule.html';
}

let form = document.getElementById('form');
form.addEventListener('click', loadSchedulePage);

function loadSchedulePage (){
  window.location.href = 'form.html';
}

'use strict';

let nonSchedule = document.getElementById('non-schedule');
nonSchedule.addEventListener('click', loadNonSchedulePage);

function loadNonSchedulePage(){
  window.location.href = 'non-schedule.html';
}

'use strict';

let popUpMessage = document.getElementById('popup');
let done = document.getElementById('done');

popUpMessage.addEventListener('DOMContentLoaded', loadMessage);

function loadMessage (){
  popUpMessage.style.display = 'block';
}

done.addEventListener('click', closeMessage);

function closeMessage (){
  popUpMessage.style.display = 'none';
}

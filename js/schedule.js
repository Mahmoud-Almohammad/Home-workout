'use strict';

let training = localStorage.getItem('trainingDays');
let trainingDaysList = JSON.parse(training);

let trainingMinutes = localStorage.getItem('trainingminutes');
let trainingMinutesObj = JSON.parse(trainingMinutes);

function Exercises (name, des, gif){
  this.name = name;
  this.time = null;
  this.des = des;
  this.gif = gif;
}

let pushUps = new Exercises ('Pushups', 'Pushups are a type of bodyweight exercise that targets the muscles in your chest, shoulders, and triceps.', 'https://media.tenor.com/gI-8qCUEko8AAAAM/pushup.gif');
pushUps.quantity = null;

let bridge = new Exercises ('Bridge', 'The bridge exercise is a type of strength training exercise that targets the muscles in your glutes, hamstrings, and lower back.', 'https://media.tenor.com/i5B_Un9s7woAAAAC/glute-bridge-exercise.gif');
bridge.quantity = null;

let lunges = new Exercises ('Lunges', 'Challenging your balance is an essential part of a well-rounded exercise routine.Lunges do just that, promoting functional movement while also increasing strength in your legs and glutes.', 'https://thumbs.gfycat.com/BeneficialMildBlackmamba-size_restricted.gif');
lunges.quantity = null;

let squats = new Exercises ('Squats', 'Squats enhance leg strength and can improve stability, flexibility, mobility, athletic performance, bone density, and posture.', 'https://post.greatist.com/wp-content/uploads/sites/2/2019/05/CREATE-YOUR-OWN-WORKOUT_SQUAT.gif');
squats.quantity = null;

let plank = new Exercises ('Plank', 'Planks are a bodyweight exercise that target the muscles in the core and can improve core strength, stability, posture, muscle endurance, and athletic performance.', 'http://blog.healthadvocate.com/wp-content/uploads/2014/10/179105937.jpg');

let plankToDownwardDog = new Exercises ('Plank to Downward Dog', 'This move will test your upper body, especially your shoulders. Who says you need weights for a shoulder workout?', 'https://d24bnpykhxwj9p.cloudfront.net/s3file/s3fs-public/users1/2017-06/Thu/giphy%20%2823%29.gif');
plankToDownwardDog.quantity = null;

let sitUps = new Exercises ('Sit-ups', 'Sit-up exercises are a type of strength training exercise that target the muscles of the abdomen and hip flexors.', 'https://i.pinimg.com/originals/0f/52/d6/0f52d6c8f62e75bace5f4fe3f9480fb0.gif');
sitUps.quantity = null;

let rightLegLunge = new Exercises ('Right leg lunge', 'The right leg lunge is a lower body strength and mobility exercise that targets the muscles of the thighs and buttocks(you can optionaly hold a damble with your hands).', 'https://bod-blog-assets.prod.cd.beachbodyondemand.com/bod-blog/wp-content/uploads/2016/07/29125218/forward-lunge-dumbbell-man.jpg');

let leftLegLunge = new Exercises ('Left leg lunge', 'The left leg lunge is a lower body strength and mobility exercise that targets the muscles of the thighs and buttocks.', 'https://media.gq.com/photos/58cea505ca736630b4720a83/4:3/w_1776,h_1332,c_limit/2017-03_GQ-Lunges_3x2.jpg');

let vUps = new Exercises ('V-Ups', 'V-ups, also known as "v-sit ups," are an advanced abdominal exercise that involves both upper and lower body movement.', 'https://thumbs.gfycat.com/MelodicTartErin-size_restricted.gif');

let highKnees = new Exercises ('High Knees', 'High knees is a cardio exercise that involves alternating between running in place and lifting your knees up high towards your chest.', 'https://media3.giphy.com/media/62aGqZoUJYtPsl0Hb0/giphy.gif');

let superman = new Exercises ('Superman', 'The Superman exercise is a bodyweight exercise that targets the muscles of the back, including the erector spinae, lats, and glutes.', 'https://www.healthier.qld.gov.au/wp-content/uploads/2015/07/02_M_WIP02.gif');

let allExercises = [pushUps, bridge, lunges, squats, plank, plankToDownwardDog, sitUps, rightLegLunge, leftLegLunge, vUps, highKnees, superman];

function check (){
  for (let i = 0; i < allExercises.length; i++){
    // eslint-disable-next-line no-prototype-builtins
    if (allExercises[i].hasOwnProperty('quantity')){
      allExercises[i].time = '15 minutes (do the much that you can then take a break for 1 minute then continue like this until the 15 minutes is done)';
    } else{
      allExercises[i].time = '15 minutes (do it for 1 minute then take a break for 1 minute then continue like this until the 15 minutes is done)';
    }
  }
}

check();

let content = {
  day: trainingDaysList,
  exName: [],
  exTime: [],
  exDes: [],
  exGif: [],
};

let exercisesContent = document.getElementById('content');
let randomTemplate;

let render =  function (){
  let spamIndex = [];
  for (let i = 0; i < trainingDaysList.length; i++){
    let days = document.createElement('h2');
    days.textContent = trainingDaysList[i];
    exercisesContent.appendChild(days);

    if (trainingMinutesObj){
      for(let j = 0; j < trainingMinutesObj; j = j + 15){
        do {
          randomTemplate = randomIndex();
        } while (spamIndex.includes(randomTemplate));
        spamIndex.push(randomTemplate);

        let exerciseName = document.createElement('h3');
        exerciseName.textContent = allExercises[randomTemplate].name;
        exercisesContent.appendChild(exerciseName);
        content.exName.push(exerciseName.innerHTML);

        let exerciseTime = document.createElement('p');
        exerciseTime.textContent = allExercises[randomTemplate].time;
        exercisesContent.appendChild(exerciseTime);
        content.exTime.push(exerciseTime.innerHTML);

        let exerciseDes = document.createElement('p');
        exerciseDes.textContent = allExercises[randomTemplate].des;
        exercisesContent.appendChild(exerciseDes);
        content.exDes.push(exerciseDes.innerHTML);

        let exerciseGif = document.createElement('img');
        exerciseGif.setAttribute('src', allExercises[randomTemplate].gif);
        exercisesContent.appendChild(exerciseGif);
        content.exGif.push(exerciseGif.src);
      }
    }
    spamIndex = [];
  }
  localStorage.setItem('userSchedule', JSON.stringify(content));
};

function reRender(){
  let getData =  localStorage.getItem('userSchedule');
  let userScheduleObj = JSON.parse(getData);
  for (let i = 0; i < userScheduleObj.day.length; i++){
    let renderDays = document.createElement('h2');
    renderDays.textContent = userScheduleObj.day[i];
    exercisesContent.appendChild(renderDays);

    let startIndex = i * userScheduleObj.exName.length / userScheduleObj.day.length;
    let endIndex = (i + 1) * userScheduleObj.exName.length / userScheduleObj.day.length;

    for(let j = startIndex; j < endIndex; j++){
      let renderName = document.createElement('h3');
      renderName.textContent = userScheduleObj.exName[j];
      exercisesContent.appendChild(renderName);

      let renderTime = document.createElement('p');
      renderTime.textContent = userScheduleObj.exTime[j];
      exercisesContent.appendChild(renderTime);

      let renderDes = document.createElement('p');
      renderDes.textContent = userScheduleObj.exDes[j];
      exercisesContent.appendChild(renderDes);

      let renderGif = document.createElement('img');
      renderGif.src = userScheduleObj.exGif[j];
      exercisesContent.appendChild(renderGif);
    }
  }
}

if(localStorage.getItem('userSchedule')){
  reRender();
} else{
  render();
}



function randomIndex (){
  return Math.floor(Math.random() * allExercises.length);
}

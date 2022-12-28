'use strict';

let training = localStorage.getItem('trainingDays');
let trainingDaysList = JSON.parse(training);

function QuanExercises (name, des, gif){
  this.name = name;
  this.time = '15 minutes (do the much that you can then take a break for 1 minute then continue like this until the 15 minutes is done)';
  this.des = des;
  this.gif = gif;
}

function TimingExercises (name, des, gif){
  this.name = name;
  this.time = '15 minutes (do it for 1 minute then take a break for 1 minute then continue like this until the 15 minutes is done)';
  this.des = des;
  this.gif = gif;
}


let pushUps = new QuanExercises ('Pushups', 'Pushups are a type of bodyweight exercise that targets the muscles in your chest, shoulders, and triceps.', 'https://media.tenor.com/gI-8qCUEko8AAAAM/pushup.gif');

let bridge = new QuanExercises ('Bridge', 'The bridge exercise is a type of strength training exercise that targets the muscles in your glutes, hamstrings, and lower back.', 'https://media.tenor.com/i5B_Un9s7woAAAAC/glute-bridge-exercise.gif');

let lunges = new QuanExercises ('Lunges', 'Challenging your balance is an essential part of a well-rounded exercise routine.Lunges do just that, promoting functional movement while also increasing strength in your legs and glutes.', 'https://thumbs.gfycat.com/BeneficialMildBlackmamba-size_restricted.gif');

let squats = new QuanExercises ('Squats', 'Squats enhance leg strength and can improve stability, flexibility, mobility, athletic performance, bone density, and posture.', 'https://post.greatist.com/wp-content/uploads/sites/2/2019/05/CREATE-YOUR-OWN-WORKOUT_SQUAT.gif');

let plank = new TimingExercises ('Plank', 'Planks are a bodyweight exercise that target the muscles in the core and can improve core strength, stability, posture, muscle endurance, and athletic performance.', 'http://blog.healthadvocate.com/wp-content/uploads/2014/10/179105937.jpg');

let plankToDownwardDog = new QuanExercises ('Plank to Downward Dog', 'This move will test your upper body, especially your shoulders. Who says you need weights for a shoulder workout?', 'https://d24bnpykhxwj9p.cloudfront.net/s3file/s3fs-public/users1/2017-06/Thu/giphy%20%2823%29.gif');

let sitUps = new QuanExercises ('Sit-ups', 'Sit-up exercises are a type of strength training exercise that target the muscles of the abdomen and hip flexors.', 'https://i.pinimg.com/originals/0f/52/d6/0f52d6c8f62e75bace5f4fe3f9480fb0.gif');

let rightLegLunge = new TimingExercises ('Right leg lunge', 'Sure! The right leg lunge is a lower body strength and mobility exercise that targets the muscles of the thighs and buttocks(you can optionaly hold a damble with your hands).', 'https://bod-blog-assets.prod.cd.beachbodyondemand.com/bod-blog/wp-content/uploads/2016/07/29125218/forward-lunge-dumbbell-man.jpg');

let leftLegLunge = new TimingExercises ('Left leg lunge', 'The left leg lunge is a lower body strength and mobility exercise that targets the muscles of the thighs and buttocks.', 'https://media.gq.com/photos/58cea505ca736630b4720a83/4:3/w_1776,h_1332,c_limit/2017-03_GQ-Lunges_3x2.jpg');

let vUps = new TimingExercises ('V-Ups', 'V-ups, also known as "v-sit ups," are an advanced abdominal exercise that involves both upper and lower body movement.', 'https://thumbs.gfycat.com/MelodicTartErin-size_restricted.gif');

let highKnees = new TimingExercises ('High Knees', 'High knees is a cardio exercise that involves alternating between running in place and lifting your knees up high towards your chest.', 'https://media3.giphy.com/media/62aGqZoUJYtPsl0Hb0/giphy.gif');

let superman = new TimingExercises ('Superman', 'The Superman exercise is a bodyweight exercise that targets the muscles of the back, including the erector spinae, lats, and glutes.', 'https://hips.hearstapps.com/hmg-prod/images/workouts/2016/08/supermanpullup-1472153970.gif');

let allExercises = [pushUps, bridge, lunges, squats, plank, plankToDownwardDog, sitUps, rightLegLunge, leftLegLunge, vUps, highKnees, superman];

function randomTemplate (){
  return Math.floor(Math.random() * allExercises.length);
}

import Player from '@vimeo/player';

import throttle from 'lodash.throttle';

// var throttle = require('lodash.throttle');

const iframe = document.querySelector('iframe'); //! Getting Started

// console.log(iframe);

const player = new Player(iframe); //! Getting Started

// TODO ===========================================================
// player.on('play', function() {
//     console.log('played the video!');
// });

// player.getVideoTitle().then(function(title) {
//     console.log('title:', title);
// });
// TODO ===========================================================

//! Работает!

//! old ++++++++++++++++++++++++++++++++++++ (без throttle)
// player.on('timeupdate', function (timeupdate) {

//         console.log('timeupdate:', timeupdate);
//         console.log('timeupdate.seconds:', timeupdate.seconds);
//         console.log('timeupdate.percent:', timeupdate.percent);
//         console.log('timeupdate.duration:', timeupdate.duration);

//     // const t = timeupdate.seconds
//     // localStorage.setItem("videoplayer-current-time", JSON.stringify(t));
//     localStorage.setItem('videoplayer-current-time', timeupdate.seconds);
//     console.log(Number(localStorage.getItem("videoplayer-current-time")));
// });
//! old ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// throttle(player.on('timeupdate', timeUpdate), 1000); //! НЕ РАБОТАЕТ!!! (с throttle)

// player.on('timeupdate', timeUpdate); //* РАБОТАЕТ!!! (без throttle)

player.on('timeupdate', throttle(timeUpdate, 1000)); //* РАБОТАЕТ!!! (с throttle)

function timeUpdate(timeupdate) {
  // console.log('timeupdate:', timeupdate);
  // console.log('timeupdate.seconds:', timeupdate.seconds);
  // console.log('timeupdate.percent:', timeupdate.percent);
  // console.log('timeupdate.duration:', timeupdate.duration);

  localStorage.setItem('videoplayer-current-time', timeupdate.seconds);

  //! Консолит currentTimePlayer:
  console.log(Number(localStorage.getItem('videoplayer-current-time')));
}

//! Save to currentTimePlayer => localStorage:
let currentTimePlayer = Number(
  localStorage.getItem('videoplayer-current-time')
);

//! возобновляет воспроизведение с сохраненной позиции = currentTimePlayer:
player.setCurrentTime(currentTimePlayer);

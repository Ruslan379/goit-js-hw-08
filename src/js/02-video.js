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
    
//     const t = timeupdate.seconds
//     localStorage.setItem("videoplayer-current-time", JSON.stringify(t));
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
    
    const t = timeupdate.seconds;
    localStorage.setItem("videoplayer-current-time", JSON.stringify(t));
        
    console.log(Number(localStorage.getItem("videoplayer-current-time")));
};



//! Save to localStorage => currentTime:
let currentTime = Number(localStorage.getItem("videoplayer-current-time"))


player.setCurrentTime(currentTime).then(function(seconds) {
    // seconds = the actual time that the player seeked to
}).catch(function(error) {
    switch (error.name) {
        case 'RangeError':
            // the time was less than 0 or greater than the video’s duration
            break;

        default:
            // some other error occurred
            break;
    }
});


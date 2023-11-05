// Carousel Image
const carousel = document.querySelector("#default-carousel");
const items = carousel.querySelectorAll("[data-carousel-item]");
const prevButton = carousel.querySelector("[data-carousel-prev]");
const nextButton = carousel.querySelector("[data-carousel-next]");
const indicators = carousel.querySelectorAll("[data-carousel-slide-to]");

let activeIndex = 0;
let intervalId = null;

const showSlide = (index) => {
    items.forEach((item, i) => {
        if (i === index) {
            item.classList.remove("hidden");
            item.classList.add("duration-700");
        } else {
            item.classList.add("hidden");
            item.classList.remove("duration-700");
        }
    });

    indicators.forEach((indicator, i) => {
        if (i === index) {
            indicator.setAttribute("aria-current", "true");
        } else {
            indicator.setAttribute("aria-current", "false");
        }
    });
};

const showNextSlide = () => {
    activeIndex = (activeIndex + 1) % items.length;
    showSlide(activeIndex);
};

const startCarousel = () => {
    intervalId = setInterval(showNextSlide, 3000);
};

const stopCarousel = () => {
    clearInterval(intervalId);
};

prevButton.addEventListener("click", () => {
    activeIndex = (activeIndex - 1 + items.length) % items.length;
    showSlide(activeIndex);
    stopCarousel();
});

nextButton.addEventListener("click", () => {
    showNextSlide();
    stopCarousel();
});

indicators.forEach((indicator, index) => {
    indicator.addEventListener("click", () => {
        activeIndex = index;
        showSlide(activeIndex);
        stopCarousel();
    });
});

carousel.addEventListener("mouseover", stopCarousel);
carousel.addEventListener("mouseout", startCarousel);

showSlide(activeIndex);
startCarousel();

let isLightOn = false;
let audio = document.getElementById("backgroundMusic");

audio.addEventListener("ended", function () {
  this.currentTime = 0; // Mengatur ulang waktu pemutaran ke awal
  this.play(); // Memulai pemutaran ulang audio
});

function setBodyBackground(imageUrl) {
  document.body.style.backgroundImage = `url(${imageUrl})`;
  document.body.style.backgroundSize = "cover";
  document.body.style.backgroundRepeat = "no-repeat";
}

function turnOnLight() {
  isLightOn = true; // Set isLightOn to true
  setBodyBackground("media/background/bg7.jpeg");
  document.getElementById("welcomeText").style.display = "none";
  document.getElementById("lightButton").style.display = "none";
  document.getElementById("pembuka").style.display = "block";
  runConfetti1();
}

function changeBackgroundAndDisplayNext(bgImage, currentCard, nextCard, playAudio = false) {
  setBodyBackground(bgImage);
  document.getElementById(currentCard).style.display = "none";
  document.getElementById(nextCard).style.display = "block";
  if (playAudio && audio.paused) {
    audio.play();
  }
}

function pembuka() {
  changeBackgroundAndDisplayNext("media/background/bg7.jpeg", "pembuka", "card1");
  runConfetti1();
}

function jelajah1() {
  changeBackgroundAndDisplayNext("media/background/bg5.jpeg", "card1", "card2");
  runConfetti1();
}

function jelajah2() {
  changeBackgroundAndDisplayNext("media/background/bg7.jpeg", "card2", "selamat", true);
  runConfetti1();
}

function jelajah3() {
  changeBackgroundAndDisplayNext("media/background/bg7.jpeg", "card2", "selamat");
  runConfetti1();
}

function selamat() {
  changeBackgroundAndDisplayNext("media/background/bg2.jpeg", "selamat", "card3");
  runConfetti7();
  runConfetti1();
}

function jelajah4() {
  changeBackgroundAndDisplayNext("media/background/bg1.jpeg", "card3", "card4");
  runConfetti5();
  runConfetti1();
}

function jelajah5() {
  changeBackgroundAndDisplayNext("media/background/bg16.jpeg", "card4", "card5");
  runConfetti1();
}

function terimakasih() {
  changeBackgroundAndDisplayNext("media/background/bg6.jpeg", "card5", "terimakasih");
  runConfetti1();
}

function jelajah6() {
  changeBackgroundAndDisplayNext("media/background/bg19.jpeg", "terimakasih", "card6");
  runConfetti1();
}

function jelajah7() {
  changeBackgroundAndDisplayNext("media/background/bg8.jpeg", "card6", "card7");
  runConfetti1();
}

function jelajah8() {
  changeBackgroundAndDisplayNext("media/background/bg9.jpeg", "card7", "card8");
  runConfetti1();
}

function maaf() {
  changeBackgroundAndDisplayNext("media/background/bg10.jpeg", "card8", "maaf");
  runConfetti1();
}

function jelajah9() {
  changeBackgroundAndDisplayNext("media/background/bg2.jpeg", "maaf", "card9");
  runConfetti1();
}

function penutup() {
  changeBackgroundAndDisplayNext("media/background/bg11.jpeg", "card9", "penutup");
  runConfetti1();
}

function jelajah10() {
  changeBackgroundAndDisplayNext("media/background/bg12.jpeg", "penutup", "card10");
  runConfetti1();
}

function jelajah11() {
  changeBackgroundAndDisplayNext("media/background/bg18.jpeg", "card10", "card11");
  runConfetti1();
}

function jelajah12() {
  changeBackgroundAndDisplayNext("media/background/bg12.jpeg", "card11", "card12");
  runConfetti1();
}

function jelajah13() {
  changeBackgroundAndDisplayNext("media/background/bg6.jpeg", "card12", "card13");
  runConfetti1();
}

// confetti 1
function runConfetti1() {
  var duration = 25 * 1000;
  var animationEnd = Date.now() + duration;
  var skew = 1;

  function randomInRange(min, max) {
    return Math.random() * (max - min) + min;
  }

  (function frame() {
    var timeLeft = animationEnd - Date.now();
    var ticks = Math.max(200, 500 * (timeLeft / duration));
    skew = Math.max(0.8, skew - 0.001);

    confetti({
      particleCount: 1,
      startVelocity: 0,
      ticks: ticks,
      origin: {
        x: Math.random(),
        // since particles fall down, skew start toward the top
        y: Math.random() * skew - 0.2,
      },
      colors: ["#ffffff"],
      shapes: ["circle"],
      gravity: randomInRange(0.4, 0.6),
      scalar: randomInRange(0.4, 1),
      drift: randomInRange(-0.4, 0.4),
    });

    if (timeLeft > 0) {
      requestAnimationFrame(frame);
    }
  })();
}

// confetti 2 - Basic Cannon
function runConfetti2() {
  confetti({
    particleCount: 100,
    spread: 70,
    origin: { y: 0.6 }
  });
}

// confetti 3 -Random Direction
function runConfetti3() {
  function randomInRange(min, max) {
    return Math.random() * (max - min) + min;
  }
  
  confetti({
    angle: randomInRange(55, 125),
    spread: randomInRange(50, 70),
    particleCount: randomInRange(50, 100),
    origin: { y: 0.6 }
  });
}

// confetti 4 - Realistic Look
function runConfetti4() {
  var count = 200;
  var defaults = {
    origin: { y: 0.7 }
  };

  function fire(particleRatio, opts) {
    confetti({
      ...defaults,
      ...opts,
      particleCount: Math.floor(count * particleRatio)
    });
  }

  fire(0.25, {
    spread: 26,
    startVelocity: 55,
  });
  fire(0.2, {
    spread: 60,
  });
  fire(0.35, {
    spread: 100,
    decay: 0.91,
    scalar: 0.8
  });
  fire(0.1, {
    spread: 120,
    startVelocity: 25,
    decay: 0.92,
    scalar: 1.2
  });
  fire(0.1, {
    spread: 120,
    startVelocity: 45,
  });
}

// confetti 5 - Fireworks
function runConfetti5() {
  var duration = 15 * 1000;
  var animationEnd = Date.now() + duration;
  var defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };

  function randomInRange(min, max) {
    return Math.random() * (max - min) + min;
  }

  var interval = setInterval(function() {
    var timeLeft = animationEnd - Date.now();

    if (timeLeft <= 0) {
      return clearInterval(interval);
    }

    var particleCount = 50 * (timeLeft / duration);
    // since particles fall down, start a bit higher than random
    confetti({ ...defaults, particleCount, origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 } });
    confetti({ ...defaults, particleCount, origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 } });
  }, 250);
}

// confetti 6 - Stars
function runConfetti6() {
  var defaults = {
    spread: 360,
    ticks: 50,
    gravity: 0,
    decay: 0.94,
    startVelocity: 30,
    colors: ['FFE400', 'FFBD00', 'E89400', 'FFCA6C', 'FDFFB8']
  };
  
  function shoot() {
    confetti({
      ...defaults,
      particleCount: 40,
      scalar: 1.2,
      shapes: ['star']
    });
  
    confetti({
      ...defaults,
      particleCount: 10,
      scalar: 0.75,
      shapes: ['circle']
    });
  }
  
  setTimeout(shoot, 0);
  setTimeout(shoot, 100);
  setTimeout(shoot, 200);
}

// confetti 7 - School Pride
function runConfetti7() {
  var end = Date.now() + (15 * 1000);

  // go Buckeyes!
  var colors = ['#bb0000', '#ffffff'];

  (function frame() {
    confetti({
      particleCount: 2,
      angle: 60,
      spread: 55,
      origin: { x: 0 },
      colors: colors
    });
    confetti({
      particleCount: 2,
      angle: 120,
      spread: 55,
      origin: { x: 1 },
      colors: colors
    });

    if (Date.now() < end) {
      requestAnimationFrame(frame);
    }
  }());
}

// confetti 8 - Custom Shapes
function runConfetti8() {
  // note: you CAN only use a path for confetti.shapeFrompath(), but for
  // performance reasons it is best to use it once in development and save
  // the result to avoid the performance penalty at runtime

  // pumpkin shape from https://thenounproject.com/icon/pumpkin-5253388/
  var pumpkin = confetti.shapeFromPath({
    path: 'M449.4 142c-5 0-10 .3-15 1a183 183 0 0 0-66.9-19.1V87.5a17.5 17.5 0 1 0-35 0v36.4a183 183 0 0 0-67 19c-4.9-.6-9.9-1-14.8-1C170.3 142 105 219.6 105 315s65.3 173 145.7 173c5 0 10-.3 14.8-1a184.7 184.7 0 0 0 169 0c4.9.7 9.9 1 14.9 1 80.3 0 145.6-77.6 145.6-173s-65.3-173-145.7-173zm-220 138 27.4-40.4a11.6 11.6 0 0 1 16.4-2.7l54.7 40.3a11.3 11.3 0 0 1-7 20.3H239a11.3 11.3 0 0 1-9.6-17.5zM444 383.8l-43.7 17.5a17.7 17.7 0 0 1-13 0l-37.3-15-37.2 15a17.8 17.8 0 0 1-13 0L256 383.8a17.5 17.5 0 0 1 13-32.6l37.3 15 37.2-15c4.2-1.6 8.8-1.6 13 0l37.3 15 37.2-15a17.5 17.5 0 0 1 13 32.6zm17-86.3h-82a11.3 11.3 0 0 1-6.9-20.4l54.7-40.3a11.6 11.6 0 0 1 16.4 2.8l27.4 40.4a11.3 11.3 0 0 1-9.6 17.5z',
    matrix: [0.020491803278688523, 0, 0, 0.020491803278688523, -7.172131147540983, -5.9016393442622945]
  });
  // tree shape from https://thenounproject.com/icon/pine-tree-1471679/
  var tree = confetti.shapeFromPath({
    path: 'M120 240c-41,14 -91,18 -120,1 29,-10 57,-22 81,-40 -18,2 -37,3 -55,-3 25,-14 48,-30 66,-51 -11,5 -26,8 -45,7 20,-14 40,-30 57,-49 -13,1 -26,2 -38,-1 18,-11 35,-25 51,-43 -13,3 -24,5 -35,6 21,-19 40,-41 53,-67 14,26 32,48 54,67 -11,-1 -23,-3 -35,-6 15,18 32,32 51,43 -13,3 -26,2 -38,1 17,19 36,35 56,49 -19,1 -33,-2 -45,-7 19,21 42,37 67,51 -19,6 -37,5 -56,3 25,18 53,30 82,40 -30,17 -79,13 -120,-1l0 41 -31 0 0 -41z',
    matrix: [0.03597122302158273, 0, 0, 0.03597122302158273, -4.856115107913669, -5.071942446043165]
  });
  // heart shape from https://thenounproject.com/icon/heart-1545381/
  var heart = confetti.shapeFromPath({
    path: 'M167 72c19,-38 37,-56 75,-56 42,0 76,33 76,75 0,76 -76,151 -151,227 -76,-76 -151,-151 -151,-227 0,-42 33,-75 75,-75 38,0 57,18 76,56z',
    matrix: [0.03333333333333333, 0, 0, 0.03333333333333333, -5.566666666666666, -5.533333333333333]
  });

  var defaults = {
    scalar: 2,
    spread: 180,
    particleCount: 30,
    origin: { y: -0.1 },
    startVelocity: -35
  };

  confetti({
    ...defaults,
    shapes: [pumpkin],
    colors: ['#ff9a00', '#ff7400', '#ff4d00']
  });
  confetti({
    ...defaults,
    shapes: [tree],
    colors: ['#8d960f', '#be0f10', '#445404']
  });
  confetti({
    ...defaults,
    shapes: [heart],
    colors: ['#f93963', '#a10864', '#ee0b93']
  });
}

// confetti 9 - Emoji
function runConfetti9() {
  var scalar = 2;
  var unicorn = confetti.shapeFromText({ text: '🦄', scalar });

  var defaults = {
    spread: 360,
    ticks: 60,
    gravity: 0,
    decay: 0.96,
    startVelocity: 20,
    shapes: [unicorn],
    scalar
  };

  function shoot() {
    confetti({
      ...defaults,
      particleCount: 30
    });

    confetti({
      ...defaults,
      particleCount: 5,
      flat: true
    });

    confetti({
      ...defaults,
      particleCount: 15,
      scalar: scalar / 2,
      shapes: ['circle']
    });
  }

  setTimeout(shoot, 0);
  setTimeout(shoot, 100);
  setTimeout(shoot, 200);
}

// confetti 10 - Custom Canvas
function runConfetti10() {
  var canvas = document.getElementById('my-canvas');

  // you should  only initialize a canvas once, so save this function
  // we'll save it to the canvas itself for the purpose of this demo
  canvas.confetti = canvas.confetti || confetti.create(canvas, { resize: true });

  canvas.confetti({
    spread: 70,
    origin: { y: 1.2 }
  });
}


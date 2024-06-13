
document.addEventListener('DOMContentLoaded', function() {
    const playPauseBtn = document.getElementById('playPauseBtn');
    const songName = document.getElementById('songName');
    const defaultSongURL = 'sound.mp3'; 
    let audio = new Audio(defaultSongURL);
    let isPlaying = true;

    playPauseBtn.addEventListener('click', function() {
        if (isPlaying) {
            audio.pause();
            playPauseBtn.textContent = 'Play';
        } else {
            audio.play();
            playPauseBtn.textContent = 'Pause';
        }
        isPlaying = !isPlaying;
    });

    // Pixi.js setup
    const canvas = document.getElementById('pixi-canvas');
    const app = new PIXI.Application({
        view: canvas,
        width: window.innerWidth,
        height: window.innerHeight,
        backgroundColor: 0xcccccc
    });

    const particles = [];
    const particleCount = 100;
    const particleTexture = PIXI.Texture.from('https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg'); // JavaScript icon

    for (let i = 0; i < particleCount; i++) {
        const particle = new PIXI.Sprite(particleTexture);
        particle.anchor.set(0.5);
        resetParticle(particle);
        app.stage.addChild(particle);
        particles.push(particle);
    }

    function resetParticle(particle) {
        particle.x = Math.random() * app.screen.width;
        particle.y = Math.random() * app.screen.height;
        particle.scale.set(0.1 + Math.random() * 0.3);
        particle.alpha = 0.5 + Math.random() * 0.5;
        particle.speed = 1 + Math.random() * 3;
        particle.rotationSpeed = 0.01 + Math.random() * 0.05;
    }

    function animateParticles(delta) {
        for (let particle of particles) {
            particle.y += particle.speed * delta;
            particle.rotation += particle.rotationSpeed * delta;
            if (particle.y > app.screen.height) {
                resetParticle(particle);
                particle.y = -particle.height;
            }
        }
    }

    audio.addEventListener('play', function() {
        app.ticker.add(animateParticles);
    });

    audio.addEventListener('pause', function() {
        app.ticker.remove(animateParticles);
    });

   
    audio.play().then(() => {
        playPauseBtn.textContent = 'Pause';
        songName.textContent = 'Listen to my CV and contact information'; 
        app.ticker.add(animateParticles);
    }).catch(error => {
        console.error('Error playing the audio:', error);
        playPauseBtn.textContent = 'Play';
    });
});

// pixi slider
 const images = ["https://images.pexels.com/photos/577585/pexels-photo-577585.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load", "https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", "https://images.pexels.com/photos/270557/pexels-photo-270557.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load","https://images.pexels.com/photos/270557/pexels-photo-270557.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load","https://images.pexels.com/photos/270408/pexels-photo-270408.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"];
const texts = [["PROGRAMMING"], ["ENGINEER"], ["SOFTWARE"], ["DEVELOPER"]];

rgbKineticSlider = new rgbKineticSlider({
    slideImages: images,
    itemsTitles: texts,

      backgroundDisplacementSprite:
        images,
    cursorDisplacementSprite:
        images,
    cursorScaleIntensity: 0.6,
    cursorMomentum: 0.14,

    swipe: true,
    swipeDistance: window.innerWidth * 0.4,
    swipeScaleIntensity: 2,

    slideTransitionDuration: 0.8,
    transitionScaleIntensity: 30,
    transitionScaleAmplitude: 160,

    nav: true,
    navElement: ".main-nav",

    imagesRgbEffect: false,
    imagesRgbIntensity: 4,
    navImagesRgbIntensity: 120,

    textsDisplay: true,
    textTitleSize: 144,
    textsTiltEffect: true,
    googleFonts: ["Playfair Display:400"],
    textsRgbEffect: true,
    textsRgbIntensity: 1,
});
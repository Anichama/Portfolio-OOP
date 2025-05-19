const toggleSwitch = document.querySelector('.theme-switch input[type="checkbox"]');
const currentTheme = localStorage.getItem('theme');

document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);
        
        if (targetSection) {
            targetSection.scrollIntoView({ behavior: 'smooth' });
            
            if (targetId === 'about') {
                showSection(0);
                sectionTabs.forEach(t => t.classList.remove('active-tab'));
                sectionTabs[0].classList.add('active-tab');
                currentSectionIndex = 0;
            }
        }
    });
});

if (currentTheme) {
    document.documentElement.setAttribute('data-theme', currentTheme);
    if (currentTheme === 'dark') {
        toggleSwitch.checked = true;
    }
}

function switchTheme(e) {
    if (e.target.checked) {
        document.documentElement.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme', 'dark');
    } else {
        document.documentElement.setAttribute('data-theme', 'light');
        localStorage.setItem('theme', 'light');
    }    
}

toggleSwitch.addEventListener('change', switchTheme, false);


const gamesData = {
    hsr: {
        title: 'Honkai Star Rail',
        desc: 'A space fantasy RPG with turn-based combat and a rich story. Explore the galaxy and uncover mysteries!',
        link: 'https://hsr.hoyoverse.com/en-us/',
        img: 'star rail.jpeg',
        alt: 'Honkai Star Rail Large'
    },
    zzz: {
        title: 'Zenless Zone Zero',
        desc: 'An urban fantasy action game set in a post-apocalyptic world, featuring stylish combat and unique characters.',
        link: 'https://zenless.hoyoverse.com/en-us/main',
        img: 'zzz.png',
        alt: 'Zenless Zone Zero Large'
    },
    forza: {
        title: 'Forza Horizon 4',
        desc: 'A dynamic open-world racing game set in Britain. Experience seasons, events, and hundreds of cars.',
        link: 'https://store.steampowered.com/app/1293830/Forza_Horizon_4/',
        img: 'forza.png',
        alt: 'Forza Horizon 4 Large'
    },
    elden: {
        title: 'Elden Ring',
        desc: 'A vast action RPG adventure in a dark fantasy world, created by FromSoftware and George R. R. Martin.',
        link: 'https://store.steampowered.com/app/1245620/ELDEN_RING/',
        img: 'eldenring.jpg',
        alt: 'Elden Ring Large'
    },
    nfs: {
        title: 'NFS Unbound',
        desc: 'A street racing game with unique art style and high-speed police chases. Rule the streets in NFS Unbound.',
        link: 'https://store.steampowered.com/app/1846380/Need_for_Speed_Unbound/',
        img: 'unbound.jpg',
        alt: 'NFS Unbound Large'
    },
    gtfo: {
        title: 'GTFO',
        desc: 'A hardcore 4-player cooperative FPS with stealth, strategy, and terrifying monsters. Work together or die.',
        link: 'https://store.steampowered.com/app/493520/GTFO/',
        img: 'gtfo.png',
        alt: 'GTFO Large'
    }
};

const gameIcons = document.querySelectorAll('.game-icon');
const gameDetails = document.getElementById('game-details');
const gameImage = document.getElementById('game-image');

function setActiveGame(gameKey) {
    
    const data = gamesData[gameKey];
    if (!data) return;
    gameDetails.querySelector('.game-title').textContent = data.title;
    gameDetails.querySelector('.game-desc').textContent = data.desc;
    gameDetails.querySelector('.game-link').href = data.link;
    gameImage.querySelector('img').src = data.img;
    gameImage.querySelector('img').alt = data.alt;

   
    gameIcons.forEach(icon => {
        if (icon.dataset.game === gameKey) {
            icon.classList.add('active');
        } else {
            icon.classList.remove('active');
        }
    });
}

gameIcons.forEach(icon => {
    icon.addEventListener('click', () => {
        setActiveGame(icon.dataset.game);
    });
});

setActiveGame('hsr');

const musicData = {
    nightdancer: {
        title: 'Night Dancer',
        desc: 'A catchy J-pop song by Imase that went viral for its danceable beat and emotional lyrics.',
        link: 'https://open.spotify.com/track/348NF6vX0Yh22xvH0EZEro?si=b9e4827ee8dd40d2',
        img: 'nightdancer.jpg',
        alt: 'Night Dancer Large'
    },
    sunflower: {
        title: 'Sunflower',
        desc: 'A hit song by Post Malone and Swae Lee from the Spider-Man: Into the Spider-Verse soundtrack.',
        link: 'https://open.spotify.com/track/3KkXRkHbMCARz0aVfEt68P?si=2d015c02ce454cb0',
        img: 'sunflower.jpg',
        alt: 'Sunflower Large'
    },
    lemon: {
        title: 'Lemon',
        desc: 'A popular Japanese song by Kenshi Yonezu, known for its emotional lyrics and melody.',
        link: 'https://open.spotify.com/track/7Cd17G3oNQ34OWUwS8ZxfR?si=1c2ae4470fa146e8',
        img: 'lemon.jpg',
        alt: 'Lemon Large'
    },
    true: {
        title: 'TruE',
        desc: 'A song with a powerful message and captivating sound, loved by many fans.',
        link: 'https://open.spotify.com/track/56aR8fCNORk8XIrQGo75IQ?si=e13e786e567945d6',
        img: 'true.png',
        alt: 'TruE Large'
    },
    moonhalo: {
        title: 'Moon Halo',
        desc: 'A beautiful and atmospheric track, perfect for relaxing and reflecting.',
        link: 'https://open.spotify.com/track/7rhPtZ2nmgkrv6MCCDF2WU?si=54e2edba58434887',
        img: 'moonhalo.png',
        alt: 'Moon Halo Large'
    },
    fatal: {
        title: 'Fatal',
        desc: 'A dramatic and intense song that leaves a lasting impression.',
        link: 'https://open.spotify.com/track/7gJD9BarjoFwL2BNQ0rpWT?si=ee871ba1788c4cf1',
        img: 'fatal.png',
        alt: 'Fatal Large'
    }
};

const musicIcons = document.querySelectorAll('.music-icon');
const musicDetails = document.getElementById('music-details');
const musicImage = document.getElementById('music-image');

function setActiveMusic(musicKey) {
    const data = musicData[musicKey];
    if (!data) return;
    musicDetails.querySelector('.music-title').textContent = data.title;
    musicDetails.querySelector('.music-desc').textContent = data.desc;
    musicDetails.querySelector('.music-link').href = data.link;
    musicImage.querySelector('img').src = data.img;
    musicImage.querySelector('img').alt = data.alt;

    musicIcons.forEach(icon => {
        if (icon.dataset.music === musicKey) {
            icon.classList.add('active');
        } else {
            icon.classList.remove('active');
        }
    });
}

musicIcons.forEach(icon => {
    icon.addEventListener('click', () => {
        setActiveMusic(icon.dataset.music);
    });
});
setActiveMusic('nightdancer');

const destData = {
    london: {
        title: 'England, London',
        desc: 'The capital of England, known for its rich history, iconic landmarks like Big Ben, and vibrant culture.',
        link: 'https://en.wikipedia.org/wiki/London',
        img: 'bigben.jpg',
        alt: 'Big Ben Large'
    },
    hongkong: {
        title: 'Hong Kong, Disneyland',
        desc: 'A magical destination in Asia, famous for its theme parks, skyline, and vibrant city life.',
        link: 'https://en.wikipedia.org/wiki/Hong_Kong_Disneyland',
        img: 'hkdn.jpg',
        alt: 'Hong Kong Large'
    },
    edinburgh: {
        title: 'Scotland, Edinburgh',
        desc: 'A historic city in Scotland, known for its castle, festivals, and beautiful scenery.',
        link: 'https://en.wikipedia.org/wiki/Edinburgh',
        img: 'edinburgh.jpg',
        alt: 'Scotland Large'
    }
};

const destIcons = document.querySelectorAll('.dest-icon');
const destDetails = document.getElementById('dest-details');
const destImage = document.getElementById('dest-image');

function setActiveDest(destKey) {
    const data = destData[destKey];
    if (!data) return;
    destDetails.querySelector('.dest-title').textContent = data.title;
    destDetails.querySelector('.dest-desc').textContent = data.desc;
    destDetails.querySelector('.dest-link').href = data.link;
    destImage.querySelector('img').src = data.img;
    destImage.querySelector('img').alt = data.alt;

    destIcons.forEach(icon => {
        if (icon.dataset.dest === destKey) {
            icon.classList.add('active');
        } else {
            icon.classList.remove('active');
        }
    });
}

destIcons.forEach(icon => {
    icon.addEventListener('click', () => {
        setActiveDest(icon.dataset.dest);
    });
});
setActiveDest('london');

const gameKeys = Object.keys(gamesData);
let currentGameIndex = gameKeys.indexOf('hsr');
const leftGameArrow = document.querySelector('.left-arrow.game-arrow');
const rightGameArrow = document.querySelector('.right-arrow.game-arrow');

function showPrevGame() {
    currentGameIndex = (currentGameIndex - 1 + gameKeys.length) % gameKeys.length;
    setActiveGame(gameKeys[currentGameIndex]);
}
function showNextGame() {
    currentGameIndex = (currentGameIndex + 1) % gameKeys.length;
    setActiveGame(gameKeys[currentGameIndex]);
}
leftGameArrow.addEventListener('click', showPrevGame);
rightGameArrow.addEventListener('click', showNextGame);

gameIcons.forEach((icon, idx) => {
    icon.addEventListener('click', () => {
        currentGameIndex = idx;
    });
});

const musicKeys = Object.keys(musicData);
let currentMusicIndex = musicKeys.indexOf('nightdancer');
const leftMusicArrow = document.querySelector('.left-arrow.music-arrow');
const rightMusicArrow = document.querySelector('.right-arrow.music-arrow');

function showPrevMusic() {
    currentMusicIndex = (currentMusicIndex - 1 + musicKeys.length) % musicKeys.length;
    setActiveMusic(musicKeys[currentMusicIndex]);
}
function showNextMusic() {
    currentMusicIndex = (currentMusicIndex + 1) % musicKeys.length;
    setActiveMusic(musicKeys[currentMusicIndex]);
}
leftMusicArrow.addEventListener('click', showPrevMusic);
rightMusicArrow.addEventListener('click', showNextMusic);

musicIcons.forEach((icon, idx) => {
    icon.addEventListener('click', () => {
        currentMusicIndex = idx;
    });
});

const destKeys = Object.keys(destData);
let currentDestIndex = destKeys.indexOf('london');
const leftDestArrow = document.querySelector('.left-arrow.dest-arrow');
const rightDestArrow = document.querySelector('.right-arrow.dest-arrow');

function showPrevDest() {
    currentDestIndex = (currentDestIndex - 1 + destKeys.length) % destKeys.length;
    setActiveDest(destKeys[currentDestIndex]);
}
function showNextDest() {
    currentDestIndex = (currentDestIndex + 1) % destKeys.length;
    setActiveDest(destKeys[currentDestIndex]);
}
leftDestArrow.addEventListener('click', showPrevDest);
rightDestArrow.addEventListener('click', showNextDest);

destIcons.forEach((icon, idx) => {
    icon.addEventListener('click', () => {
        currentDestIndex = idx;
    });
});


const sectionIds = ['section1', 'section2', 'section3'];
let currentSectionIndex = 0; 

function showSection(idx) {
    sectionIds.forEach((id, i) => {
        const el = document.getElementById(id);
        if (el) {
            if (i === idx) {
                el.classList.add('active-section');
            } else {
                el.classList.remove('active-section');
            }
        }
    });
}

showSection(0);

const sectionTabs = document.querySelectorAll('.section-tab');
sectionTabs.forEach(tab => {
    tab.addEventListener('click', function() {
        const idx = parseInt(this.getAttribute('data-section'));
        showSection(idx);
        sectionTabs.forEach(t => t.classList.remove('active-tab'));
        this.classList.add('active-tab');
        currentSectionIndex = idx;
    });
});

const bgMusic = document.getElementById('bgMusic');
const muteButton = document.getElementById('muteButton');
const iconUnmuted = document.getElementById('icon-unmuted');
const iconMuted = document.getElementById('icon-muted');

document.addEventListener('click', () => {
    if (bgMusic.paused) {
        bgMusic.volume = 0.05;
        bgMusic.play();
    }
}, { once: true });

muteButton.addEventListener('click', () => {
    if (bgMusic.muted) {
        bgMusic.muted = false;
        bgMusic.volume = 0.05;
        iconUnmuted.style.display = '';
        iconMuted.style.display = 'none';
        muteButton.classList.remove('muted');
    } else {
        bgMusic.muted = true;
        iconUnmuted.style.display = 'none';
        iconMuted.style.display = '';
        muteButton.classList.add('muted');
    }
});

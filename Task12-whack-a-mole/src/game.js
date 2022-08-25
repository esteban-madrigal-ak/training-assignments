const game = new Game();
game.initialize();

function Game() {
    const holes = document.querySelectorAll('.hole');
    const scoreBoard = document.querySelector('.score');
    const game = document.querySelector('.game');
    const moles = document.querySelectorAll('.mole');
    const minPeepTime = 200;
    const maxPeepTime = 1000;
    const failAudio = "kick";
    const hitAudio = "hihat"
    const elementToHit = "mole";
    let lastHole;
    let timeUp = false;
    let score = 0;

    this.initialize = () => {
        game.addEventListener('click', this.bonk);
    }

    this.randomTime = (min, max) => {
        return Math.round(Math.random() * (max - min) + min);
    }

    this.randomHole = holes => {
        const idx = Math.floor(Math.random() * holes.length);
        const hole = holes[idx];
        if (hole === lastHole) return this.randomHole(holes);
        lastHole = hole;
        return hole;
    }

    this.peep = () => {
        const time = this.randomTime(minPeepTime, maxPeepTime);
        const hole = this.randomHole(holes);
        hole.classList.add('up');
        setTimeout(() => {
            hole.classList.remove('up');
            if (!timeUp) this.peep();
        }, time);
    }

    this.startGame = () => {
        scoreBoard.textContent = 0;
        timeUp = false;
        score = 0;
        this.peep();
        setTimeout(() => timeUp = true, 10000)
    }

    this.bonk = e => {
        if (!e.isTrusted) return;
        let audioToPlay = failAudio
        if (e.target.className == elementToHit){
            score++;
            e.target.classList.remove('up');
            scoreBoard.textContent = score;
            audioToPlay = hitAudio;
        }
        let audio = document.getElementById(audioToPlay); 
        audio.play();
    }
}



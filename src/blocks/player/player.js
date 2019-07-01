let mousedown = false;

class Player {
    constructor(root) {
        this.playerMain = root.playerMain;
        this.video = root.video;
        this.progress = root.progress;
        this.progressBar = root.progressBar;
        this.toggle = root.toggle;
        this.fullscreen = root.fullscreen;
        this.filled = root.filled;
        this.enableTogglePlay();
        this.enablePlayButton();
        this.enableUpdateButtonPlay();
        this.enableUpdateButtonPause();
        this.enableHandleProgress();
        this.enableTogglePlay();
        this.enableProgressClick();
        this.enableProgressMouseMove();
        this.enableProgressMouseDown();
        this.enableProgressMouseUp();
        this.enableToggleFullscreen();
        this.enableKeyNav();
    }

    enableTogglePlay() {
        this.video.addEventListener('click', this.togglePlay.bind(this));
    }

    enablePlayButton() {
        this.toggle.addEventListener('click', this.togglePlay.bind(this));
    }

    enableUpdateButtonPlay() {
        this.video.addEventListener('play', this.updateButton.bind(this));
    }

    enableUpdateButtonPause() {
        this.video.addEventListener('pause', this.updateButton.bind(this));
    }

    enableHandleProgress() {
        this.video.addEventListener('timeupdate', this.handleProgress.bind(this));
    }

    enableProgressClick() {
        this.progress.addEventListener('click', this.scrub.bind(this));
    }

    enableProgressMouseMove() {
        this.progress.addEventListener('mousemove', (element) => mousedown && this.scrub(element).bind(this));
    }

    enableProgressMouseDown() {
        this.progress.addEventListener('mousedown', () => mousedown = true);
    }

    enableProgressMouseUp() {
        this.progress.addEventListener('mouseup', () => mousedown = false);
    }

    enableToggleFullscreen() {
        this.fullscreen.addEventListener('click', this.toggleFullscreen.bind(this));
    }

    enableKeyNav() {
        window.addEventListener('keyup', this.keyNav.bind(this));
    }

    togglePlay() {
        const method = this.video.paused ? 'play' : 'pause';
        this.video[method]();
    }

    updateButton() {
        const icon = this.video.paused ? '►' : '❚ ❚';
        this.toggle.textContent = icon;
    }

    skip() {
        this.video.currentTime += parseFloat(this.dataset.skip);
    }

    handleRangeUpdate() {
        this.video[this.name] = this.value;
    }

    handleProgress() {
        const percent = (this.video.currentTime / this.video.duration) * 100;
        this.filled.style.width = `${percent}%`;
    }

    scrub(element) {
        const scrubTime = (element.offsetX / this.progress.offsetWidth) * this.video.duration;
        this.video.currentTime = scrubTime;

    }

    toggleFullscreen() {
        if (!document.fullscreenElement && !document.mozFullScreenElement &&
            !document.webkitFullscreenElement && !document.msFullscreenElement) {
            if (this.playerMain.requestFullscreen) {
                this.playerMain.requestFullscreen();
            } else if (this.playerMain.msRequestFullscreen) {
                this.playerMain.msRequestFullscreen();
            } else if (this.playerMain.mozRequestFullScreen) {
                this.playerMain.mozRequestFullScreen();
            } else if (this.playerMain.webkitRequestFullscreen) {
                this.playerMain.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT);
            }
        } else {
            if (document.exitFullscreen) {
                document.exitFullscreen();
            } else if (document.msExitFullscreen) {
                document.msExitFullscreen();
            } else if (document.mozCancelFullScreen) {
                document.mozCancelFullScreen();
            } else if (document.webkitExitFullscreen) {
                document.webkitExitFullscreen();
            }
        }
    }

    keyNav(element) {
        if(element.code === "Space") {
            this.togglePlay();
        } else if (element.code === "ArrowRight") {
            this.video.currentTime += 25;
        } else if (element.code === "ArrowLeft") {
            this.video.currentTime -= 10;
        }
    }
}

const playerDoc = document.querySelector('.player');
// get elements
const root = {
    playerMain: document.querySelector('.player'),
    video: playerDoc.querySelector('.viewer'),
    progress: playerDoc.querySelector('.player__progress'),
    progressBar: playerDoc.querySelector('.player__progress_filled'),
    toggle: playerDoc.querySelector('.toggle'),
    fullscreen: playerDoc.querySelector('.fullscreen'),
    filled: playerDoc.querySelector('.player__progress_filled'),
};

new Player(root);
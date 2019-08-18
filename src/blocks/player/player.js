let mousedown = false;

class Player {
  constructor(root) {
    this.root = root;
    this.startPlayer();
  }

  startPlayer() {
    this.enableElements();
    this.enableTogglePlay();
    this.enablePlayButton();
    this.enableProgress();
    this.enableTogglePlay();
    this.enableProgressClick();
    this.enableProgressMouseMove();
    this.enableProgressMouseDown();
    this.enableProgressMouseUp();
    this.enableToggleFullscreen();
    this.enablekeyNavigation();
  }

  enableElements() {
    this.playerMain = this.root;
    this.video = this.root.querySelector('.player__video');
    this.progress = this.root.querySelector('.player__progress');
    this.toggle = this.root.querySelector('.player__button');
    this.fullscreen = this.root.querySelector('.player__fullscreen-button');
    this.filled = this.root.querySelector('.player__progress-filling');
  }

  enableTogglePlay() {
    this.video.addEventListener('click', this.handleTogglePlayClick.bind(this));
  }

  enablePlayButton() {
    this.toggle.addEventListener('click', this.handleTogglePlayClick.bind(this));
  }

  enableProgress() {
    this.video.addEventListener('timeupdate', this.handleProgressTimeupdate.bind(this));
  }

  enableProgressClick() {
    this.progress.addEventListener('click', this.handleProgressClick.bind(this));
  }

  enableProgressMouseMove() {
    this.progress.addEventListener('mousemove', element => mousedown && this.scrub(element).bind(this));
  }

  enableProgressMouseDown() {
    this.progress.addEventListener('mousedown', () => mousedown = true);
  }

  enableProgressMouseUp() {
    this.progress.addEventListener('mouseup', () => mousedown = false);
  }

  enableToggleFullscreen() {
    this.fullscreen.addEventListener('click', this.handleToggleFullscreenClick.bind(this));
  }

  enablekeyNavigation() {
    window.addEventListener('keyup', this.handleWindowKeyUp.bind(this));
  }

  handleTogglePlayClick() {
    const methodTitle = this.video.paused ? 'play' : 'pause';
    this.video[methodTitle]();
    const icon = this.video.paused ? '►' : '❚ ❚';
    this.toggle.classList.remove('player__button_unclicked');
    this.toggle.textContent = icon;
  }

  handleRangeUpdate() {
    this.video[this.name] = this.value;
  }

  handleProgressTimeupdate() {
    const percent = (this.video.currentTime / this.video.duration) * 100;
    this.filled.style.width = `${percent}%`;
  }

  handleProgressClick(element) {
    const scrubTime = (element.offsetX / this.progress.offsetWidth) * this.video.duration;
    this.video.currentTime = scrubTime;
  }

  handleToggleFullscreenClick() {
    if (!document.fullscreenElement && !document.mozFullScreenElement
      && !document.webkitFullscreenElement && !document.msFullscreenElement) {
      if (this.playerMain.requestFullscreen) {
        this.playerMain.requestFullscreen();
      } else if (this.playerMain.msRequestFullscreen) {
        this.playerMain.msRequestFullscreen();
      } else if (this.playerMain.mozRequestFullScreen) {
        this.playerMain.mozRequestFullScreen();
      } else if (this.playerMain.webkitRequestFullscreen) {
        this.playerMain.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT);
      }
    } else if (document.exitFullscreen) {
      document.exitFullscreen();
    } else if (document.msExitFullscreen) {
      document.msExitFullscreen();
    } else if (document.mozCancelFullScreen) {
      document.mozCancelFullScreen();
    } else if (document.webkitExitFullscreen) {
      document.webkitExitFullscreen();
    }
  }

  handleWindowKeyUp(element) {
    if (element.code === 'Space') {
      this.togglePlay();
    } else if (element.code === 'ArrowRight') {
      this.video.currentTime += 25;
    } else if (element.code === 'ArrowLeft') {
      this.video.currentTime -= 10;
    }
  }
}

const root = document.getElementsByClassName('js-player');

Array.prototype.forEach.call(root, item => new Player(item));
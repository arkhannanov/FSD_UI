let mousedown = false;

class Player {
  constructor(root) {
    this.root = root;
    this._startPlayer();
  }

  _startPlayer() {
    this._enableElements();
    this._enableTogglePlay();
    this._enablePlayButton();
    this._enableProgress();
    this._enableTogglePlay();
    this._enableProgressClick();
    this._enableProgressMouseMove();
    this._enableProgressMouseDown();
    this._enableProgressMouseUp();
    this._enableToggleFullscreen();
    this._enablekeyNavigation();
  }

  _enableElements() {
    this.playerMain = this.root;
    this.video = this.root.querySelector('.player__video');
    this.progress = this.root.querySelector('.player__progress');
    this.toggle = this.root.querySelector('.player__button');
    this.fullscreen = this.root.querySelector('.player__fullscreen-button');
    this.filled = this.root.querySelector('.player__progress-filling');
  }

  _enableTogglePlay() {
    this.video.addEventListener('click', this._handleTogglePlayClick.bind(this));
  }

  _enablePlayButton() {
    this.toggle.addEventListener('click', this._handleTogglePlayClick.bind(this));
  }

  _enableProgress() {
    this.video.addEventListener('timeupdate', this._handleProgressTimeupdate.bind(this));
  }

  _enableProgressClick() {
    this.progress.addEventListener('click', this._handleProgressClick.bind(this));
  }

  _enableProgressMouseMove() {
    this.progress.addEventListener('mousemove', element => mousedown && this.scrub(element).bind(this));
  }

  _enableProgressMouseDown() {
    this.progress.addEventListener('mousedown', () => mousedown = true);
  }

  _enableProgressMouseUp() {
    this.progress.addEventListener('mouseup', () => mousedown = false);
  }

  _enableToggleFullscreen() {
    this.fullscreen.addEventListener('click', this._handleToggleFullscreenClick.bind(this));
  }

  _enablekeyNavigation() {
    window.addEventListener('keyup', this._handleWindowKeyUp.bind(this));
  }

  _handleTogglePlayClick() {
    this.video[this.video.paused ? 'play' : 'pause']();
    this.toggle.classList.remove('player__button_unclicked');
    this.toggle.textContent = this.video.paused ? '►' : '❚ ❚';
  }

  _handleRangeUpdate() {
    this.video[this.name] = this.value;
  }

  _handleProgressTimeupdate() {
    const percent = (this.video.currentTime / this.video.duration) * 100;
    this.filled.style.width = `${percent}%`;
  }

  _handleProgressClick(element) {
    const scrubTime = (element.offsetX / this.progress.offsetWidth) * this.video.duration;
    this.video.currentTime = scrubTime;
  }

  _handleToggleFullscreenClick() {
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

  _handleWindowKeyUp(element) {
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
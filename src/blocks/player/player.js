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
    this.enableUpdateButtonPlay();
    this.enableHandleProgress();
    this.enableTogglePlay();
    this.enableProgressClick();
    this.enableProgressMouseMove();
    this.enableProgressMouseDown();
    this.enableProgressMouseUp();
    this.enableToggleFullscreen();
    this.enablekeyNavigation();
  }

  enableElements() {
    this.root.playerMain = this.root;
    this.root.video = this.root.children[0];
    this.root.progress = this.root.children[1].children[1];
    this.root.toggle = this.root.children[1].children[0];
    this.root.fullscreen = this.root.children[1].children[2];
    this.root.filled = this.root.children[1].children[1].children[0];
  }

  enableTogglePlay() {
    this.root.video.addEventListener('click', this.handleTogglePlayClick.bind(this));
  }

  enablePlayButton() {
    this.root.toggle.addEventListener('click', this.handleTogglePlayClick.bind(this));
  }

  enableUpdateButtonPlay() {
    this.root.video.addEventListener('play', this.handleUpdateButtonPlay.bind(this));
  }

  enableHandleProgress() {
    this.root.video.addEventListener('timeupdate', this.handleProgressTimeupdate.bind(this));
  }

  enableProgressClick() {
    this.root.progress.addEventListener('click', this.handleProgressClick.bind(this));
  }

  enableProgressMouseMove() {
    this.root.progress.addEventListener('mousemove', element => mousedown && this.scrub(element).bind(this));
  }

  enableProgressMouseDown() {
    this.root.progress.addEventListener('mousedown', () => mousedown = true);
  }

  enableProgressMouseUp() {
    this.root.progress.addEventListener('mouseup', () => mousedown = false);
  }

  enableToggleFullscreen() {
    this.root.fullscreen.addEventListener('click', this.handleToggleFullscreenClick.bind(this));
  }

  enablekeyNavigation() {
    window.addEventListener('keyup', this.handleKeyNavigationKeyUp.bind(this));
  }

  handleTogglePlayClick() {
    const methodTitle = this.root.video.paused ? 'play' : 'pause';
    this.root.video[methodTitle]();
  }

  handleUpdateButtonPlay() {
    const icon = this.root.video.paused ? '►' : '❚ ❚';
    this.root.toggle.classList.remove('js-player__button_unclicked');
    this.root.toggle.textContent = icon;
  }

  skip() {
    this.root.video.currentTime += parseFloat(this.dataset.skip);
  }

  handleRangeUpdate() {
    this.root.video[this.name] = this.value;
  }

  handleProgressTimeupdate() {
    const percent = (this.root.video.currentTime / this.root.video.duration) * 100;
    this.root.filled.style.width = `${percent}%`;
  }

  handleProgressClick(element) {
    const scrubTime = (element.offsetX / this.root.progress.offsetWidth) * this.root.video.duration;
    this.root.video.currentTime = scrubTime;
  }

  handleToggleFullscreenClick() {
    if (!document.fullscreenElement && !document.mozFullScreenElement
      && !document.webkitFullscreenElement && !document.msFullscreenElement) {
      if (this.root.playerMain.requestFullscreen) {
        this.root.playerMain.requestFullscreen();
      } else if (this.root.playerMain.msRequestFullscreen) {
        this.root.playerMain.msRequestFullscreen();
      } else if (this.root.playerMain.mozRequestFullScreen) {
        this.root.playerMain.mozRequestFullScreen();
      } else if (this.root.playerMain.webkitRequestFullscreen) {
        this.root.playerMain.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT);
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

  handleKeyNavigationKeyUp(element) {
    if (element.code === 'Space') {
      this.togglePlay();
    } else if (element.code === 'ArrowRight') {
      this.root.video.currentTime += 25;
    } else if (element.code === 'ArrowLeft') {
      this.root.video.currentTime -= 10;
    }
  }
}

const root = document.getElementsByClassName('js-player');

for (let i = 0; i < root.length; i += 1) {
  new Player(root[i]);
}

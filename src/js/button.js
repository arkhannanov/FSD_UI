var buttons = document.getElementsByName('button');

Array.prototype.forEach.call(buttons, function(element) {
    element.addEventListener('click', createRipple);
});

function createRipple (e) {
    var circle = document.createElement('div');
    this.append(circle);

    var d = Math.max(this.clientWidth, this.clientHeight);

    circle.style.width = circle.style.height = d + 'px';

    circle.style.left = e.clientX - this.offsetLeft - d/2 + 'px';
    circle.style.top = e.clientY - this.offsetTop + window.pageYOffset - d/2 + 'px';   

    circle.classList.add('ripple')
}
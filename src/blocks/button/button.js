let buttons = document.getElementsByName('button');

Array.prototype.forEach.call(buttons, function(item) {
    item.addEventListener('click', createRipple);
});

function createRipple (element) {
    let circle = document.createElement('div');
    this.append(circle);

    let diametr = Math.max(this.clientWidth, this.clientHeight);

    circle.style.width = circle.style.height = diametr + 'px';

    circle.style.left = element.clientX - this.offsetLeft - diametr/2 + 'px';
    circle.style.top = element.clientY - this.offsetTop + window.pageYOffset - diametr/2 + 'px';

    circle.classList.add('ripple');
}
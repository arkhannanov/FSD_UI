var firstCircle = document.getElementById('stages__first-circle');
var secondCircle = document.getElementById('stages__second-circle');
var thirdCircle = document.getElementById('stages__third-circle');
var fourthCircle = document.getElementById('stages__fourth-circle');
var fifthCircle = document.getElementById('stages__fifth-circle');

var firstDiv = document.getElementById('stages__first-div');
var secondDiv = document.getElementById('stages__second-div');
var thirdDiv = document.getElementById('stages__third-div');
var fourthDiv = document.getElementById('stages__fourth-div');

firstCircle.addEventListener('click', function() {
    firstCircle.style.cssText = 'background: #e75735; color: white;';
    secondCircle.style.cssText = 'background: #e5e5e5; color: #888888;';
    thirdCircle.style.cssText = 'background: #e5e5e5; color: #888888';
    fourthCircle.style.cssText = 'background: #e5e5e5; color: #888888';
    fifthCircle.style.cssText = 'background: #e5e5e5; color: #888888';

    firstDiv.style.cssText = 'background: #e5e5e5;';
    secondDiv.style.cssText = 'background: #e5e5e5;';
    thirdDiv.style.cssText = 'background: #e5e5e5;';
    fourthDiv.style.cssText = 'background: #e5e5e5;';
});

secondCircle.addEventListener('click', function() {
    firstCircle.style.cssText = 'background: #e75735; color: white;';
    secondCircle.style.cssText = 'background: #e75735; color: white;';
    thirdCircle.style.cssText = 'background: #e5e5e5; color: #888888';
    fourthCircle.style.cssText = 'background: #e5e5e5; color: #888888';
    fifthCircle.style.cssText = 'background: #e5e5e5; color: #888888';

    firstDiv.style.cssText = 'background: #e75735;';
    secondDiv.style.cssText = 'background: #e5e5e5;';
    thirdDiv.style.cssText = 'background: #e5e5e5;';
    fourthDiv.style.cssText = 'background: #e5e5e5;';
});

thirdCircle.addEventListener('click', function() {
    firstCircle.style.cssText = 'background: #e75735; color: white;';
    secondCircle.style.cssText = 'background: #e75735; color: white;';
    thirdCircle.style.cssText = 'background: #e75735; color: white;';
    fourthCircle.style.cssText = 'background: #e5e5e5; color: #888888';
    fifthCircle.style.cssText = 'background: #e5e5e5; color: #888888';

    firstDiv.style.cssText = 'background: #e75735;';
    secondDiv.style.cssText = 'background: #e75735;';
    thirdDiv.style.cssText = 'background: #e5e5e5;';
    fourthDiv.style.cssText = 'background: #e5e5e5;';
});

fourthCircle.addEventListener('click', function() {
    firstCircle.style.cssText = 'background: #e75735; color: white;';
    secondCircle.style.cssText = 'background: #e75735; color: white;';
    thirdCircle.style.cssText = 'background: #e75735; color: white;';
    fourthCircle.style.cssText = 'background: #e75735; color: white;';
    fifthCircle.style.cssText = 'background: #e5e5e5; color: #888888';

    firstDiv.style.cssText = 'background: #e75735; ';
    secondDiv.style.cssText = 'background: #e75735;';
    thirdDiv.style.cssText = 'background: #e75735;';
    fourthDiv.style.cssText = 'background: #e5e5e5;';
});

fifthCircle.addEventListener('click', function() {
    firstCircle.style.cssText = 'background: #e75735; color: white;';
    secondCircle.style.cssText = 'background: #e75735; color: white;';
    thirdCircle.style.cssText = 'background: #e75735; color: white;';
    fourthCircle.style.cssText = 'background: #e75735; color: white;';
    fifthCircle.style.cssText = 'background: #e75735; color: white;';

    firstDiv.style.cssText = 'background: #e75735;';
    secondDiv.style.cssText = 'background: #e75735;';
    thirdDiv.style.cssText = 'background: #e75735;';
    fourthDiv.style.cssText = 'background: #e75735;';
});
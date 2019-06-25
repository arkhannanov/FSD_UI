let toggl = document.getElementsByName('toggles__toggl');
let togglesCircle = document.getElementsByName('toggles__circle');
let statusOff = [];

Array.prototype.forEach.call(toggl, function(element,index) {
    element.addEventListener('click', chg);
    statusOff[index]=true;
});



// toggl.addEventListener('click', chg);

function chg () {
    for (let i = 0; i < 2; i++) {
        if (statusOff[i] == true) {
            toggl[i].style.cssText = "background: #4eb7a8; padding-left: 4px;";
            toggl[i].innerHTML = "on";
            togglesCircle[i].style.cssText = "margin-left: 38px;";
            statusOff[i] = false;
        } else {
            toggl[i].style.cssText = "background: #e5e5e5; padding-left: 32px;";
            toggl[i].innerHTML = "off";
            togglesCircle[i].style.cssText = "margin-left: 2px;";
            statusOff[i] = true;
        }
    }
}
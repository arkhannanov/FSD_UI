var toggl = document.getElementById('toggles__toggl');
var togglesCircle = document.getElementById('toggles__circle');

var statusOff =true;

toggl.addEventListener('click', chg);

function chg ()
{
    if (statusOff==true)
    {
        toggl.style.cssText="background: #4eb7a8; padding-left: 4px;";
        toggl.innerHTML="on";
        togglesCircle.style.cssText="margin-left: 38px;";
        statusOff=false;
    }
    else
    {
        toggl.style.cssText="background: #e5e5e5; padding-left: 32px;";
        toggl.innerHTML="off";
        togglesCircle.style.cssText="margin-left: 2px;";
        statusOff=true;
    }

}
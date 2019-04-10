
var buttontoggles = document.getElementById('buttontoggles');
var toggles_circle = document.getElementById('toggles_circle');

var StatusOff =true;

buttontoggles.addEventListener('click', chg);

function chg ()
{
    if (StatusOff==true)
    {
        buttontoggles.style.cssText="background-color: #4eb7a8; padding-left: 12px; text-align: left;";
        buttontoggles.innerHTML="ON";
        toggles_circle.style.cssText="margin-left: 38px;";
        StatusOff=false;
    }
    else
    {
        buttontoggles.style.cssText="background-color: #e5e5e5; padding-left: 25px;; text-align: center;";
        buttontoggles.innerHTML="OFF";
        toggles_circle.style.cssText="margin-left: 2px;";
        StatusOff=true;
    }

}
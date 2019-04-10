var tick_boxes = document.getElementById('tick_boxes');

var StatusOff =true;

tick_boxes.addEventListener('click', chg);

function chg ()
{
    if (StatusOff==true)
    {
        tick_boxes.style.cssText="background-color: #4eb7a8; background-image: url('../img/tick_box1.png');";
        StatusOff=false;
    }
    else
    {
        tick_boxes.style.cssText="background-color: #e5e5e5; background-image: url('../img/tick_box2.png');";
        StatusOff=true;
    }

}
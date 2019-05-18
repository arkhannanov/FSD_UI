var tick_boxes = document.getElementsByName('tick_boxes');
var StatusOff = [];
var INDEX = [];

Array.prototype.forEach.call(tick_boxes, function(element,index)
{
    element.addEventListener('click', chg);
    StatusOff[index]=true;
    INDEX[index]=index;
});

function chg ()
{
   
for (var i = 0; i < INDEX.length; i++) {
  
    console.log(StatusOff[1]);
         if (StatusOff[i]==true)
        {
             this.style.cssText="background-color: #4eb7a8; background-image: url('./img/tick-box-1.png');";
             StatusOff[i]=false;
        }
        else
        {
            this.style.cssText="background-color: #e5e5e5; background-image: url('./img/tick-box-2.png');";
             StatusOff[i]=true;
        }
    }

}
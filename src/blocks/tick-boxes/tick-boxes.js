var tickBoxes = document.getElementsByName('tick-boxes');
var statusOff = [];

Array.prototype.forEach.call(tickBoxes, function(element,index)
{
    element.addEventListener('click', chg);
    statusOff[index]=true;
});

function chg ()
{
   
for (var i = 0; i < statusOff.length; i++) {
  
         if (statusOff[i]==true)
        {
             this.style.cssText="background-color: #4eb7a8; background-image: url('./src/blocks/tick-boxes/images/tick-box-1.png');";
             statusOff[i]=false;
        }
        else
        {
            this.style.cssText="background-color: #e5e5e5; background-image: url('./src/blocks/tick-boxes/images/tick-box-2.png');";
             statusOff[i]=true;
        }
    }

}
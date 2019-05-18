var search = document.getElementById('search');
var search_icon = document.getElementById('search_icon');
var search_error = document.getElementById('search_error');

search.addEventListener('click', clicksearch);
search_icon.addEventListener('click', clickbutton);
search.addEventListener('keyup', inputSearch);

var inputValue;

function inputSearch(e) {
    let usedInput = e.target;
    inputValue = usedInput.value;
}


function clicksearch() { 
    search_error.style.cssText="background: transparent;";
    search_error.innerHTML="";
}

function clickbutton() {
    
    if(inputValue.length == 0)
    {
        search_error.style.cssText="background: transparent;";
        search_error.innerHTML="";
    }
    else
    {
    search_error.style.cssText="background-image: url('../img/search_icon.png'); background-repeat: no-repeat; background-position: 273px 6px; background-color: #e75735;";
    search_error.innerHTML="I’ve not found what I’m looking for...";
    }
}
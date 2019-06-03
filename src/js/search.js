var search = document.getElementById('search');
var searchIcon = document.getElementById('search__icon');
var searchError = document.getElementById('search__error');

search.addEventListener('click', clicksearch);
searchIcon.addEventListener('click', clickbutton);
search.addEventListener('keyup', inputSearch);

var inputValue;

function inputSearch(e) {
    let usedInput = e.target;
    inputValue = usedInput.value;
}


function clicksearch() { 
    searchError.style.cssText="background: transparent;";
    searchError.innerHTML="";
}

function clickbutton() {
    
    if(inputValue.length == 0)
    {
        searchError.style.cssText="background: transparent;";
        searchError.innerHTML="";
    }
    else
    {
        searchError.style.cssText="background-image: url('../img/search_icon.png'); background-repeat: no-repeat; background-position: 273px 6px; background-color: #e75735;";
        searchError.innerHTML="I’ve not found what I’m looking for...";
    }
}
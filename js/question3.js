var url = "https://api.rawg.io/api/games/";
const apiResultsContainer = document.querySelector(".apiresults");
const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const id = params.get("id");
url += id;

async function getGameDetails() {
    var apiResultsWidth = 1;
    apiResultsContainer.innerHTML = displayMessage("wait","Please\xa0wait");
    try {
        const apiResponse = await fetch(url);
        const game = await apiResponse.json();
        const developers = game.developers;
        var developersTxt = ""       
        for (i=0; i<developers.length; i++) {
            developersTxt = developers[i].name;
        };
        var tempApiResultsContainer = "";
        tempApiResultsContainer += 
        `<div class="q3apiresult">
            <img src="${game.background_image}" class="q3apiimage"></img><div class="q3innerresult1">
            ${game.name}</div>
            <div class="q3innerresult2"><b>Rating:</b>${game.rating}</div>
            <div class="q3innerresult2"><b>Website:</b>${game.website}</div>
            <div class="q3innerresult2"><b>Developers:</b>${developersTxt}</div>
        </div>`;            
        apiResultsContainer.innerHTML=tempApiResultsContainer;        
    }
    catch (error) {
        apiResultsContainer.innerHTML = displayMessage("q3error","An error occured: <br>"+error);
    }    
}

getGameDetails();

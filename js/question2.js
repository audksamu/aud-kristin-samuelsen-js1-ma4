const url = "https://api.rawg.io/api/games?dates=1999-01-01,1999-12-31&ordering=-rating";
const apiResultsContainer = document.querySelector(".apiresults");
    
async function getGames() {
    var apiResultsWidth = 1;
    apiResultsContainer.innerHTML = displayMessage("wait","Please\xa0wait");
    try {
        const apiResponse = await fetch(url);
        const apiResults = await apiResponse.json();
        const games = apiResults.results;
        var tempApiResultsContainer = "";
        for (let i = 0; i < games.length; i++) {
            tempApiResultsContainer += 
            `<a href="question3.html?id=${games[i].id}" class="q2a">
                <div class="q2apiresult">
                    <img src="${games[i].background_image}" class="q2apiimage"></img>
                    <div class="q2innerresult1">
                        <b> Name:</b>${games[i].name}
                    </div>
                    <div class="q2innerresult2"><b>Rating:</b>${games[i].rating}&nbsp;&nbsp;&nbsp;<b>Tags:</b>${games[i].tags.length}</div>
                </div>
             </a>`;
        }
        apiResultsContainer.innerHTML=tempApiResultsContainer;        
    }
    catch (error) {
        apiResultsContainer.innerHTML=displayMessage("q2error","An error occured: <br>"+error);
    }    
}

getGames();
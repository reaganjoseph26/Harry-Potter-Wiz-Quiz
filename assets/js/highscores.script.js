var tableEl = document.querySelector("#row-scores");
var nameSection = document.querySelector("#nameTable");
var scoreSection = document.querySelector("#scoreTable");

function getLocalStorage() {
    var values = [],
        keys = Object.keys(localStorage),
        i = keys.length;
    while ( i-- ) {
        values.push( 
            {
              "name": JSON.parse(localStorage.getItem(keys[i])).initials,
              "score": JSON.parse(localStorage.getItem(keys[i])).timeLeft
            }
         );
    }
    return values;
}

const listScores = function(myObject) {
    for (i = 0; i < myObject.length; i++) {
        var addScore = document.createElement("tr");
    addScore.className = "row-scores";
    nameSection.innerHTML += `${myObject[i].name} <br>`;
    scoreSection.innerHTML += `${myObject[i].score} <br>`;
    tableEl.appendChild(addScore);
    }
};

var clearStorage = function() {
    localStorage.clear();
    location.reload();
    return false;
}

document.getElementById("clear-storage").addEventListener("click", clearStorage);

listScores(getLocalStorage());
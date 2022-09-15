
const searchBox = document.getElementById("searchEpisode");
const searchCount = document.getElementById("episodeCount");
const selectMenu = document.getElementById("episodeList");

let currentEpisodes = [];
//You can edit ALL of the code here
function setup() {
 sendRequest(82).then((data) => {
   currentEpisodes = data;
   makePageForEpisodes(currentEpisodes);
   makeSelectMenuForEpisodes(currentEpisodes);
 });
 searchBox.addEventListener("keyup", filterEpisodes);
 selectMenu.addEventListener("change", episodeChange);
}
// 

// making elements for images.

function makePageForEpisodes(episodeList) {
  const episodeContainer = document.getElementById("episodeContainer");
  episodeContainer.innerHTML = "";

  episodeList?.forEach((item) => {
    const eachEpisode = document.createElement("div");
     eachEpisode.setAttribute("id", "episode");
    const episodeTitle = document.createElement("h3");
    episodeTitle.setAttribute("id", "title");
    const episodeSummary = document.createElement("p");
    const episodeImg = document.createElement("img");

    episodeTitle.innerText = `${item.name} - ${episodeCode(
      item.season
    )}E${episodeCode(item.number)}`;
    episodeSummary.innerHTML = item.summary;

    eachEpisode.appendChild(episodeImg);
    episodeImg.src = `${item.image.medium}`;

    eachEpisode.appendChild(episodeTitle);
    eachEpisode.appendChild(episodeImg)
    eachEpisode.appendChild(episodeSummary);
    episodeContainer.appendChild(eachEpisode);
  });
}


// episode and season numbers.
 function episodeCode(num) {
  if (num < 10) {
    return "0" + num;
  } else {
    return num;
  }
}



// tolowercase filter start
function filterEpisodes(event) {
  const searchTerm = event.target.value.toLowerCase();

  const filteredEpisodes = currentEpisodes.filter((item) => {
    const episodeName = item.name.toLowerCase();
    const episodeSummary = item.summary.toLowerCase();
    return (
      episodeName.includes(searchTerm) || episodeSummary.includes(searchTerm)
    );
  });

  const filteredCount = filteredEpisodes.length;
  const currentCount = currentEpisodes.length;

  const countString = `Displaying ${filteredCount} / ${currentCount}`;

  searchCount.innerText = countString;
  makePageForEpisodes(filteredEpisodes);
}

// filtering episodes.

  function episodeChange(event) {
    const episodeId = event.target.value;
    if (episodeId === "SHOW_ALL") {
      makePageForEpisodes(currentEpisodes);
    } else {
      const filteredEpisodes = currentEpisodes.filter((e) => {
        return e.id === Number(episodeId);
      });
      makePageForEpisodes(filteredEpisodes);
    }
  }



// menu for episodes
function makeSelectMenuForEpisodes(episodeList) {
  const showAllEpisodes = document.createElement("option");
  showAllEpisodes.innerText = "Show all episodes";
  showAllEpisodes.value = "SHOW_ALL";
  selectMenu.appendChild(showAllEpisodes);

  episodeList.forEach((episode) => {
    const listOption = document.createElement("option");
    const episodeString = `${episodeCode(episode.season, episode.number)} - ${
      episode.name
    }`;
    listOption.innerText = episodeString;
    listOption.value = episode.id;
    selectMenu.appendChild(listOption);
  });
}



function sendRequest(showId) {
  const urlForTheRequest = `https://api.tvmaze.com/shows/${showId}/episodes`;

  return fetch(urlForTheRequest)
    .then((res) => res.json())
    .then((data) => {
      return data;
    })
    .catch((e) => console.log(e));
}

window.onload = setup;


 

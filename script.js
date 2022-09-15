
const searchBox = document.getElementById("searchEpisode");
const searchCount = document.getElementById("episodeCount");


//You can edit ALL of the code here
// 
// 

// making elements for images.

function makePageForEpisodes(episodeList) {
  const episodeContainer = document.getElementById("episodeContainer");
  episodeContainer.innerHTML = "";

  episodeList.forEach((item) => {
    const eachEpisode = document.createElement("div");
    const episodeTitle = document.createElement("h3");
    const episodeSummary = document.createElement("p");
    const episodeImg = document.createElement("img");

    episodeTitle.innerText = `${item.name} - ${episodeCode(
      item.season
    )}E${episodeCode(item.number)}`;
    episodeSummary.innerHTML = item.summary;

    eachEpisode.appendChild(episodeImg);
    episodeImg.src = `${item.image.medium}`;

    eachEpisode.appendChild(episodeTitle);
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



// filtering episodes.
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






window.onload = setup;
















// function setup() {
//   const allEpisodes = getAllEpisodes();
//   makePageForEpisodes(allEpisodes);

// }


// function episodeCode(num) {
//   if (num < 10) {
//     return "0" + num;
//   } else {
//     return num;
//   }
// }
// //

// function makePageForEpisodes(episodeList) {
//   const rootElem = document.getElementById("root");
//   // rootElem.textContent = `Got ${episodeList.length} episode(s)`; ,

//   episodeList?.forEach((item) => {
//     let  = document.createElement("div");
//     eachEpisode.setAttribute("class", "episode");
//     rootElem.appendChild(eachEpisode);
//     let episodeTitle = document.createElement("h3");
//     eachEpisode.appendChild(episodeTitle);
//     episodeTitle.setAttribute("class", "title");
//     episodeTitle.innerHTML = `${item.name} - S${episodeCode(
//       item.season
//     )}E${episodeCode(item.number)} `;
//     let episodeImg = document.createElement("img");
//     eachEpisode.appendChild(episodeImg);
//     episodeImg.src = `${item.image.medium}`;
//     let episodeSummary = document.createElement("p");
//     eachEpisode.appendChild(episodeSummary);
//     episodeSummary.setAttribute("class", "summary");
//     episodeSummary.innerHTML = `${item.summary}`;
//     let link = document.createElement("a");
//     episodeSummary.appendChild(link);
//     link.href = `${item.links}`;
//     link.innerText = "For More Info Visit TvMaze";
//   });
// }



// window.onload = setup;

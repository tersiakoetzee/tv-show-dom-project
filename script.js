//You can edit ALL of the code here



function setup() {
  const allEpisodes = getAllEpisodes();
  makePageForEpisodes(allEpisodes);

  

}



function episodeCode(num) {
  if (num < 10) {
    return "0" + num;
  } else {
    return num;
  }
}
// 


function makePageForEpisodes(episodeList) {

  
   
  const rootElem = document.getElementById("root");
  // rootElem.textContent = `Got ${episodeList.length} episode(s)`; ,
  

  episodeList.forEach((item) => {
   
    let eachEpisode = document.createElement("div");
    eachEpisode.setAttribute("class", "episode");
    rootElem.appendChild(eachEpisode);
    let episodeTitle = document.createElement("h3");
    eachEpisode.appendChild(episodeTitle);
    episodeTitle.setAttribute("class", "title");
    episodeTitle.innerHTML = `${item.name} - S${episodeCode(
      item.season
    )}E${episodeCode(item.number)} `;
    let episodeImg = document.createElement("img");
    eachEpisode.appendChild(episodeImg);
    episodeImg.src = `${item.image.medium}`;
    let episodeSummary = document.createElement("p");
    eachEpisode.appendChild(episodeSummary);
    episodeSummary.setAttribute("class", "summary");
    episodeSummary.innerHTML = `${item.summary}`;
    let link = document.createElement("a");
    episodeSummary.appendChild(link);
    link.href = `${item.links}`;
    link.innerText = "For More Info Visit TvMaze";
  });
}



window.onload = setup;


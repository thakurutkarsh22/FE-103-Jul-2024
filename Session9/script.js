import teamsData from "./data.js";
console.log(teamsData);

// ------ SELECTOR TEXT -----
const teamPillsContainerId = "teams-container";
const teamContentContainerId = "team-content-container";

displayTeamPills(teamsData);

const teamPillsContainer = document.getElementById(teamPillsContainerId);

// TODO 2: Event handler to show Carousel with images for selected team
teamPillsContainer.addEventListener("click", (e) => {
  const teamContentContainerElement = document.getElementById(
    teamContentContainerId
  );
  const selectedTeamId = e.target.id;

  const selectedTeamData = teamsData.find((team) => team.id === selectedTeamId);
  const images = selectedTeamData.images;
  console.log(images);

  //   WE need a carousel with the images of the selected data.
  teamContentContainerElement.innerHTML = getCarouselOuterStructure();

  const carouselImageContainer = document.getElementById(
    "carousel-item-parent"
  );

  //   add the images

  images.forEach((image, idx) => {
    const divElement = document.createElement("div");

    idx === 0
      ? divElement.classList.add("carousel-item", "active")
      : divElement.classList.add("carousel-item");

    divElement.innerHTML = `<img class="d-block w-100" src="${image}" alt="First slide">`;

    carouselImageContainer.append(divElement);
  });
});

function displayTeamPills(teamsData) {
  const container = document.getElementById(teamPillsContainerId);

  teamsData.forEach((team) => {
    const teamPillElement = document.createElement("div");
    teamPillElement.classList.add("card");
    teamPillElement.classList.add("m-2");

    teamPillElement.innerHTML = `<div id=${team.id} class="card-body">${team.name}</div>`;

    container.append(teamPillElement);
  });
}

function getCarouselOuterStructure() {
  return `
    <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel" style="width:70vw;height:50vh">
      
        <div class="carousel-inner h-100" id="carousel-item-parent">
        
        </div>
      
      <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>`;
}

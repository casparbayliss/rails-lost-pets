const clickRadioButtons = () => {
  console.log("Radio buttons are ready");
  const lostRadioButton = document.querySelector("#lost-radio-btn");
  const foundRadioButton = document.querySelector("#found-radio-btn");
  const lostPetButton = document.querySelector("#lost-pet-btn");
  const foundPetButton = document.querySelector("#found-pet-btn");
  console.log("Ready to remove Date Entry");
  const dateEntry = document.querySelector("#date-entry");
  const ageEntry = document.querySelector("#age-entry");
  foundPetButton.addEventListener("click", () => {
    console.log("Found button has been clicked");
    foundRadioButton.checked = true;
    foundPetButton.className = "btn btn-primary lost-or-found-btn font-weight-bold";
    lostPetButton.className = "btn btn-outline-secondary lost-or-found-btn font-weight-bold";
    dateEntry.style.display = "none";
    ageEntry.style.display = "none";
  });
  lostPetButton.addEventListener("click", () => {
    console.log("Lost button has been clicked");
    lostRadioButton.checked = true;
    lostPetButton.className = "btn btn-primary lost-or-found-btn font-weight-bold";
    foundPetButton.className = "btn btn-outline-secondary lost-or-found-btn";
    dateEntry.style.display = "block";
    ageEntry.style.display = "block";
  });
}

export {clickRadioButtons};

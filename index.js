function search() {
  const searchValue = document.getElementById("country-search").value;
  searchShow(searchValue);
}

function searchShow(country) {
  const url = `https://restcountries.com/v3.1/name/${country}`;
  fetch(url)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      renderInfo(data);
    })
    .catch((error) => {
      renderError(error.message);
    });
}

function renderError() {
  const errorElement = document.createElement("div");
  errorElement.innerHTML =
    "<p id='firstError'>the country name is incorrect!!</p><p id='secondError'>Please enter a valid country name </p> ";
  errorElement.id = "error-message";

  // create input container for the btn search and the input
  const infoSection = document.getElementById("countryInfo");
  const inputContainer = document.createElement("div");
  inputContainer.id = "inputContainer";
  infoSection.appendChild(inputContainer);
  const inputC = document.getElementById("inputContainer");

  // create input for error

  const input = document.createElement("input");
  input.setAttribute("type", "text");
  input.id = "country-search";
  input.placeholder = "enter any country name";
  inputC.appendChild(input);

  // create search btn for error

  const btn = document.createElement("button");
  btn.textContent = "Search";
  btn.addEventListener("click", () => search());
  btn.id = "searchBtn";
  inputC.appendChild(btn);
  infoSection.appendChild(errorElement);
}

// randomfunction

const getRandomCountry = async () => {
  try {
    const response = await fetch("https://restcountries.com/v3.1/all");
    const data = await response.json();
    const countryList = data.map((country) => country.name.common);
    const randomIndex = Math.floor(Math.random() * countryList.length);
    const randomCountry = countryList[randomIndex];
    searchShow(randomCountry);
  } catch (error) {
    console.log("Error:", error);
  }
};

const renderInfo = (data) => {
  const infoSection = document.getElementById("countryInfo");
  infoSection.innerHTML = "";
  const { flags, capital, population, continents, maps, name, timezones } =
    data[0];
  const inputContainer = document.createElement("div");
  inputContainer.id = "inputContainer";
  infoSection.appendChild(inputContainer);
  const inputC = document.getElementById("inputContainer");

  // create input

  const input = document.createElement("input");
  input.setAttribute("type", "text");
  input.id = "country-search";
  input.placeholder = "enter any country name";
  inputC.appendChild(input);

  // create search btn

  const btn = document.createElement("button");
  btn.textContent = "Search";
  btn.addEventListener("click", () => search());
  btn.id = "searchBtn";
  inputC.appendChild(btn);

  //creat flag

  const flagEL = createImage(flags.png, "The flag of the country");
  infoSection.appendChild(flagEL);

  // paragraph

  const resume = document.createElement("div");
  resume.id = "resume";
  resume.innerHTML = `<p>${name.common} is a prominent country located in ${continents[0]}, It operates on ${timezones[0]}
   zone. With a population of approximately ${population} people.<br>
   ${capital[0]} is the capital city, serves as the political and cultural center of the nation. ${name.common}
   rich history, stunning landscapes, and vibrant cities make it an enticing
   destination for both locals and tourists alike.<br> You can explore the location of ${name.common} on the map
    by following this link: <a href='${maps.googleMaps}' target='_blank'>${name.common} Map</a></p>
    `;
  infoSection.appendChild(resume);

  // random button

  const randomBtn = document.createElement("button");
  randomBtn.id = "randomBtn";
  randomBtn.innerText = "Find Random Country";
  randomBtn.addEventListener("click", getRandomCountry);
  infoSection.appendChild(randomBtn);
};

const createImage = (url, alt) => {
  const image = document.createElement("img");
  image.src = url;
  image.alt = alt;
  image.id = "flag-img";
  return image;
};

const main = () => {
  const infoSection = document.getElementById("countryInfo");
  const inputContainer = document.createElement("div");
  inputContainer.id = "inputContainer";
  infoSection.appendChild(inputContainer);
  const inputC = document.getElementById("inputContainer");

  // create input

  const input = document.createElement("input");
  input.setAttribute("type", "text");
  input.id = "country-search";
  input.placeholder = "enter any country name";
  inputC.appendChild(input);

  // create search btn

  const btn = document.createElement("button");
  btn.textContent = "Search";
  btn.addEventListener("click", () => search());
  btn.id = "searchBtn";
  inputC.appendChild(btn);
};
document.addEventListener("DOMContentLoaded", main);



const searchBtn = document.getElementById('searchBtn')
searchBtn.addEventListener('click',()=>search())
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
    });
  }    
  
  const getRandomCountry = async () => {
    try {
      const response = await fetch('https://restcountries.com/v3.1/all');
      const data = await response.json();
      const countryList = data.map((country) => country.name.common);
      const randomIndex = Math.floor(Math.random() * countryList.length);
      const randomCountry = countryList[randomIndex];
      searchShow(randomCountry);
    } catch (error) {
      console.log('Error:', error);
    }
  };
    
    

const renderInfo = (data) => {
const infoSection = document.getElementById('countryInfo');
infoSection.innerHTML = '';
const {flags , capital,population,continents,maps,name,timezones,borders}=data[0]  
const flagEL = createImage(flags.png, 'The flag of the country');

infoSection.appendChild(flagEL);

  // paraghraph


  const resume = document.createElement('div');
  resume.id = 'resume';
  resume.innerHTML = `<p>${name.common} is a prominent country located in ${continents[0]}, It operates on ${timezones[0]}
   zone. With a population of approximately ${population} people.<br>
   ${capital[0]} is the capital city, serves as the political and cultural center of the nation. ${name.common}
   rich history, stunning landscapes, and vibrant cities make it an enticing
   destination for both locals and tourists alike.<br> You can explore the location of ${name.common} on the map
    by following this link: <a href='${maps.googleMaps}' target='_blank'>${name.common} Map</a></p>
    `;
    infoSection.appendChild(resume);


// borders
    // const bordersEl = document.createElement('div')
    // bordersEl = ` <p>have borders with:</p>
    // ${borders && borders.length>0 && borders.map((border) => `<p id=${border}>${border}</p>`).join('  ')}`
    // infoSection.appendChild(bordersEl);
// random button

  const randomBtn = document.createElement('button')
  randomBtn.innerText='Find Random Country'
  randomBtn.addEventListener('click',getRandomCountry)
  infoSection.appendChild(randomBtn)
};  

const createElement = (label, data) => {
  const element = document.createElement('h1');
  element.textContent = `${label}: ${data}`;
  return element;
};  

const createImage = (url, alt) => {
  const image = document.createElement('img');
  image.src = url;
  image.alt = alt;
  image.id='flag-img'
  return image;
};  
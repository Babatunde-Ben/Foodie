const container = document.querySelector(".container");
let url = `https://api.spoonacular.com/recipes/random?number=9&tags=vegetarian&apiKey=838b6353edcb4753a360558332db1166`;

// ------ for front page ------

function fetchFood(url) {
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      const result = data.recipes;
      generateFood(result);
    })
    .catch((error) => {
      console.log(error);
    });
}

function generateFood(fetchArray) {
  const content = fetchArray.map(function (item) {
    const { image, title, spoonacularSourceUrl, summary } = item;

    return ` <a href="${spoonacularSourceUrl}" target="_blank"><div class="food-container">
    <img
      src="${image}"
      class="img"
      alt="${title}"
    />
    <h2 class="food-title">${title}</h2>
    <p class="desc">
    ${summary} 
    </p>
    <a href="${spoonacularSourceUrl}" target="_blank" class="read-more">Read more</a>
  </div>
  </a>
  
  `;
  });
  container.innerHTML = content.join("");
}

// generate food from spoonacular API

window.addEventListener("DOMContentLoaded", fetchFood(url));

//------ for search page ------

function fetchFoodSearch(url) {
  fetch(url)
    .then((res) => res.json())
    // .then(console.log(res.status))
    .then((data) => {
      console.log(data.status);
      const searchResult = data.searchResults[0].results;
      if (searchResult.length === 0) {
        container.innerHTML = `<p class="waiting-text-search">No matching results, <br> Try a different search</p>`;
      } else {
        generateFoodSearch(searchResult);
      }
    })
    .catch((error) => {
      console.log(error);
    });
}

function generateFoodSearch(fetchArray) {
  const content = fetchArray.map(function (item) {
    const { image, name, link, content } = item;
    return ` <a href="${link}" target="_blank"><div class="food-container">
    <img
      src="${image}"
      class="img"
      alt="${name}"
    />
    <h2 class="food-title">${name}</h2>
    <p class="desc">
    ${content} 
    </p><a href="${link}" target="_blank" class="read-more">Read more</a>
  </div></a>`;
  });
  container.innerHTML = content.join("");
}

// JS for search functionality

const form = document.querySelector(".search-form");
const searchBox = document.querySelector(".search-box");
const searchResultText = document.querySelector(".search-result-text");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  var searchValue = searchBox.value;
  const container = document.querySelector(".container");
  searchResultText.innerHTML = `search results for "<b>${searchValue}</b>"...`;
  container.innerHTML = `<section class="waiting">
    <div class="preloader">
      <img src="./images/pre-loader.svg" alt="preloader" />
    </div>
    <p class="waiting-text">waiting for results...</p>
  </section>`;

  url = `https://api.spoonacular.com/food/search?query=${searchValue}&number=9&apiKey=838b6353edcb4753a360558332db1166`;

  fetchFoodSearch(url);
  form.reset();
});

// JS for responsive navbar

const openMenu = document.querySelector(".menu-bar");
const closeMenu = document.querySelector(".close");
const nav = document.querySelector(".nav-header nav");
const navLinks = document.querySelectorAll(".nav-links");

openMenu.addEventListener("click", () => {
  nav.classList.add("show-link");
});
closeMenu.addEventListener("click", (e) => {
  nav.classList.remove("show-link");
});

navLinks.forEach((item) => {
  item.addEventListener("click", () => {
    nav.classList.remove("show-link");
  });
});

// JS for scroll back-to-top
window.addEventListener("scroll", () => {
  const scrollHeight = window.pageYOffset;
  const topLink = document.querySelector(".top");

  if (scrollHeight > 600) {
    topLink.classList.add("show-scroll");
  } else {
    topLink.classList.remove("show-scroll");
  }
});

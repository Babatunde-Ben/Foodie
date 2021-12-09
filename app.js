const container = document.querySelector(".container");

function fetchFood() {
  fetch(
    `https://api.spoonacular.com/food/search?query=pineapple&number=9&apiKey=838b6353edcb4753a360558332db1166`
  )
    .then((res) => res.json())
    .then((data) => {
      const result = data.searchResults[0].results;
      console.log(result);
      generateFood(result);
    });
}

// generate food from spononacular API below here

window.addEventListener("DOMContentLoaded", fetchFood);

function generateFood(fetchArray) {
  const content = fetchArray.map(function (item) {
    const { image, name, link, content } = item;

    return ` <a href="${link}"><div class="food-container">
    <img
      src="${image}"
      class="img"
      alt="${name}"
    />
    <h2 class="food-title">${name}</h2>
    <p class="desc">
    ${content} 
    </p>
  </div></a>
  
  `;
  });
  container.innerHTML = content.join("");
}

// JS for footer

const currentYear = new Date().getFullYear();
const year = document.querySelector(".year");
// console.log(year);
year.textContent = currentYear;

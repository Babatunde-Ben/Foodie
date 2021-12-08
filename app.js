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

// fetchFood();

// generate food from spononacular API here

// window.addEventListener("DOMContentLoaded", fetchFood);

function generateFood(fetchArray) {
  const content = fetchArray.map(function (item) {
    return ` <div class="food-container">
    <img
      src="${item.image}"
      class="img"
      alt="${item.name}"
    />
    <h2 class="food-title">${item.name}</h2>
    <p class="desc">
    ${item.content.slice(0, 105)} ...<a href="${item.link}"> Read more</a>
    </p>
  </div>`;
  });
  container.innerHTML = content.join("");
}

// JS for footer

const currentYear = new Date().getFullYear();
const year = document.querySelector(".year");
// console.log(year);
year.textContent = currentYear;

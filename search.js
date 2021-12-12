const form = document.querySelector(".search-form");
const searchBox = document.querySelector(".search-box");
// const container = document.querySelector(".container");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const searchValue = searchBox.value;
  const container = document.querySelector(".container");
  container.innerHTML = `<section class="waiting">
    <div class="preloader">
      <img src="./images/pre-loader.svg" alt="preloader" />
    </div>
    <p class="waiting-text">waiting for results...</p>
  </section>`;
  console.log(searchValue);
  url = `https://api.spoonacular.com/food/search?query=${searchValue}&number=9&apiKey=838b6353edcb4753a360558332db1166`;
  fetchFood(url);
  form.reset();
});

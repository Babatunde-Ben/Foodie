const form = document.querySelector(".search-form");
const searchBox = document.querySelector(".search-box");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  const searchValue = searchBox.value;
  console.log(searchValue);
  url = `https://api.spoonacular.com/food/search?query=${searchValue}&number=9&apiKey=838b6353edcb4753a360558332db1166`;
  fetchFood(url);
  form.reset();
});

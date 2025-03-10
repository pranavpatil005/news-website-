
let apiKey ="5c5cdc05ffc1485bad3a88fa1762b146";


const container = document.querySelector(".container");
const optionsContainer = document.querySelector(".options-container");
const country = "in";
const options = [
  "general",
  "entertainment",
  "health",
  "science",
  "sports",
  "technology",
];


let requestURL;


const generateUI = (articles) => {
  for (let item of articles) {
    let card = document.createElement("div");
    card.classList.add("news-card");
    card.innerHTML = `<div class="news-image-container">
    <img src="${item.urlToImage || "./newspaper.jpg"}" alt="" />
    </div>
    <div class="news-content">
      <div class="news-title">
        ${item.title}
      </div>
      <div class="news-description">
      ${item.description || item.content || ""}
      </div>
      <a href="${item.url}" target="_blank" class="view-button">Read More</a>
    </div>`;
    container.appendChild(card);
  }
};
const getNews = async () => {
  container.innerHTML = "";
  let response = await fetch(requestURL);
  if (!response.ok) {
    alert("Data unavailable at the moment. Please try again later");
    return false;
  }
  let data = await response.json();
  generateUI(data.articles);
};
const selectCategory = (e, category) => {
  let options = document.querySelectorAll(".option");
  options.forEach((element) => {
    element.classList.remove("active");
  });
  requestURL=`https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&apiKey=${apiKey}`;
  e.target.classList.add("active");
  getNews();
};




const createOptions = () => {
  for (let i of options) {
    optionsContainer.innerHTML += `<button class="option ${
      i == "general" ? "active":""
    }"onclick="selectCategory(event,'${i}')">${i}</button>`;
  }
};



const init=()=>{
  optionsContainer.innerHTML = "";
  getNews();
  createOptions();
};
window.onload = () => {
  requestURL=`https://newsapi.org/v2/top-headlines?country=${country}&category=general&apiKey=${apiKey}`;
  init();
};























const darkmodeToggle = document.getElementById('darkmode-toggle');
const cssLink = document.getElementById('css-link');

darkmodeToggle.addEventListener('change', () => {
  setTimeout(() => {
    if (darkmodeToggle.checked) {
      cssLink.href = 'dark-theme.css';
    } else {
      cssLink.href = 'light-theme.css';
    }
  }, 300);
});

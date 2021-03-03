//For looping logic using javascript later on
let images = [
  {
    src_image: "./assets/images/neural1.jpg",
    link_image: "https://wallpapercave.com/w/wp6077863",
    deskripsi_image:
      "Neural Network linked into each other to perform motoric operation.",
    title_image: "Caveman",
  },
  {
    src_image: "./assets/images/neural2.jpg",
    link_image: "https://wallpapercave.com/w/wp6690886",
    deskripsi_image:
      "Interlink is required in order to create a Harmony.",
    title_image: "Also by caveman",
  },
  {
    src_image: "./assets/images/neural3.jpg",
    link_image: "https://wallpapercave.com/w/wp6690890",
    deskripsi_image:
      "Unity creates a great teamwork.",
    title_image: "again by caveman",
  },
];

let profile_title = document.getElementById("profile-title");
let index = 1;
let show = true;
const navlist = document.querySelector(".menu ul");
const btnBurger = document.querySelector("#button-nav");

// Function
const showLink = (show) => {
  console.log(show);
  if (show) {
    navlist.className = "show";
  } else {
    navlist.className = " ";
  }
};
const buildArticle = (data) => {
  let article = document.getElementById("article");
  for (let i = 0; i < data.length; i++) {
    let { src_image, title_image, deskripsi_image, link_image } = data[i];
    var row = `
      <article>
        <img src="${src_image}" width="30%" alt="${title_image}" />
        <div class="desc">
          <div>
            <h2>${title_image}</h2>
            <p>${deskripsi_image}</p>
          </div>
          <a href="${link_image}">Visit Wallpapercave</a>
        </div>
      </article>
    `;
    article.innerHTML += row;
  }
};

const showImage = (n) => {
  let image = document.getElementsByClassName("image");
  let indexImage = document.getElementsByClassName("indexImage");
  if (n > image.length) {
    index = 1;
  } else if (n < 1) {
    index = image.length;
  }
  for (let i = 0; i < image.length; i++) {
    image[i].style.display = "none";
    indexImage[i].className = indexImage[i].className.replace(" active", "");
  }
  image[index - 1].style.display = "block";
  indexImage[index - 1].className += " active";
}; 


// DOM part
buildArticle(images);
profile_title.innerText = "About Me";
showImage(index);

const changeImage = (n) => {
  if (n == "prev") {
    showImage((index -= 1));
  } else if (n == "next") {
    showImage((index += 1));
  } else {
    showImage((index = n));
  }
};

//EventListener
btnBurger.addEventListener("click", (e) => {
  showLink((show = !show));
  e.preventDefault();
});


/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}
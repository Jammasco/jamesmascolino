const sun = "https://www.uplooder.net/img/image/55/7aa9993fc291bc170abea048589896cf/sun.svg";
const moon = "https://www.uplooder.net/img/image/2/addf703a24a12d030968858e0879b11e/moon.svg";

function darklight2() {
  document.getElementById("lightresume").classList = "fadeOut";
  document.getElementById("darkresume").classList = "fadeIn";
  if (document.getElementById("darklight").src == "https://www.uplooder.net/img/image/55/7aa9993fc291bc170abea048589896cf/sun.svg"){
    document.getElementById("darklight").src = "https://www.uplooder.net/img/image/2/addf703a24a12d030968858e0879b11e/moon.svg";
    document.getElementById("lightresume").classList = "fadeIn";
    document.getElementById("darkresume").classList = "fadeOut";
    } else{
    document.getElementById("darklight").src = "https://www.uplooder.net/img/image/55/7aa9993fc291bc170abea048589896cf/sun.svg";
    document.getElementById("lightresume").classList = "fadeOut";
    document.getElementById("darkresume").classList = "fadeIn";
    }
  var body = document.body;
  body.classList.toggle("dark-mode");
  var darkButton = document.querySelector("#darklight");
  darkButton.classList.toggle("light-mode");
}

function darklight() {
  if (document.getElementById("darklight").src == "https://www.uplooder.net/img/image/55/7aa9993fc291bc170abea048589896cf/sun.svg"){
    document.getElementById("darklight").src = "https://www.uplooder.net/img/image/2/addf703a24a12d030968858e0879b11e/moon.svg";
    } else{
    document.getElementById("darklight").src = "https://www.uplooder.net/img/image/55/7aa9993fc291bc170abea048589896cf/sun.svg";
    }
  var body = document.body;
  body.classList.toggle("dark-mode");
  var darkButton = document.querySelector("#darklight");
  darkButton.classList.toggle("light-mode");
}

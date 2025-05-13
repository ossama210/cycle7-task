const token = "O0cRcKtouRLe1FNcLDigUIKoV4reQ611JfgT3K8IFEk=";
const identifier = ["spotify.com", "apple.com", "github.com"];
options = { method: "GET", headers: { Authorization: `Bearer ${token}` } };

const brandsContainer = document.getElementById("brands__container");

Promise.all([
  fetch(`https://api.brandfetch.io/v2/brands/${identifier[0]}`, options),
  fetch(`https://api.brandfetch.io/v2/brands/${identifier[1]}`, options),
  fetch(`https://api.brandfetch.io/v2/brands/${identifier[2]}`, options),
])
  .then((responses) => {
    return Promise.all(responses.map((response) => response.json()));
  })
  .then((data) => {
    data.forEach((brand) => {
      console.log(brand);
      const brandContainer = document.createElement("div");
      brandContainer.classList.add("brand__container");

      const brandName = document.createElement("h2");
      brandName.textContent = brand.name;

      const brandLogo = document.createElement("img");
      brandLogo.src = brand.logos[1].formats[0].src;
      brandLogo.alt = `${brand.name} logo`;
      brandLogo.style.width = "100px";
      brandLogo.style.height = "100px";

      const brandDescription = document.createElement("p");
      brandDescription.textContent =
        brand.description || "No description available.";

      brandContainer.appendChild(brandName);
      brandContainer.appendChild(brandLogo);
      brandContainer.appendChild(brandDescription);

      brandsContainer.appendChild(brandContainer);
    });
  })
  .catch((error) => {
    console.log(error);
  });

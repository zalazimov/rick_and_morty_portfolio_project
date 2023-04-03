const form = document.querySelector(".search-form");

async function fetchData(inputName) {
  try {
    const response = await fetch(inputName);
    const parsedData = await response.json();
    return parsedData;
  } catch (error) {
    console.log(error);
  }
}

form.addEventListener("submit", (event) => {
  event.preventDefault();

  fetchData(
    `https://rickandmortyapi.com/api/character/?name=${event.target.character.value}`
  ).then((ele) => {
    if (ele.hasOwnProperty("error") && ele.error === "There is nothing here") {
      const pError = document.createElement("p");
      pError.textContent = "Error -- There is nothing here";
      const mainTag = document.querySelector("main");
      mainTag.innerHTML = "";
      mainTag.append(pError);
    } else {
      const mainTag = document.querySelector("main");
      mainTag.innerHTML = "";
      const ulTag = document.createElement("ul");
      mainTag.append(ulTag);
      nameArr(ele.results);
    }
  });
});

function nameArr(array) {
  array.forEach((characterObj) => {
    // console.log(characterObj.name);
    const charName = characterObj.name;
    const newItem = document.createElement("li");
    newItem.setAttribute("class", "character-name");
    newItem.innerHTML = `<span class="spanText">${charName}</span><img src="${characterObj.image}" alt="${characterObj.name}"/>`;
    // const imgTag = document.createElement("img");
    // imgTag.setAttribute("src", characterObj.image);
    // imgTag.setAttribute("alt", `Picture of ${characterObj.name}`);
    // newItem.appendChild(imgTag);
    const ulTag2 = document.querySelector("ul");
    ulTag2.appendChild(newItem);
  });
}

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
    // console.log(ele);
    // console.log(ele.results);
    // console.log(ele.results[0].name);

    let arr = ele.results;
    nameArr(arr);
  });
});

function nameArr(array) {
  array.forEach((characterObj) => {
    console.log(characterObj.name);
    const charName = characterObj.name;
    const mainTag = document.querySelector("main");
    const divTag = document.createElement("div");
    divTag.setAttribute("class", "character-name");
    divTag.textContent = charName;
    const imgTag = document.createElement("img");
    imgTag.setAttribute("src", characterObj.image);
    imgTag.setAttribute("alt", `Picture of ${characterObj.name}`);
    divTag.appendChild(imgTag);
    mainTag.append(divTag);

    // console.log(characterObj.name);
  });
}

// console.log(nameInfo);

// function nameCard()

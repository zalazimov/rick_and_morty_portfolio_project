const form = document.querySelector(".search-form");

// Creating a function that will do a fetch
async function fetchData(inputName) {
  try {
    const response = await fetch(inputName);
    const parsedData = await response.json();
    return parsedData;
  } catch (error) {
    console.log(error);
  }
}

// Creating an event, submit type
form.addEventListener("submit", (event) => {
  event.preventDefault();

  // Performing a fetch
  fetchData(
    `https://rickandmortyapi.com/api/character/?name=${event.target.character.value}`
  ).then((ele) => {
    // Creating a condition that will determine whether user input is erroneous or a valid search
    if (ele.hasOwnProperty("error") && ele.error === "There is nothing here") {
      // error search, will create a p tag with an error message and add that to the DOM, at the level of the main tag
      const pError = document.createElement("p");
      pError.textContent = "Error -- There is nothing here";
      const mainTag = document.querySelector("main");
      mainTag.innerHTML = "";
      mainTag.append(pError);
    } else {
      // valid search, which will clear the contents of the main tag, and then create an unordered list tag and append it to the main tag
      const mainTag = document.querySelector("main");
      mainTag.innerHTML = "";
      const ulTag = document.createElement("ul");
      mainTag.append(ulTag);
      // calling my nameArr function
      nameArr(ele.results);
    }
  });
});

// Creating a function that will take in an array and iterate through each element, and will take the corresponding name and image for the element, before putting them inside a newly created list item, and appending that item to an unordered list
function nameArr(array) {
  array.forEach((characterObj) => {
    const charName = characterObj.name;
    // Creating new list item tag
    const newItem = document.createElement("li");
    // Adding attributes of the name and image to the list item
    newItem.setAttribute("class", "character-name");
    newItem.innerHTML = `<span class="spanText">${charName}</span><img src="${characterObj.image}" alt="${characterObj.name}"/>`;
    // Appending the list item to the unordered list
    const ulTag2 = document.querySelector("ul");
    ulTag2.appendChild(newItem);
  });
}

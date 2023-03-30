const form = document.querySelector(".search-form");

async function getWeatherInfo(base_URL) {
  const response = await fetch(
    `https://rickandmortyapi.com/api/character${char_num}`
  );
  const parsedData = await response.json();
  return parsedData;
}

const citySelect = document.querySelector("#citySelect");
const cities = [
  { value: "msk", name: "Москва" },
  { value: "spb", name: "Санкт-Петербург" },
  { value: "rnd", name: "Ростов-На-Дону" },
];

console.log(citySelect);

console.log('cities instance: ', cities instanceof Array)
try {
  cities.forEach((city) => {
    const option = document.createElement("option");
    option.value = city.value;
    option.textContent = city.name;

    const isHtml = citySelect instanceof HTMLElement;
    const citytype = typeof citySelect
    console.log("citytype: ", citytype)
    console.log("isHtml: ", isHtml);
    console.log("citySelect: ", citySelect);

    if (isHtml) { 
      citySelect.appendChild(option);
    }

  });
} catch (error) {
  console.log("ОШИБКА ААААА СИТИСЛЕКТ!!!!", error);
}

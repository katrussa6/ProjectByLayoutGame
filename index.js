const BODY = document.querySelector("body");
const NEWS = document.querySelector(".news");
const citySelect = document.querySelector("#citySelect");

const newsArr = [
  {
    title: "Новости о проекте 1.0:",
    newsText: `- 20.03.2025 вышло обновление 2.30.127.906586
         <br> - Внесееные изменения: добавлена локация 3.2
         <br> - Исправлены проблемы с прохождением локации 6.9
         <br> - Добавлены новые стили оружия`,
  },
  {
    title: "Новости о проекте 1.1:",
    newsText: `- Мы теперь в Telegram!
          <br> - Следи за событиями - получай подарки!
           `,
  },
];

newsArr.forEach((element) => {
  NEWS.innerHTML += `
    <h2>${element.title}</h2>
    <p>${element.newsText}</p>
            
        
     `;
});

const cities= [
  {value:"msk", name:"Москва"},
  {value:"spb", name:"Санкт-Петербург"},
  {value:"rnd", name:"Ростов-На-Дону"},
]

console.log(citySelect)
cities.forEach(city =>{
  const option = document.createElement("option");
  option.value = city.value;
  option.textContent = city.name;
  citySelect.appendChild(option)
})


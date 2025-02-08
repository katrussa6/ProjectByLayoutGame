const citySelect = document.querySelector("#citySelect");
const OpenModalButton = document.getElementById("OpenModalButton");
const modal = document.getElementById("modal");
const CloseModalButton = document.getElementById("CloseModalButton");
const LoginForm = document.getElementById("LoginForm");
const LabelName = document.getElementById("labelName");

LabelName.addEventListener("click", () => {
  LoginForm.elements.login.focus();
});

LoginForm.addEventListener("blur", () => {
  LoginForm.elements.login.focus();
});

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

const persons = [
  { name: "Иван", password: "123" },
  { name: "Ярослав", password: "1234" },
  { name: "Виктор", password: "12345" },
];

OpenModalButton.addEventListener("click", function () {
  modal.style.display = "block";
});
CloseModalButton.addEventListener("click", function () {
  modal.style.display = "none";
});

LoginForm.addEventListener("submit", function (event) {
  event.preventDefault();

  const login = this.querySelector('[name="login"]').value;
  const password = this.querySelector('[name="password"]').value;
  const isPasswordWrong = checkPassword(password);
  const user = persons.find((person) => person.name === login);
console.log("sdkfjlfksd", user)
  if (!user) {
    alert(`Не удалось найти пользователя!`);
    this.reset();
  } else if (isPasswordWrong) {
    console.log("wrong password");
  } else if (user.password === password) {
    alert(`Добро пожаловать,${user.name} !`);
    modal.style.display = "none";
  } else {
    alert("Пароль не верный");
    this.reset();
  }
});

LoginForm.addEventListener("keydown", (event) => {
  if (event.key === "Escape") modal.style.display = "none";
});

const validation = /[! #^&*+@()-+]/g;

function checkPassword(value) {
  const isWarningValidatioon = value.match(validation);
  if (isWarningValidatioon) {
    alert("По ле должно содержать английские буквы и цифры");
    return true;
  }

  return false;
}
function myFunction() {
  var x = document.getElementById("passwordinput");
  if (x.type === "password") {
    x.type = "text";
  } else {
    x.type = "password";
  }
}

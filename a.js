const emailInput = document.querySelector("#email");
const passInput = document.querySelector("#pass");
const btn = document.querySelector("button");

const user = `[
    {"email":"mrfredyon@gmail.com","password":"Dimadima21" }
]`;

const data = JSON.parse(user);

console.log(data);
btn.addEventListener("click", () => {
  try {
    if (!/^[a-zA-Z0-9\_\-\.]+@[a-z]+\.[a-z]+/g.test(emailInput.value))
      throw new Error("ошибка ввода почты");
    const checkE = data.some((el) =>
      el.email == emailInput.value ? true : false
    );
    const checkP = data.some((el) =>
      el.password == passInput.value ? true : false
    );
    if (checkE && checkP) alert("Suessful");
    if (!checkE) throw new Error("Неверный логин");
    if (!checkP) throw new Error("Неверный пароль");
    else alert("suessful");
  } catch (error) {
    alert(error.message);
  }
});

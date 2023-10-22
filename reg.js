const emailInput = document.querySelector("#email");
const passInput = document.querySelector("#pass");
const confPass = document.querySelector("#confPass");
const btn = document.querySelector("button");

const user = `[
    {"id: 1,email":"mrfredyon@gmail.com","password":"Dimadima21" }
]`;

const data = JSON.parse(user);

btn.addEventListener("click", () => {
  try {
    if (!/^[a-zA-Z0-9\_\-\.]+@[a-z]+\.[a-z]+/g.test(emailInput.value))
      throw new Error("почта не верная");
    if (!passInput.value == confPass.value) throw new Error("пароль не верный");
    else {
      data.forEach((el, index) => {
        data.push(
          `{id:${index}, email: ${emailInput.value}, password: ${passInput}}`
        );
      });
    }
  } catch (error) {
    alert(error.message);
  }
});

console.log(data);

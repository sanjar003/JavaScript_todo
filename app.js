let inputBx = document.querySelector("#inputBx");
let list = document.querySelector("#list");

inputBx.addEventListener("keyup", function (event) {
  if (event.key == "Enter") {
    if (this.value == "") {
      alert("Введите текст");
    } else {
      addItem(this.value);
      console.log(this.value);
      this.value = "";
    }
  }
});

let addItem = (inputBx) => {
  let listIt = document.createElement("li");
  listIt.classList = "li";
  listIt.innerHTML = `${inputBx}<i>x</i>`;

  listIt.addEventListener("click", function () {
    this.classList.toggle("done");
  });

  listIt.querySelector("i").addEventListener("click", function () {
    listIt.remove();
  });

  list.appendChild(listIt);
};

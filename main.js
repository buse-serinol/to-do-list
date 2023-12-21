// html elementleri
const form = document.querySelector(".grocery-form");
const alert = document.querySelector(".alert");
const grocery = document.querySelector("#grocery"); // input değeri
const submitBtn = document.querySelector(".submit-btn");
const container = document.querySelector(".grocery-container");
const list = document.querySelector(".grocery-list");
const clearBtn = document.querySelector(".clear-btn");

let editID = "";
let editElement; //düzenleme yapılan öğeyi temsil eder
let editFlag = false; // düzenleme modunda olup olmadığını belirtir.

// form gönderildiğinde addItem fonk. çağır.

form.addEventListener("submit", addItem);

//! functions
function addItem(e) {
  e.preventDefault();
  const value = grocery.value; // input giriş değerini al
  const id = new Date().getTime().toString();

  if (value !== "" && !editFlag) {
    const element = document.createElement("article");
    let attribute = document.createAttribute("data-id"); // yeni bir veri kimliği oluşturur
    attribute.value = id;
    element.setAttributeNode(attribute);
    element.classList.add("grocery-item");

    element.innerHTML = `
                <p class="tittle">${value}</p>
                <div class="btn-container">
                    <button class="edit-btn" type="button">
                        <i class="fa-solid fa-pen-to-square"></i>
                    </button>
                    <button class="delete-btn" type="button">
                        <i class="fa-solid fa-trash"></i>
                    </button>
                </div>`;
    list.appendChild(element);
    displayAlert("Başarıyla eklendi.", "success")
    grocery.value = "";
  }
}

//alert function

function displayAlert(text, action){
  alert.textContent = text;
  alert.classList.add(`alert-${action}`);
  
  setTimeout(function(){
alert.textContent = text;
alert.classList.remove(`alert-${action}`)
  },2000)
}
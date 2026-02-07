let data = [
  { name: "Nacho", phone: "966112233", age: 40 },
  { name: "Ana", phone: "911223344", age: 35 },
  { name: "Mario", phone: "611998877", age: 15 },
  { name: "Laura", phone: "633663366", age: 17 },
];

function renderList() {
  const lista = document.getElementById("lista");
  lista.innerHTML = "";

  data.forEach((person) => {
    const li = document.createElement("li");
    li.textContent = `${person.name} - ${person.phone} - ${person.age} años`;
    lista.appendChild(li);
  });
}

function newPerson(person) {
  return new Promise((resolve, reject) => {
    const exists = data.some((p) => p.phone === person.phone);

    if (exists) {
      reject("Error: el teléfono ya existe");
    } else {
      data.push(person);
      resolve("Persona añadida correctamente");
    }
  });
}

function deletePerson(phone) {
  return new Promise((resolve, reject) => {
    const index = data.findIndex((p) => p.phone === phone);

    if (index === -1) {
      reject("Error: el teléfono no existe");
    } else {
      data.splice(index, 1);
      resolve("Persona eliminada correctamente");
    }
  });
}

document.getElementById("addForm").addEventListener("submit", (e) => {
  e.preventDefault();

  const person = {
    name: document.getElementById("name").value,
    phone: document.getElementById("phone").value,
    age: Number(document.getElementById("age").value),
  };

  newPerson(person)
    .then((msg) => {
      document.getElementById("message").textContent = msg;
      renderList();
    })
    .catch((err) => {
      document.getElementById("message").textContent = err;
    });
});

document.getElementById("deleteForm").addEventListener("submit", (e) => {
  e.preventDefault();

  const phone = document.getElementById("deletePhone").value;

  deletePerson(phone)
    .then((msg) => {
      document.getElementById("message").textContent = msg;
      renderList();
    })
    .catch((err) => {
      document.getElementById("message").textContent = err;
    });
});

// Pruebas automáticas del enunciado
newPerson({ name: "Juan", phone: "965661564", age: 60 })
  .then(renderList)
  .catch(console.error);

newPerson({ name: "Rodolfo", phone: "633663366", age: 20 })
  .then(renderList)
  .catch(console.error);

deletePerson("966112233").then(renderList).catch(console.error);

deletePerson("123456789").then(renderList).catch(console.error);

renderList();
console.log(data);

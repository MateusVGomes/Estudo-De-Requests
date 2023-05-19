let storedData, errorData;
fetch("https://reqres.in/api/users/1", {
  method: "GET",
  headers: {
    "Content-Type": "application/json",
  },
})
  .then((response) => {
    if (!response.ok) {
      return console.log("Este usuário não existe por favor digite outro");
    }
    return response.json();
  })
  .then((data) => {
    storedData = data;
    const message = storedData
      ? `O nome do usuário digitado é ${storedData.data.first_name} ${storedData.data.last_name} `
      : "";
    console.log(message);
  })
  .catch((error) => {
    console.log("Erro:", error);
  });
const newUser = {
  id: 15,
  email: "jorge@gmail.com",
  first_name: "Jorge",
  last_name: "Gomes",
  avatar: "https://reqres.in/img/faces/1-image.jpg",
};

fetch("https://reqres.in/api/users", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify(newUser),
})
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.log("Erro:", error);
  });

fetch("https://reqres.in/api/users/2", {
  method: "DELETE",
})
  .then((response) => {
    if (response.ok) {
      console.log("Usuário excluído com sucesso");
    } else {
      console.log("Erro ao excluir o usuário");
    }
  })
  .catch((error) => {
    console.log("Erro:", error);
  });
const updatedUser = {
  name: "John Doe",
  job: "Developer",
};
fetch("https://reqres.in/api/users/2", {
  method: "PUT",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify(updatedUser),
})
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.log("Erro:", error);
  });

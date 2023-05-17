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
    const message = storedData?`O nome do usuário digitado é ${storedData.data.first_name} ${storedData.data.last_name} `:'';
        console.log(message);
  })
  .catch((error) => {
    console.log("Erro:", error);
  });

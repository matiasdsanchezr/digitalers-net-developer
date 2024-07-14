const user = { username: "admin", password: "1234" };

const username = prompt("Nombre de usuario:");
const password = prompt("Contraseña:");

if (username === user.username && password === user.password)
  alert("Has iniciado sesión correctamente.");
else alert("Credenciales invalidas.");

// Alternativa
// if (username != user.username) alert("Nombre de usuario no registrado");
// else if (password != user.password) alert("Contraseña incorrecta");
// else alert("Has iniciado sesión");

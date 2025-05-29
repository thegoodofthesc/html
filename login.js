// Define your correct username and password here
const secu = {
  username: "admin",
  password: "adminwerethebest"
};

function login() {
  const user = document.getElementById("username").value;
  const pass = document.getElementById("password").value;

  if (user === secu.username && pass === secu.password) {
    alert("Login success!");
    window.location.href = "dashboard.html"; // Redirect after successful login
  } else {
    alert("Wrong login");
  }
}

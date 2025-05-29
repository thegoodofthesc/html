// Simulated "server" username/password
const USER = "admin";
const PASS = "adminwerethebest";

// No session or token, simple one-time login
let loggedIn = false;

const root = document.getElementById("root");

function renderLogin() {
  root.innerHTML = `
    <h2>Login</h2>
    <input id="username" placeholder="Username" />
    <input id="password" type="password" placeholder="Password" />
    <button id="loginBtn">Login</button>
  `;

  document.getElementById("loginBtn").onclick = () => {
    const user = document.getElementById("username").value;
    const pass = document.getElementById("password").value;

    if (user === USER && pass === PASS) {
      loggedIn = true;
      renderDashboard();
    } else {
      alert("Wrong credentials");
    }
  };
}

function renderDashboard() {
  root.innerHTML = `
    <h2>Dashboard</h2>
    <p>Welcome, ${USER}!</p>
    <button id="logoutBtn">Log out</button>
  `;

  document.getElementById("logoutBtn").onclick = () => {
    loggedIn = false;
    renderLogin();
  };
}

// On page load, always show login (no session saved)
renderLogin();

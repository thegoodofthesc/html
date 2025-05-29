const USER = "admin";
const PASS = "adminwerethebest";

const root = document.getElementById("root");

function renderLogin() {
  root.innerHTML = `
    <div class="center-box">
      <div class="login-box">
        <h2>Login</h2>
        <input id="username" placeholder="Username" />
        <input id="password" type="password" placeholder="Password" />
        <button onclick="checkLogin()">Login</button>
      </div>
    </div>
  `;
}

function checkLogin() {
  const user = document.getElementById("username").value;
  const pass = document.getElementById("password").value;

  if (user === USER && pass === PASS) {
    renderDashboard();
  } else {
    alert("Wrong credentials");
  }
}

function renderDashboard() {
  root.innerHTML = `
    <!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>Luarmor Styled Sidebar</title>
  <style>
    body {
      margin: 0;
      font-family: Arial, sans-serif;
      background-color: #0e1014;
      color: #ffffff;
      display: flex;
      height: 100vh;
    }

    .sidebar {
      width: 250px;
      background-color: #1a1d24;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      padding: 20px;
    }

    .logo {
      font-size: 24px;
      font-weight: bold;
      margin-bottom: 40px;
    }

    .nav {
      display: flex;
      flex-direction: column;
      gap: 10px;
    }

    .nav a {
      padding: 10px 15px;
      text-decoration: none;
      color: #ffffff;
      background-color: transparent;
      border-radius: 6px;
      transition: background 0.2s ease;
    }

    .nav a:hover {
      background-color: #2a2d36;
    }

    .nav a.active {
      background-color: #2f80ed;
    }

    .bottom-nav {
      border-top: 1px solid #3a3d47;
      padding-top: 15px;
    }

    .logout {
      color: #ff5f5f;
    }

    .main-content {
      flex-grow: 1;
      padding: 30px;
    }

    .tab-content {
      display: none;
    }

    #dashboard:target,
    #projects:target,
    #users:target {
      display: block;
    }

    /* Show dashboard by default */
    .main-content:not(:has(:target)) #dashboard {
      display: block;
    }
  </style>
</head>
<body>

  <div class="sidebar">
    <div>
      <div class="logo">test</div>
      <nav class="nav">
        <a href="#dashboard">Dashboard</a>
        <a href="#projects">Projects</a>
        <a href="#users">Users</a>
      </nav>
      <nav class="nav bottom-nav">
        <a href="#profile">Profile</a>
        <a href="#" class="logout">Log out</a>
      </nav>
    </div>
    <div style="font-size: 12px; color: #888;">&copy; 2025 test</div>
  </div>

  <div class="main-content">
    <div id="dashboard" class="tab-content">
      <h1>Welcome to Your Dashboard</h1>
      <p>This is your main dashboard content.</p>
    </div>

    <div id="projects" class="tab-content">
      <h1>Projects</h1>
      <p>No project created yet.</p>
    </div>

    <div id="users" class="tab-content">
      <h1>Users</h1>
      <p>No users available.</p>
    </div>

    <div id="profile" class="tab-content">
      <h1>Profile</h1>
      <p>This is your profile page.</p>
    </div>
  </div>
  `;
}

function logout() {
  location.reload(); // Reset to login
}

renderLogin();

const root = document.getElementById('root');

function renderLogin() {
  root.innerHTML = `
    <input id="username" placeholder="Username">
    <input id="password" type="password" placeholder="Password">
    <button id="loginBtn">Login</button>
    <div id="message"></div>
  `;

  document.getElementById('loginBtn').onclick = () => {
    const user = document.getElementById('username').value;
    const pass = document.getElementById('password').value;

    fetch('/api/login', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({username: user, password: pass})
    })
    .then(res => res.json())
    .then(data => {
      if (data.success) {
        renderDashboard();
      } else {
        document.getElementById('message').innerText = 'Wrong credentials';
      }
    });
  };
}

function renderDashboard() {
  root.innerHTML = `
    <h2>Welcome!</h2>
    <p>This is the dashboard.</p>
  `;
}

renderLogin();

const API_BASE = "http://localhost:4000/user";
let token = localStorage.getItem("jwt") || "";

// ✅ Simple Router
const routes = {
  "/register": "pages/register.html",
  "/login": "pages/login.html",
  "/dashboard": "pages/dashboard.html",
};

async function loadRoute() {
  const hash = location.hash.replace("#", "") || "/register";
  const route = routes[hash] || routes["/register"];

  const res = await fetch(route);
  const html = await res.text();
  document.getElementById("app").innerHTML = html;

  if (hash === "/register") initRegister();
  if (hash === "/login") initLogin();
  if (hash === "/logout") logout();
}

window.addEventListener("hashchange", loadRoute);
window.addEventListener("load", loadRoute);

// ✅ Register Handler
function initRegister() {
  document.getElementById("registerBtn").addEventListener("click", async () => {
    const name = document.getElementById("regName").value.trim();
    const email = document.getElementById("regEmail").value.trim();
    const password = document.getElementById("regPassword").value.trim();

    if (!name || !email || !password) return alert("⚠️ All fields required");

    try {
      const res = await fetch(`${API_BASE}/register`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, password }),
      });
      const data = await res.json();
      alert(data.message || (data.success ? "✅ Registered successfully!" : "❌ Failed"));
    } catch {
      alert("❌ Server error");
    }
  });
}

// ✅ Login Handler
function initLogin() {
  document.getElementById("loginBtn").addEventListener("click", async () => {
    const email = document.getElementById("loginEmail").value.trim();
    const password = document.getElementById("loginPassword").value.trim();

    if (!email || !password) return alert("⚠️ Enter credentials");

    try {
      const res = await fetch(`${API_BASE}/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });
      const data = await res.json();

      if (data.success) {
        token = data.token;
        localStorage.setItem("jwt", token);
        alert("✅ Login successful");
        location.hash = "/dashboard";
      } else {
        alert("❌ " + data.message);
      }
    } catch {
      alert("❌ Server error");
    }
  });
}

// ✅ Logout
function logout() {
  localStorage.removeItem("jwt");
  token = "";
  alert("✅ Logged out");
  location.hash = "/login";
}

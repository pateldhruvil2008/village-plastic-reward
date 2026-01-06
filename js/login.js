/* ===== LOGIN FUNCTION ===== */
function login() {
  const id = document.getElementById("userId").value;

  if (id === "") {
    alert("Enter Email or Fingerprint ID");
    return;
  }

  localStorage.setItem("villagerId", id);
  window.location.href = "villager/dashboard.html";
}

/* ===== LOGOUT FUNCTION ===== */
function logout() {
  localStorage.removeItem("villagerId");
  window.location.href = "../login.html";
}

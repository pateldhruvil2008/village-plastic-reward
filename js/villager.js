function submitPlastic() {
  const kg = document.getElementById("kg").value;
  const email = localStorage.getItem("villagerId");

  if (!email) {
    alert("Please login again");
    return;
  }

  if (kg <= 0) {
    alert("Enter valid KG");
    return;
  }

  const pointsToAdd = kg * 10;

  let leaderboard =
    JSON.parse(localStorage.getItem("leaderboard")) || {};

  if (!leaderboard[email]) {
    leaderboard[email] = 0;
  }

  leaderboard[email] += pointsToAdd;

  localStorage.setItem(
    "leaderboard",
    JSON.stringify(leaderboard)
  );

  alert("Points added: " + pointsToAdd);
}

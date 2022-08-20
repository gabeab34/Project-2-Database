const eventFormHandler = async (event) => {
  event.preventDefault();

  const tournament = document.querySelector("#tournament-event").value;
  const standings = document.querySelector("#standings-event").value;
  const character = document.querySelector("#character-event").value;


  if (tournament && standings && character) {
    const response = await fetch("api/event/eventscript", {
      method: "POST",
      body: JSON.stringify({ tournament, standings, character }),
      headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
      document.location.replace("/profile");
    } else {
      alert("Failed To Input Stats");
    }
  }
};

document
  .querySelector(".event-form")
  .addEventListener("submit", eventFormHandler);

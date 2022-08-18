const eventFormHandler = async (event) => {
    event.preventDefault();
  
    const tournament = document.querySelector("#tournament-event").value;
    const standings = document.querySelector("#standings-event").value;
    const character = document.querySelector("#character-event").value;
    const biography = document.querySelector("#biography-event").value;
   
  
    if (tournament && standings && character && biography) {
      const response = await fetch("api/event/eventscript", {
        method: "POST",
        body: JSON.stringify({ tournament, standings, character, biography }),
        headers: { "Content-Type": "application/json" },
      });
  
      if (response.ok) {
        document.location.replace("/");
      } else {
        alert("Failed Input Stats");
      }
    }
  };
  
  document
    .querySelector(".event-form")
    .addEventListener("submit", eventFormHandler);

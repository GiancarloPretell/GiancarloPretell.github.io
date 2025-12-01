document.addEventListener("DOMContentLoaded", loadEvents);

function loadEvents() {
    fetch("./events.json")
        .then(res => res.json())
        .then(data => {
            displayEvents(data.upcoming, data.past);
        })
        .catch(err => console.error("Error loading events.json:", err));
}

function displayEvents(upcoming, past) {
    const upcomingContainer = document.getElementById("upcoming-events");
    const pastContainer = document.getElementById("past-events");

    upcomingContainer.innerHTML = "";
    pastContainer.innerHTML = "";

    // UPCOMING EVENTS
    upcoming.forEach(event => {
        const card = createEventCard(event);
        upcomingContainer.appendChild(card);
    });

    // PAST EVENTS
    past.forEach(event => {
        const card = createEventCard(event);
        pastContainer.appendChild(card);
    });
}

function createEventCard(event) {
    const card = document.createElement("article");
    card.classList.add("card");

    card.innerHTML = `
        <h3>${event.title}</h3>
        <p><strong>Date:</strong> ${event.date}</p>
        <p><strong>Location:</strong> ${event.location}</p>
        <p>${event.description}</p>
    `;

    return card;
}

let tickets = [];

const ticketsContainer = document.querySelector('#tickets-container');

// Renderizar los tickets en el contenedor
const renderTickets = () => {
    ticketsContainer.innerHTML = '';

    if (tickets.length === 0) {
        ticketsContainer.innerHTML = `
            <div class="empty-message">
                <p>No se encontraron tickets registrados o coincidentes.</p>
            </div>
        `;
        return;
    }

    tickets.forEach(ticket => {
        const article = document.createElement('article');
        article.classList.add('ticket-card');

        const statusClass = ticket.status.toLowerCase().replace(' ', '-');
        const priorityClass = `priority-${ticket.priority.toLowerCase()}`;

        // Formato de fecha (DD/MM/AAAA HH:MM)
        const dateObj = new Date(ticket.createdAt);
        const formattedDate = `${String(dateObj.getDate()).padStart(2, '0')}/${String(dateObj.getMonth() + 1).padStart(2, '0')}/${dateObj.getFullYear()} ${String(dateObj.getHours()).padStart(2, '0')}:${String(dateObj.getMinutes()).padStart(2, '0')}`;

        article.innerHTML = `
            <div class="ticket-header">
                <span class="ticket-folio">${ticket.folio}</span>
                <span class="ticket-priority ${priorityClass}">${ticket.priority}</span>
            </div>
            <h3 class="ticket-title">${ticket.title}</h3>
            <p class="ticket-description">${ticket.description}</p>
            <div class="ticket-meta">
                <p>${ticket.category} · Creado: ${formattedDate}</p>
                <p>Estado: <span class="ticket-status-badge status-${statusClass}">${ticket.status.toUpperCase()}</span></p>
            </div>
        `;

        ticketsContainer.appendChild(article);
    });
};

// Inicialización
renderTickets();
let tickets = [];

// Elementos del DOM
const ticketsContainer = document.querySelector('#tickets-container');
const btnToggleForm = document.querySelector('#btn-toggle-form');
const btnCancelForm = document.querySelector('#btn-cancel-form');
const formSection = document.querySelector('#form-section');
const ticketForm = document.querySelector('#ticket-form');

// Generar un folio único para cada ticket
const generateFolio = (index) => {
    return `HD-${String(index).padStart(4, '0')}`;
};

// Renderizar tarjetas de tickets
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

// Interacción y creación de tickets
btnToggleForm.addEventListener('click', () => {
    formSection.classList.toggle('hidden');
});

btnCancelForm.addEventListener('click', () => {
    formSection.classList.add('hidden');
    ticketForm.reset();
});

ticketForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const title = document.querySelector('#ticket-title').value.trim();
    const description = document.querySelector('#ticket-description').value.trim();
    const category = document.querySelector('#ticket-category').value;
    const priority = document.querySelector('#ticket-priority').value;

    if (!title || !description || !category || !priority) {
        alert('Por favor, completa todos los campos del formulario.');
        return;
    }

    const nextId = tickets.length + 1;
    const newTicket = {
        id: nextId,
        folio: generateFolio(nextId), 
        title,
        description,
        category,
        priority,
        status: 'Nuevo',
        createdAt: new Date().toISOString()
    };

    tickets.push(newTicket);
    ticketForm.reset();
    formSection.classList.add('hidden');

    renderTickets();
});
// Inicialización
renderTickets();
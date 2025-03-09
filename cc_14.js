// Task 2- Adding Support Tickets Dynamically 
function supportTicket(name, description, priorityLevel) {
    const ticket = document.createElement('div'); // create main ticket div 
    ticket.setAttribute('class', 'support-ticket');
    // create and append customer name heading 
    const nameHeading = document.createElement('h2');
    nameHeading.textContent = name;
    ticket.appendChild(nameHeading);
    // create and append issue description 
    const issueDescription = document.createElement('p');
    issueDescription.textContent = description;
    ticket.appendChild(issueDescription);
    // create and append priority level
    const priorityLabel = document.createElement('label');
    priorityLabel.textContent = priorityLevel;
    ticket.appendChild(priorityLabel);
    // create and append resolve button 
    const resolveButton = document.createElement('button');
    resolveButton.textContent = 'Resolve';
    resolveButton.addEventListener('click', () => {
        ticket.remove();
    });
    ticket.appendChild(resolveButton);
    // append ticket to the ticket container 
    const ticketContainer = document.getElementById('ticketContainer');
    ticketContainer.appendChild(ticket);
}
// list all customer support tickets 
supportTicket('Alice Johnson', 'Unable to reset password', 'High');
supportTicket('Bob Willy', 'Website is loading slowly', 'Medium');
supportTicket('Chris Brown', 'Error message when submitting forms', 'Low');
supportTicket('Danny Patterson', 'Feature request: Dark Mode', 'Medium');
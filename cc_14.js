// Task 2- Adding Support Tickets Dynamically 
function supportTicket(name, description, priorityLevel) {
    const ticket = document.createElement('div'); // create main ticket div 
    ticket.setAttribute('class', 'support-ticket');
    // high priority class identifier 
    if (priorityLevel === 'High') {
        ticket.classList.add('high-priority');
    }
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
// Task 3 
function highlightHighPriorityTickets() {
    // selects all high priority tickets
    const highPriorityTickets = document.querySelectorAll('.high-priority');
    // convert NodeList to an array
    const highPriorityArray = Array.from(highPriorityTickets);
    // updates high priority tickets 
    highPriorityArray.forEach(ticket => {
        ticket.computedStyleMap.backgroundColor = 'red';
    });
}

// list all customer support tickets 
supportTicket('Alice Johnson', 'Unable to reset password', 'High');
supportTicket('Bob Willy', 'Website is loading slowly', 'Medium');
supportTicket('Chris Brown', 'Error message when submitting forms', 'Low');
supportTicket('Danny Patterson', 'Feature request: Dark Mode', 'Medium');

// calls the function 
highlightHighPriorityTickets();
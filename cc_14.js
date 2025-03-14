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
    resolveButton.addEventListener('click', (event) => {
        event.stopPropagation(); // prevents events from bubbling 
        ticket.remove();
        console.log(`Ticket for ${name} resolved and removed.`);
    });
    ticket.appendChild(resolveButton);
    // append ticket to the ticket container 
    const ticketContainer = document.getElementById('ticketContainer');
    ticketContainer.appendChild(ticket);
    // add double click event listener
    ticket.addEventListener('dblclick', () => {
        enableEditing(ticket, nameHeading, issueDescription, priorityLabel);
    });
}
// Task 3 
function highlightHighPriorityTickets() {
    // selects all high priority tickets
    const highPriorityTickets = document.querySelectorAll('.high-priority');
    // convert NodeList to an array
    const highPriorityArray = Array.from(highPriorityTickets);
    // updates high priority tickets 
    highPriorityArray.forEach(ticket => {
        ticket.style.backgroundColor ='rgb(234, 251, 152)';
        ticket.style.border = '2px solid green';
    });
}
// Task 4 
// setup a event listener function 
function setupEventListeners() {
    const ticketContainer = document.getElementById('ticketContainer');

    ticketContainer.addEventListener('click',(event) => {
        console.log('Ticket clicked:', event.target);
    });
}

// Task 5- enable inline editing 
function enableEditing(ticket, nameHeading, issueDescription, priorityLabel) {
    // input new name value 
    const nameInput = document.createElement('input');
    nameInput.type = 'text';
    nameInput.value = nameHeading.textContent;
    // input new issue description value 
    const descriptionInput = document.createElement('input');
    descriptionInput.type = 'text';
    descriptionInput.value = issueDescription.textContent;
    // input new priority level value 
    const priorityInput = document.createElement('input');
    priorityInput.type = 'text';
    priorityInput.value = priorityLabel.textContent;

    // create a save button 
    const saveButton = document.createElement('button');
    saveButton.textContent = 'Save';
    saveButton.addEventListener('click', () => {
        nameHeading.textContent = nameInput.value;
        issueDescription.textContent = descriptionInput.value;
        priorityLabel.textContent = priorityInput.value;

    // remove input fields and save button
    ticket.replaceChild(nameHeading, nameInput);
    ticket.replaceChild(issueDescription, descriptionInput);
    ticket.replaceChild(priorityLabel, priorityInput);
    ticket.removeChild(saveButton);
    });
    // replace static content with input fields 
    ticket.replaceChild(nameInput, nameHeading);
    ticket.replaceChild(descriptionInput, issueDescription);
    ticket.replaceChild(priorityInput, priorityLabel);
    ticket.appendChild(saveButton);
}


// list all customer support tickets 
supportTicket('Alice Johnson', 'Unable to reset password', 'High');
supportTicket('Bob Willy', 'Website is loading slowly', 'Medium');
supportTicket('Chris Brown', 'Error message when submitting forms', 'Low');
supportTicket('Danny Patterson', 'Feature request: Dark Mode', 'Medium');

// calls the function 
highlightHighPriorityTickets();
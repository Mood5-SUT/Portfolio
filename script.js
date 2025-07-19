document.querySelector('.input-line').addEventListener('keydown', function(event) {
    if (event.key === "Enter") {
        let command = event.target.innerText.trim();
        event.target.innerText = ''; // Clear the input field
        processCommand(command);
    }
});

function processCommand(command) {
    let terminal = document.getElementById('terminal');
    if (command === 'help') {
        terminal.innerHTML += "<div>Available commands: help, about, projects, contact</div>";
    } else if (command === 'about') {
        terminal.innerHTML += "<div>I'm a Software Developer with expertise in web technologies.</div>";
    } else if (command === 'projects') {
        terminal.innerHTML += "<div>Check out my GitHub to see my projects!</div>";
    } else if (command === 'contact') {
        terminal.innerHTML += "<div>You can reach me at: example@example.com</div>";
    } else {
        terminal.innerHTML += "<div>Command not found!</div>";
    }
    terminal.innerHTML += "<div class='input-line' contenteditable='true'></div>";
    terminal.scrollTop = terminal.scrollHeight; // Scroll to bottom
}

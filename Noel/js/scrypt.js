document.addEventListener("DOMContentLoaded", () => {
    fetch('data.xml')
        .then(response => response.text())
        .then(str => {
            const parser = new DOMParser();
            const xml = parser.parseFromString(str, "application/xml");

            const greeting = xml.querySelector('greeting').textContent;
            document.getElementById('message').textContent = greeting;

            const events = xml.querySelectorAll('event');
            const contentDiv = document.getElementById('dynamic-content');
            events.forEach(event => {
                const p = document.createElement('p');
                p.textContent = event.textContent;
                contentDiv.appendChild(p);
            });
        })
        .catch(error => console.error('Error loading XML:', error));
});

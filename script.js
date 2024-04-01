// Example of dynamic content loading
const experienceData = [
    {
        title: "Game Master at Pure Casino Lethbridge",
        description: "Managed and operated a variety of table games..."
    },
    {
        title: "Property Manager at VB Properties",
        description: "Led a high-performing team in managing diverse housing facilities..."
    }
];

const experienceSection = document.getElementById('experience');

experienceData.forEach(item => {
    const div = document.createElement('div');
    div.classList.add('experience-item');
    div.innerHTML = `<h3>${item.title}</h3><p>${item.description}</p>`;
    experienceSection.appendChild(div);
});

// Enhancing the form submission
document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Here, you would typically send the data to a server
    console.log('Sending', {name, email, message});
    alert('Thank you for your message!');

    // Reset form after submission
    this.reset();
});

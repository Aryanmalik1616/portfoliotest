const form = [...document.querySelector('#contactme').children];

form.forEach((item, i) => {
    setTimeout(() => {
        item.style.opacity = 2;
    }, i * 100);
})

const disk = [...document.querySelector('#back').children];

disk.forEach((item, i) => {
    setTimeout(() => {
        item.style.opacity = 2;
    }, i * 100);
})


// document.getElementById('contactme').addEventListener('submit', function(event) {
//     event.preventDefault();

//     const name = document.getElementById('name').value.trim();
//     const email = document.getElementById('email').value.trim();
//     const message = document.getElementById('message').value.trim();

//     const subject = encodeURIComponent('I want to reach out to you');
//     const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`);

//     window.location.href = `mailto:aryanmalik2716@gmail.com?subject=${subject}&body=${body}`;

//     setTimeout(function() {
//         window.location.reload();
//     }, 1000); // 1000 milliseconds = 1 second
// });

emailjs.init('PTpruc3zh7oZDavuI'); // Replace this with your actual Public Key

// Handle form submit
document.getElementById('contactme').addEventListener('submit', function (event) {
    event.preventDefault();

    // Prepare parameters to send
    const params = {
        from_name: document.getElementById('name').value,
        from_email: document.getElementById('email').value,
        message: document.getElementById('message').value
    };

    // Send email
    // emailjs.send('service_rjb06l8', 'template_85x29mh', params)
    emailjs.send("service_rjb06l8", "template_85x29mh")
    .then(function (response) {
        alert('Email sent successfully!');
        window.location.reload(); // Reload after success
    }, function (error) {
        alert('Failed to send email. Error: ' + JSON.stringify(error));
    });
});

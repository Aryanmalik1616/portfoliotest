const form = [...document.querySelector('#userForm').children];

form.forEach((item, i) => {
    setTimeout(() => {
        item.style.opacity = 2;
    }, i * 100);
})


// function savedata(){
//     let name,email;
//     name = document.getElementById("name").values;
//     email = document.getElementById("email").values;

//     localStorage.setItem("name",String(name));
//     localStorage.setItem("email",String(email));

// }
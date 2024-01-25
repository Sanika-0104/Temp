
const wait = (n) => new Promise((resolve) => setTimeout(resolve, n));

document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector("form")

    form.addEventListener('submit', async function (e) {
        e.preventDefault();

        const fullName = document.querySelector("#fullName").value
        const username = document.querySelector("#username").value
        const email = document.querySelector("#email").value
        const password = document.querySelector("#password").value
        const confirmPassword = document.querySelector("#confirmPassword").value
        const hero = document.querySelector(".hero")

        const loginInfo = {
            fullName: fullName,
            username: username,
            email: email,
            password: password
        };
        // console.log(loginInfo)

        let check = JSON.parse(localStorage.getItem(`${username}`))

        if(check !== null){
            hero.style = "font-size: 40px; font-family: 'Poppins', sans-serif;"
            hero.innerHTML = `Username not available, Try again`
            await wait(3000);
            window.location.href = "signUp.html";
        }

        if (password === confirmPassword) {
            // console.log(loginInfo)
            localStorage.setItem(`${username}`, JSON.stringify(loginInfo))

            document.querySelector("input[type='text']").value = "";
            document.querySelector("input[id='username']").value = "";
            document.querySelector("input[type='email']").value = "";
            document.querySelector("input[type='password']").value = "";
            document.querySelector("input[id='confirmPassword']").value = "";

            hero.style = "font-size: 40px; font-family: 'Poppins', sans-serif;"
            hero.innerHTML = `Registered as ${loginInfo.username}`
            await wait(5000);
            window.location.href = "login.html";
        }
        else {

            hero.style = "font-size: 40px; font-family: 'Poppins', sans-serif;"
            hero.innerHTML = `Password and confirm password dosen't match`
            await wait(3000);
            window.location.href = "signUp.html";

        }


    })
});
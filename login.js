const wait = (n) => new Promise((resolve) => setTimeout(resolve, n));


document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector("form")

    form.addEventListener('submit', async function (e) {
        e.preventDefault();

        const username = document.querySelector("#username").value
        const password = document.querySelector("#password").value
        const hero = document.querySelector(".hero")

        let loginInfo = JSON.parse(localStorage.getItem(`${username}`))

        if(localStorage.length === 0){
            document.querySelector("input[type='text']").value = "";
            document.querySelector("input[type='password']").value = "";

            hero.style = "font-size: 40px; font-family: 'Poppins', sans-serif;"
            hero.innerHTML = `No username found, Register first`
            await wait(3000);
            window.location.href = "signUp.html";
        }
        else if (loginInfo === null) {
            document.querySelector("input[type='text']").value = "";
            document.querySelector("input[type='password']").value = "";

            hero.style = "font-size: 40px; font-family: 'Poppins', sans-serif;"
            hero.innerHTML = `Wrong Username Try Again`
            await wait(1500);
            window.location.href = "login.html";
        }
        else {
            if (password == loginInfo.password) {

                document.querySelector("input[type='text']").value = "";
                document.querySelector("input[type='password']").value = "";

                hero.style = "font-size: 40px; font-family: 'Poppins', sans-serif;"
                hero.innerHTML = `Log in as ${loginInfo.username}`
                await wait(5000);
                window.location.href = "index.html";

            }
            else {
                document.querySelector("input[type='text']").value = "";
                document.querySelector("input[type='password']").value = "";

                hero.style = "font-size: 40px; font-family: 'Poppins', sans-serif;"
                hero.innerHTML = `Wrong Password Try Again`
                await wait(1500);
                window.location.href = "login.html";
            }
        }

    })
});






//--------------------------------------------------------------------------------------------------------------------------------------------------



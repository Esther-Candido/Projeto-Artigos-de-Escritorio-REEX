
//ao realizar o logout com o user comum, volta a pagina index de usuario comum e anonimo
function logout() {
    firebase.auth().signOut().then(() => {
        window.location.href = "../FrontEnd/index.html";
    }).catch(() => {
        alert("Erro ao fazer logout!!!");
    } );
}




firebase.auth().onAuthStateChanged(user => {
    var logoutButton = document.getElementById("logout-button");
    var loginLink = document.getElementById("login-link");

    logoutButton.classList.remove("initially-hidden");
    loginLink.classList.remove("initially-hidden");

    if (user) {
        logoutButton.style.display = "block";// Exibe o botão de sair
        loginLink.style.display = "none"; // Oculta o link de login
    } else {
        logoutButton.style.display = "none";// Oculta o botão de sair
        loginLink.style.display = "block";// Exibe o link de login
    }
});




  














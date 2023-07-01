
//ao realizar o logout com o user comum, volta a pagina index de usuario comum e anonimo
function logout() {
    firebase.auth().signOut().then(() => {
        window.location.href = "../FrontEnd/index.html";
    }).catch(() => {
        alert("Erro ao fazer logout!!!");
    } );
}




firebase.auth().onAuthStateChanged(user => {
    if (user) {
        document.getElementById("logout-button").style.display = "block"; // Exibe o botão de sair
        document.getElementById("login-link").style.display = "none"; // Oculta o link de login
    } else {
        document.getElementById("logout-button").style.display = "none"; // Oculta o botão de sair
        document.getElementById("login-link").style.display = "block"; // Exibe o link de login
    }
});





// Configuração do Firebase de seu aplicativo
//ADICIONE OS LINKS DO FIREBASE AQUI


// Inicialize o Firebase
firebase.initializeApp(firebaseConfig);

function addUser()
{
    user_name = document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update({
        purpose : "adding user"
    });
    /*
    Armazene o nome de usuário em localStorage
*/ localStorage.setItem("user_name", user_name);
   /* Programe window.location para que o usuário possa navegar até a página chat_room.html.
    */window.location = "chat_room.html";
}


localStorage.setItem("user_name", user_name); window.location = "chat_room.html";

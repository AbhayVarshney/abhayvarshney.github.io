
document.getElementById("message-btn-email").addEventListener("click", function(){
    var email = {
        name:document.getElementById("name").value,
        email: document.getElementById("email").value,
        subject: document.getElementById("subject").value,
        message: document.getElementById("message").value
    };

    console.log('hello')
});
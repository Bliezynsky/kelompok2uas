function validateForm() {
    var email = document.getElementById('exampleInputEmail1').value;
    var password = document.getElementById('exampleInputPassword1').value;

    if (email === '' || password === '') {
        alert('Email dan Password Tidak Boleh Kosong');
        return false;
    } 

    if (!isValidEmail(email)) {
        alert('Email Tidak Sesuai');
        return false;
    }
}

function isValidEmail(email) {
    var emailPattern = /\S+@\S+\.\S+/;
    return emailPattern.test(email);
}


document.addEventListener("DOMContentLoaded", function() {
    showLoginNotification();
});

function showLoginNotification() {
    var notification = document.getElementById("login-notification");
    if (notification) {
        notification.style.display = "block";
        setTimeout(function() {
            notification.style.display = "none";
        }, 3000);
    }
}
function validateForm() {
    var nama = document.getElementById('exampleInputName1').value;
    var nomor = document.getElementById('exampleInputNumber1').value;
    var email = document.getElementById('exampleInputEmail1').value;
    var password = document.getElementById('exampleInputPassword1').value;

    if (nama === '' || nomor === '' || email === '' || password === '') {
        alert('Pastikan Semua Sudah Terisi');
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
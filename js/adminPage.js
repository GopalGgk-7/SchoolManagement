

function submitAdminForm() {

    var userName = $('#userName').val();
    var password = $('#password').val();

    if (userName.toUpperCase() == "ADMIN" && password.toUpperCase() == "ADMIN") {
        window.location.href = 'dashboard.html';

    }








}


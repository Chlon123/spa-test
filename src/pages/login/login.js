const loginBtn = document.getElementById('login-button');

function handleLoginClick() {
    window.location.href = '/dashboard';
}

loginBtn.onclick = handleLoginClick;





let password = document.getElementById('passwordInput');
let togglePassView = document.getElementById('togglePassView');

const togglePassword = () => {
    if (password.type =="password") {
        password.type = "text"
        togglePassView.innerHTML = '<i class="fa fa-eye-slash"></i>'
       
    }

    else if (password.type == "text") {
        password.type = "password"
        togglePassView.innerHTML = '<i class="fa fa-eye"></i>'
    }
    
}
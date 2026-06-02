document.addEventListener('DOMContentLoaded', function() {
    const studentChoice = document.getElementById('student_choice');
    const workerChoice = document.getElementById('worker_choice');
    const roleSelection = document.getElementById('role_selection');
    const loginForm = document.getElementById('login_form');
    const backButton = document.getElementById('back_button');

    studentChoice.addEventListener('click', function() {
        roleSelection.style.display = 'none';
        loginForm.style.display = 'block';
    });

    workerChoice.addEventListener('click', function() {
        roleSelection.style.display = 'none';
        loginForm.style.display = 'block';
    });

    backButton.addEventListener('click', function() {
        loginForm.style.display = 'none';
        roleSelection.style.display = 'block';
    }); 
    const signInButton = document.querySelector('.log_in_sing_up_button');
    if (signInButton) {
        signInButton.addEventListener('click', function() {
            window.location.href = './index.html';
        });
    }
});
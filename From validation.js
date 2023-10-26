function validateForm() {
    
    const fullNameInput = document.getElementById('fname');
    const userNameInput = document.getElementById('uname');
    const passwordInput = document.getElementById('pass');
    const confirmPasswordInput = document.getElementById('cp');

    
    const m1 = document.getElementById('m1');
    const m2 = document.getElementById('m2');
    const m3 = document.getElementById('m3');
    const m4 = document.getElementById('m4');
    

    const nameRegex = /^[A-Za-z\s]+$/; 
    const usernameRegex = /^[A-Za-z0-9]+$/;

 
    m1.textContent = '';
    m2.textContent = '';
    m3.textContent = '';
    m4.textContent = '';

    let valid = true;

    // Full Name validation
    if (!nameRegex.test(fullNameInput.value.trim())) {
        m1.textContent = 'Full Name should contain only letters';
        valid = false;
    }

    // User Name validation
    if (!usernameRegex.test(userNameInput.value)) {
        m2.textContent = 'User Name should contain only letters and numbers';
        valid = false;
    }

    // Password validation
    if (passwordInput.value.length < 6 || passwordInput.value.length > 10) {
        m3.textContent = 'Password should be 6-10 characters';
        valid = false;
    }

    // Confirm Password validation
    if (passwordInput.value !== confirmPasswordInput.value) {
        m4.textContent = 'Passwords do not match';
        valid = false;
    }

    return valid;
}

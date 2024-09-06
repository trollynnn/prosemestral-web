document.addEventListener("DOMContentLoaded", function() {
    const loginForm = document.querySelector("#offcanvasRight form");
    const emailInput = document.querySelector("#email");
    const passwordInput = document.querySelector("#password");

    loginForm.addEventListener("submit", function(event) {
        event.preventDefault();

        clearErrors();

        if (!validateEmail(emailInput.value)) {
            showError(emailInput, "Por favor, ingrese un correo electrónico válido.");
        }

        if (!validatePassword(passwordInput.value)) {
            showError(passwordInput, "La contraseña debe tener al menos 8 caracteres, una mayúscula, una minúscula, un número y un símbolo.");
        }

        if (loginForm.querySelectorAll(".is-invalid").length === 0) {
            loginForm.submit();
        }
    });

    function validateEmail(email) {
        const re = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
        return re.test(email);
    }

    function validatePassword(password) {
        const re = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
        return re.test(password);
    }

    function showError(input, message) {
        const formGroup = input.closest(".mb-3");
        const error = document.createElement("div");
        error.className = "invalid-feedback";
        error.textContent = message;
        formGroup.appendChild(error);
        input.classList.add("is-invalid");
    }

    function clearErrors() {
        const errors = loginForm.querySelectorAll(".invalid-feedback");
        errors.forEach(error => error.remove());
        const invalidInputs = loginForm.querySelectorAll(".is-invalid");
        invalidInputs.forEach(input => input.classList.remove("is-invalid"));
    }
});

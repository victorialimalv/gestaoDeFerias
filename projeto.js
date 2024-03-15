const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const passwordConfirmation = document.getElementById("password-confirmation");
const date = document.getElementById("date-of-birth");
const yourJob = document.getElementById("your-job");
const funcao = document.getElementById("funcao");
const department = document.getElementById("department");

form.addEventListener("submit", (event) => {
    event.preventDefault();
    
    checkForm();
})      

function cadastroInputUsername() {
    const usernameValue = username.value;

    if (usernameValue === "") {
        erroInput(username, "Preencha um username");
        } else {
            const formItem = username.parentElement;
            formItem.className = "form-content"
        }
}


function cadastroInputEmail() {
    const emailValue = email.value;

    if (emailValue === "") {
       erroInput(email, "O email é obrigatório"); 
    } else {
        const formItem = email.parentElement;
        formItem.className = "form-content"
    }
}


function cadastroInputPassword() {
    const passwordValue = password.value;

    if (passwordValue === "") {
        erroInput(password, "A senha é obrigatória");
    } else if (passwordValue.length < 8) {
        erroInput(password, "A senha precisa ter no mínimo 8 caracteres");
    } else {
        const formItem = password.parentElement;
        formItem.className = "form-content"
    }
}


function validationPassword() {
    const confirmationPasswordValue = passwordConfirmation.value;
    const passwordValue = password.value;
    
    if (confirmationPasswordValue === "") {
        erroInput(passwordConfirmation, "A confirmação de senha é obrigatória.")
    } else if (confirmationPasswordValue !== passwordValue) {
        erroInput(passwordConfirmation, "As senhas não são iguais.")
    } else {
        const formItem = passwordConfirmation.parentElement;
        formItem.className = "form-content"
    }
}


function cadastroInputDate() {
    const dateValue = date.value;

    if (dateValue === "") {
        erroInput(date, "Data de nascimento obrigatória");
    } else {
        const formItem = date.parentElement;
        formItem.className = "form-content"
    }
}


function cadastroInputyourJob() {
    const yourJobValue = yourJob.value;

    if (yourJobValue === "") {
        erroInput(yourJobValue, "Cargo obrigatório");
    } else {
        const formItem = yourJob.parentElement;
        formItem.className = "form-content"
    }
}


function cadastroInputFunction() {
    const functionValue = funcao.value;

    if (functionValue === "") {
        erroInput(funcao, "Função obrigatório")
    } else {
        const formItem = funcao.parentElement;
        formItem.className = "form-content"
    }
}


function cadastroInputDepartment() {
    const departmentValue = department.value;

    if (departmentValue === "") {
        erroInput(department, "Departamento obrigatório")
    }else {
        const formItem = department.parentElement;
        formItem.className = "form-content"
    }
}


function checkForm() {
    cadastroInputUsername();
    cadastroInputEmail();
    cadastroInputPassword();
    validationPassword();
    cadastroInputDate();
    cadastroInputyourJob();
    cadastroInputFunction()
    cadastroInputDepartment()

    const formItems = form.querySelectorAll(".form-content")

    const isValid = [...formItems].every( (item) => {
        return item.className === "form-content"
    });
    if (isValid) {
        alert("Cadastrado com sucesso!")
    } else {
        alert("Preencha todos os campos corretamente.")
    }
}


function erroInput(input, message) {
    const formItem = input.parentElement;
    const textMessage = formItem.querySelector("a")

    textMessage.innerText = message;

    formItem.className = "form-content error"
}


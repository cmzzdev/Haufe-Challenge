export function validateLoginForm(values){
    let errors = {}
    if(!values.email){
        errors.email = emailRequired()
    }
    if(!values.password){
        errors.password = passwordRequired()
    } else {
        if (values.password.length < 6){
            errors.password = passwordLeast6Chars()
        }
    }
    return errors
}

export function validateRegisterForm(values){
    let errors = {}
    if(!values.name){
        errors.name = nameRequired()
    }
    if(!values.email){
        errors.email = emailRequired()
    }
    if(!values.password){
        errors.password = passwordRequired()
    } else {
        if (values.password.length < 6){
            errors.password = passwordLeast6Chars()
        }
    }
    return errors
}

function nameRequired(){
    return "The name is required"
}

function emailRequired(){
    return "The email is required";
}

function passwordRequired(){
    return "The password is required";
}

function passwordLeast6Chars(){
    return "The password must be at least 6 characters";
}
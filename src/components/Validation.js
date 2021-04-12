const Validation = (values) => {
    var emailPattern = new RegExp(/^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i);

    let errors = {}
    if (!values.username) {
        errors.username = "User name is required"
    }
    if (!values.email) {
        errors.email = "Email is required"
    } else if (!emailPattern.test(values.email)) {
        errors.email = "Email is invalid"
    }
    if (!values.password) {
        errors.password = "Password is required"
    } else if (values.password.length < 5) {
        errors.password = "Password must be more than five characters."
    }
    return errors
}

export default Validation
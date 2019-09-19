$("#signup-form").on("submit", function (e) {
    e.preventDefault();
    let firstname = $("#defaultRegisterFormFirstName").val();
    let lastname = $("#defaultRegisterFormLastName").val();
    let email = $("#defaultRegisterFormEmail").val();
    let phonenumber = $("#defaultRegisterPhonePassword").val();
    let password = $("#defaultRegisterFormPassword").val();
    let type = $("#selecttype").val();

    $.ajax({
        method: 'POST',
        url: 'http://localhost:3000/users',
        data: {
            firstname: firstname,
            lastname: lastname,
            email: email,
            password: password,
            phonenumber: phonenumber,
            type: type
        },

        success: function (result) {
            console.log(result);
            localStorage.setItem('user', data);
            window.location.href = "../html/login.html";
        },

        error: function () {
            alert("error signing up");
        }
    })
})
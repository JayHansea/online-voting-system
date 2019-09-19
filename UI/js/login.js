$("#login-form").on("submit", function (e) {
    e.preventDefault();

    let newUser = {
        email: $("#defaultLoginFormEmail").val(),
        password: $("#defaultLoginFormPassword").val()
    }


    $.ajax({
        method: 'GET',
        url: 'http://localhost:3000/users',

        success: function (users) {
            $.each(users, function (i, user) {
                if (
                    newUser.email === user.email &&
                    newUser.password === user.password &&
                    user.type === "Citizen"
                ) {
                    window.location.href = "../html/citizens.html";
                } else if (
                    newUser.email === user.email &&
                    newUser.password === user.password &&
                    user.type === "Politician"
                ) {
                    window.location.href = "../html/politicians.html";
                } else {
                    // $("#error").append(`<p>you are not yet registered</p>`);
                }
            })
        }
    })
})
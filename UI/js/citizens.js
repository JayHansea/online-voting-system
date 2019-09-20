$(window).on("load", function () {
    console.log("window loaded");

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
                    newUser.password === user.password
                ) {
                    $('#fullname').append(`Fullname: ${user.firstname} ${user.lastname}`);

                    $('#email').append(`Email: ${user.email}`);

                    $('#phonenumber').append(`Phone: ${user.phonenumber}`);

                    $('#type').append(`Status: ${user.type}`);
                }
            })
        }
    })
});

const logout = () => {
    window.location = '../index.html';
};

document.querySelector('#logout').addEventListener('click', logout);

// Set the date we're counting down to
var countDownDate = new Date("Feb 14, 2023 08:00:00").getTime();

// Update the count down every 1 second
var x = setInterval(function () {

    // Get today's date and time
    var now = new Date().getTime();

    // Find the distance between now and the count down date
    var distance = countDownDate - now;

    // Time calculations for days, hours, minutes and seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    if (days < "10") {
        days = "0" + days;
    }
    if (hours < "10") {
        hours = "0" + hours;
    }
    if (minutes < "10") {
        minutes = "0" + minutes;
    }
    if (seconds < "10") {
        seconds = "0" + seconds;
    }

    // Display the result in the element with id="demo"
    let timerDiv = document.querySelectorAll(".timer");

    for (let i = 0; i < timerDiv.length; i++) {
        timerDiv[i].innerHTML = days + "d :" + hours + "h :" +
            minutes + "m :" + seconds + "s ";

        // If the count down is finished, write some text
        if (distance < 0) {
            clearInterval(x);
            timerDiv[i].innerHTML = "CLOSED";
            timerDiv[i].style.color = "#f00";
        }
    }


}, 1000);

const votes = document.querySelectorAll('.modalbtn');

for (let i = 0; i < votes.length; i++) {
    votes[i].on("click", function () {
        console.log("window loaded");

        $.ajax({
            method: 'POST',
            url: 'http://localhost:3000/vote',
            data: {
                id: id,
                userId: userId
            },
        })
    });
}

const details = () => {
    const fullName = document.getElementById('fullname');
    fullName.textContent = `Fullname: ${user.firstname} ${user.lastname}`;

    const email = document.getElementById('email');
    email.textContent = `Email: ${user.email}`;
    const phoneNumber = document.getElementById('phonenumber');
    phoneNumber.textContent = `Phone: ${user.phonenumber}`;
    const type = document.getElementById('type');
    type.textContent = `Status: ${user.type}`;
}
details();
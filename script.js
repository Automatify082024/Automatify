document.addEventListener('DOMContentLoaded', function (event) {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            document.getElementById("content-area").innerHTML = this.responseText;
        }
    };
    xhttp.open("GET", "contents/homeContent.txt", true);
    xhttp.send();
})

document.addEventListener('DOMContentLoaded', function (event) {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            document.getElementById("footer").innerHTML = this.responseText;
        }
    };
    xhttp.open("GET", "contents/footerContent.txt", true);
    xhttp.send();
})

document.getElementById('title').addEventListener('click', function (event) {
    event.preventDefault();
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            document.getElementById("content-area").innerHTML = this.responseText;
        }
    };
    xhttp.open("GET", "contents/homeContent.txt", true);
    xhttp.send();
})

document.getElementById('class-name-link').addEventListener('click', function (event) {
    event.preventDefault();
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            document.getElementById("content-area").innerHTML = this.responseText;
        }
    };
    xhttp.open("GET", "contents/classNameContent.txt", true);
    xhttp.send();
})

document.getElementById('id-link').addEventListener('click', function (event) {
    event.preventDefault();
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            document.getElementById("content-area").innerHTML = this.responseText;
        }
    };
    xhttp.open("GET", "contents/idContent.txt", true);
    xhttp.send();
})

document.getElementById('name-link').addEventListener('click', function (event) {
    event.preventDefault();
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            document.getElementById("content-area").innerHTML = this.responseText;
        }
    };
    xhttp.open("GET", "contents/nameContent.txt", true);
    xhttp.send();
})

document.getElementById('text-input-link').addEventListener('click', function(event) {
    event.preventDefault();
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            document.getElementById("content-area").innerHTML = this.responseText;
        }
    };
    xhttp.open("GET", "contents/textInputContent.txt", true);
    xhttp.send();
})

document.getElementById('email-input-link').addEventListener('click', function(event) {
    event.preventDefault();
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            document.getElementById("content-area").innerHTML = this.responseText;
        }
    };
    xhttp.open("GET", "contents/emailInputContent.txt", true);
    xhttp.send();
})

document.getElementById('password-input-link').addEventListener('click', function(event) {
    event.preventDefault();
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            document.getElementById("content-area").innerHTML = this.responseText;
        }
    };
    xhttp.open("GET", "contents/passwordInputContent.txt", true);
    xhttp.send();
})

document.getElementById('text-area-input-link').addEventListener('click', function(event) {
    event.preventDefault();
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            document.getElementById("content-area").innerHTML = this.responseText;
        }
    };
    xhttp.open("GET", "contents/textAreaInputContent.txt", true);
    xhttp.send();
})

document.getElementById('number-input-link').addEventListener('click', function(event) {
    event.preventDefault();
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            document.getElementById("content-area").innerHTML = this.responseText;
        }
    };
    xhttp.open("GET", "contents/numberInputContent.txt", true);
    xhttp.send();
})

document.getElementById('checkbox-input-link').addEventListener('click', function(event) {
    event.preventDefault();
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            document.getElementById("content-area").innerHTML = this.responseText;
        }
    };
    xhttp.open("GET", "contents/checkboxInputContent.txt", true);
    xhttp.send();
})

document.getElementById('radio-input-link').addEventListener('click', function(event) {
    event.preventDefault();
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            document.getElementById("content-area").innerHTML = this.responseText;
        }
    };
    xhttp.open("GET", "contents/radioInputContent.txt", true);
    xhttp.send();
})

document.getElementById('buttons-link').addEventListener('click', function(event) {
    event.preventDefault();
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            document.getElementById("content-area").innerHTML = this.responseText;
            document.getElementById('display-count').innerHTML = 0;
            
            document.getElementById('decrement').addEventListener('click', function() {
                let currentValue = parseInt(document.getElementById('display-count').innerHTML, 10);
                document.getElementById('display-count').innerHTML = currentValue - 1;
            });

            document.getElementById('increment').addEventListener('click', function() {
                let currentValue = parseInt(document.getElementById('display-count').innerHTML, 10);
                document.getElementById('display-count').innerHTML = currentValue + 1;
            });
        }
    };
    xhttp.open("GET", "contents/buttonsContent.txt", true);
    xhttp.send();
});

document.getElementById('dropdown-link').addEventListener('click', function(event) {
    event.preventDefault();
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            document.getElementById("content-area").innerHTML = this.responseText;
        }
    };
    xhttp.open("GET", "contents/dropdownContent.txt", true);
    xhttp.send();
});

document.getElementById('alerts-link').addEventListener('click', function(event) {
    event.preventDefault();
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            document.getElementById("content-area").innerHTML = this.responseText;
        }
    };
    xhttp.open("GET", "contents/alertsContent.txt", true);
    xhttp.send();
});

function confirmEdit()
{
    let userChoice = confirm("Save changes?");

    (userChoice) ? document.getElementById("message-container").innerHTML = "Changes has been saved." : document.getElementById("message-container").innerHTML = "Changes has been cancelled.";
}

document.getElementById('screenshot-link').addEventListener('click', function(event) {
    event.preventDefault();
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            document.getElementById("content-area").innerHTML = this.responseText;
        }
    };
    xhttp.open("GET", "contents/screenshotContent.txt", true);
    xhttp.send();
});
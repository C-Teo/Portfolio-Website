var flag = true; // True is light theme, False is dark theme

function onBootUp() {
    flag = !flag;
    switchTheme();
}

function switchTheme() {
    if (flag) {
        document.body.style.backgroundColor = "rgb(54, 54, 54)";
        document.body.style.color = "white";
        document.getElementsByClassName("footer")[0].style.backgroundColor = "rgb(41, 41, 41)";
        document.getElementsByClassName("navbar")[0].style.backgroundColor = "rgb(41, 41, 41)";
        var links = document.getElementsByClassName("navlink");
        for (var i = 0; i < links.length; i++) {
            links[i].style.color = "white";
        }
        document.getElementById("footer-text").style.color = "white";
        document.getElementById("copyright").style.color = "rgb(101, 162, 237)";
    } else {
        document.body.style.backgroundColor = "white";
        document.body.style.color = "black";
        document.getElementsByClassName("footer")[0].style.backgroundColor = "rgb(228, 228, 228)";
        document.getElementsByClassName("navbar")[0].style.backgroundColor = "rgb(228, 228, 228)";
        var links = document.getElementsByClassName("navlink");
        for (var i = 0; i < links.length; i++) {
            links[i].style.color = "black";
        }
        document.getElementById("footer-text").style.color = "black";
        document.getElementById("copyright").style.color = "rgb(32, 96, 174)";
    }
    flag = !flag;
}
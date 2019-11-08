let state;

function main() {
    const tempo = setInterval(switcher, 50);
}

function switcher() {
    document.getElementById("toptext").style.opacity = "100";
    document.getElementById("bottomtext").style.opacity = "100";
    if (state == false) {
        state = true;
        document.getElementById("toptext").style.webkitTextStrokeColor = "black";
        document.getElementById("toptext").style.color = "white";

        document.getElementById("bottomtext").style.webkitTextStrokeColor = "white";
        document.getElementById("bottomtext").style.color = "black";
    } else
    {
        state = false;
        document.getElementById("toptext").style.webkitTextStrokeColor = "white";
        document.getElementById("toptext").style.color = "black";

        document.getElementById("bottomtext").style.webkitTextStrokeColor = "black";
        document.getElementById("bottomtext").style.color = "white";
    }
}

window.addEventListener('load', function () {
    main();
});


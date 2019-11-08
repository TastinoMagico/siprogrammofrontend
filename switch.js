let state;

function main() {
    const tempo = setInterval(switcher, 50);
    document.getElementById("toptext").style.webkitTextStrokeColor = "white";
}

function switcher() {
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

main();

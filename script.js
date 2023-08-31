function start() {
    let e = document.getElementById("date").value
    window.location.href = "timemachine.html?date=" + e.substring(0, e.length - 2) + "00"
}
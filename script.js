function start() {
    let e = document.getElementById("date").value

    if (parseInt(e) > 3000 || parseInt(e) < 1000) {   
        return
    }

    window.location.href = "timemachine.html?date=" + e.substring(0, e.length - 3) + "000"
}
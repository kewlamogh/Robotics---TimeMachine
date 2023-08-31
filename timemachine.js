const urlParams = new URLSearchParams(window.location.search);
const queryUrl = urlParams.get('date');
document.body.innerHTML += `<video src = "./media/${queryUrl}_${Math.round(Math.random() * 3)}.mov" id = "gra" autoplay muted loop></video>` 
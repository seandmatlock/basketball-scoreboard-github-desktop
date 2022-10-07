let countHome = 0
let countGuest = 0

function hadd1() {
    countHome += 1
    document.getElementById("home-score").textContent = countHome
}
function hadd2() {
    countHome += 2
    document.getElementById("home-score").textContent = countHome
}
function hadd3() {
    countHome += 3
    document.getElementById("home-score").textContent = countHome
}
function gadd1() {
    countGuest += 1
    document.getElementById("guest-score").textContent = countGuest
}
function gadd2() {
    countGuest += 2
    document.getElementById("guest-score").textContent = countGuest
}
function gadd3() {
    countGuest += 3
    document.getElementById("guest-score").textContent = countGuest
}

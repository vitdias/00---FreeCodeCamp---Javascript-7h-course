let countEL = document.getElementById("count-el")
let prevEntries = document.getElementById("prev-entries")
let count = 0
let store = 0

function increment() {
    count += 1
    countEL.innerText = count
    console.log(count)
}

function save() {
    store = countEL.innerText
    // prevEntries.innerText += " " + store + " -"
    prevEntries.textContent += store + " - "
    countEL.innerText = 0
    count = 0
}


function age() {
    const d1 = document.querySelector(".input__day").value
    const m1 = document.querySelector(".input__month").value
    const y1 = document.querySelector(".input__year").value

    const today = new Date();
    const d2 = today.getDate();
    const m2 = today.getMonth() + 1;
    const y2 = today.getFullYear();

    var month = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]

    if (d1 > d2) {
        d2 += month[m2 - 1]
        m2 = m2 - 1
    }

    if (m1 > m2) {
        m2 = m2 + 12
        y2 = y2 - 1
    }
    var d = d2 - d1
    var m = m2 - m1
    var y = y2 - y1

    document.querySelector(".number-year").innerHTML = `${y}   `
    document.querySelector(".number-month").innerHTML = `${m}   `
    document.querySelector(".number-day").innerHTML = `${d}   `

}

function render() {
    document.querySelector(".icon").addEventListener("click", () => {
        age()
    })
}
render();


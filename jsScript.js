
// scroll to up when click the button
let span = document.querySelector(".up")

window.onscroll = function () {
    if (this.scrollY >= 700) {
        span.classList.add("show")
    }else {
        span.classList.remove("show")
    }
}
span.onclick = function () {
    window.scrollTo ({
        top:0,
        behavior:"smooth"
    })
}



// increement the counter to the number of goal
let section = document.querySelector(".stats")
let nums = document.querySelectorAll(".stats .box .number")
let started = false;

if (window.scrollY >= section.offsetTop) {
    if (!started) {
        nums.forEach((num)=> startCount(num))
    }
    started = true
}
function startCount(el) {
    let gaol = el.dataset.goal;
    let count = setInterval(() => {
        el.textContent++
        if (el.textContent == goal) {
            clearInterval(count)
        }
    }, 2000 / goal);
}
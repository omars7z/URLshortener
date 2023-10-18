const form = document.querySelector(".wrapper form")
url = form.querySelector(".wrapper form")
shortenBtn = form.querySelector(".wrapper form")

form.onsubmit = (e) => {
    e.preventDefault();
}

shortenBtn.onClick = (e) => {
    console.log("Clicked")
}
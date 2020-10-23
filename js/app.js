let form = document.querySelector("form");
let msgAlert = document.querySelector(".alert");


form.addEventListener("submit", (e) => {
    e.preventDefault();

    let cardNumber = document.getElementById("cardnumber");
    let cvcNumber = document.getElementById("cvc");
    let amount = document.getElementById("amount");
    let fName = document.getElementById("fName");
    let lName = document.getElementById("lName");
    let city = document.getElementById("city");
    let state = document.getElementById("state");
    let postalCode = document.getElementById("postalCode");
    let message = document.getElementById("message");

    if (cardNumber.value === "") {
        msgAlert.classList.remove("d-none");
        cardNumber.classList.add("is-invalid");
    } else {
        msgAlert.classList.add("d-none");
        cardNumber.classList.remove("is-invalid");
        cardNumber.classList.add("is-valid");
    }

    if (cvcNumber.value === "") {
        msgAlert.classList.remove("d-none");
        cvcNumber.classList.add("is-invalid");
    } else {
        msgAlert.classList.add("d-none");
        cvcNumber.classList.remove("is-invalid");
        cvcNumber.classList.add("is-valid");
    }

    if (amount.value === "") {
        msgAlert.classList.remove("d-none");
        amount.classList.add("is-invalid");
    } else {
        msgAlert.classList.add("d-none");
        amount.classList.remove("is-invalid");
        amount.classList.add("is-valid");
    }

    if(fName.value === "") {
        msgAlert.classList.remove("d-none");
        fName.classList.add("is-invalid");
    } else {
        msgAlert.classList.add("d-none");
        fName.classList.remove("is-invalid");
        fName.classList.add("is-valid");
    }

    if(lName.value === "") {
        msgAlert.classList.remove("d-none");
        lName.classList.add("is-invalid");
    } else {
        msgAlert.classList.add("d-none");
        lName.classList.remove("is-invalid");
        lName.classList.add("is-valid");
    }

    if(city.value === "") {
        msgAlert.classList.remove("d-none");
        city.classList.add("is-invalid");
    } else {
        msgAlert.classList.add("d-none");
        city.classList.remove("is-invalid");
        city.classList.add("is-valid");
    }

    if(state.value === "") {
        msgAlert.classList.remove("d-none");
        state.classList.add("is-invalid");
    } else {
        msgAlert.classList.add("d-none");
        state.classList.remove("is-invalid");
        state.classList.add("is-valid");
    }

    if(postalCode.value === "") {
        msgAlert.classList.remove("d-none");
        postalCode.classList.add("is-invalid");
    } else {
        msgAlert.classList.add("d-none");
        postalCode.classList.remove("is-invalid");
        postalCode.classList.add("is-valid");
    }

    if(message.value === "") {
        msgAlert.classList.remove("d-none");
        postalCode.classList.add("is-invalid");
    } else {
        msgAlert.classList.add("d-none");
        message.classList.remove("is-invalid");
        message.classList.add("is-valid");
    }
});
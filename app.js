const buttons = document.querySelectorAll(".button")
const body = document.querySelector("body")

buttons.forEach((button) => {
    button.addEventListener("click", (e) => {
        switch (e.target.id) {
            case "grey":
                body.style.backgroundColor = e.target.id;
                body.style.color = "white";
                break;
            case "white":
                body.style.backgroundColor = e.target.id;
                body.style.color = "black";
                break;
            case "blue":
                body.style.backgroundColor = e.target.id;
                break;
            case "yellow":
                body.style.backgroundColor = e.target.id;
                body.style.color = "black";

                break;
            case "dark":
                body.style.backgroundColor = "black";
                body.style.color = "white";
                break;
            case "red":
                body.style.backgroundColor = e.target.id;
                break;
            default:
                body.style.backgroundColor = e.target.id
                break;
        }

    })
})
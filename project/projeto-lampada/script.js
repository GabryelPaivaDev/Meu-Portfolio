var lamp = document.getElementById("lamp")
lamp.alt="Lâmpada acesa"
lamp.src = "assets/lamp_on.png"
lamp.addEventListener("click", function() {
    if (lamp.src.includes("assets/lamp_off.png")) {
        lamp.src = "assets/lamp_on.png"
        document.body.style.background = "radial-gradient(circle, white 8%, yellow 100%)"
    } else {
        lamp.src = "assets/lamp_off.png"
        document.body.style.background = "radial-gradient(circle, white 8%, black 100%)"
    }
})

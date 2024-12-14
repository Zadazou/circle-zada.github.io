let counter = 0

function clickInstructions(el) {
    let title = document.getElementById("title");
    let subtitle = document.getElementById("img")

    counter += 1
    console.log(counter)
    // += incrementer

    if(el == title) {
        
        console.log("title")

    } else if (el == img) {
       
        console.log("image clicked")
    }
    
    if(counter == 1) {
        outside = document.getElementById("door")
        outside.style.transform = "scale(1.4)";
        outside.style.transition = "transform 0.25s ease";
    }

    if(counter == 2) {
        outside = document.getElementById("door")
        outside.style.transform = "scale(1.6)";
        outside.style.transition = "transform 0.25s ease";
    }

    if(counter == 3) {
        outside = document.getElementById("door")
        outside.style.transform = "scale(1.8)";
        outside.style.transition = "transform 0.25s ease";
    }

   
    if(counter == 4) {
        let img = document.getElementById('door');
        img.src = "lobby.jpeg"
        img.style.transform = "none"
    }
}
document.addEventListener("click", function(event) {
    clickInstructions(event.target)
})
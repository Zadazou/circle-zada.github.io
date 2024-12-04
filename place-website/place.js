
// document.addEventListener("scroll", (event) => {
//     lastKnownScrollPosition = window.scrollY;
//     console.log(lastKnownScrollPosition)

//     if (lastKnownScrollPosition > 150) {
//         title.style.top += -20 
//     }
// })
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
        outside.style.transform = "scale(1.4)";
        outside.style.transition = "transform 0.25s ease";
    }

    if(counter == 3) {
        outside = document.getElementById("door")
        outside.style.transform = "scale(1.5)";
        outside.style.transition = "transform 0.25s ease";
    }

    if(counter == 4) {
        let img = document.getElementById('img');
            let newImg = document.createElement('img');
            newImg.src = "https://pbs.twimg.com/media/E8PCDsuXEAAkUQw?format=jpg&name=large";
            img.appendChild(newImg);
        // let img2 = document.createElement('img2')
        // img2.src = "https://pbs.twimg.com/media/E8PCDsuXEAAkUQw?format=jpg&name=large"
        // document.getElementById("img").appendChild(img2)
    }
}
document.addEventListener("click", function(event) {
    clickInstructions(event.target)
});
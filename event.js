let counter = 0

function clickInstructions(el) {
    let title = document.getElementById("title");
    let subtitle = document.getElementById("subtitle")
    
    counter += 1
    console.log(counter)
    // += incrementer
   

    if(el == title) {
        
        console.log("title")

    } else if (el == subtitle) {
       
        console.log("subtitle clicked")
    }
}

document.addEventListener("click", function(event) {
    clickInstructions(event.target)
});


let p = document.createElement("p");
    let firstText = document.createTextNode("The internet is made up of branches and nodes.clutters of imformation is supported by ");
    let secondText = document.createTextNode("The internet is made up of digital signals, codes, and media inputs.");
    p.appendChild(firstText);
    p.appendChild(secondText)
    document.body.appendChild(p);

    let img = document.createElement("img");
    let imageWrapper = document.createElement("div");
    imageWrapper.classList.add("image");
    imageWrapper.appendChild(img)
    img.src = "https://i.pinimg.com/736x/33/08/cf/3308cf306f6fd161c50c9c12c2444041.jpg";
    document.body.appendChild(img)

    if(counter > 5) {
        element.remove(document.getElementById("img"))
        let img = document.createElement("newimg");
        let imageWrapper = document.createElement("div");
        imageWrapper.classList.add("image");
        imageWrapper.appendChild(img)
        img.src = "https://i.pinimg.com/control2/736x/34/d0/4c/34d04c478b83628458c5a5183642257e.jpg";
        document.body.appendChild(img)
    }
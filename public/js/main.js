let content = document.querySelector("#col2")
let r = 0
let editedData = {
    "alt": [],
    "url": [],
}

for (let i = 0; i < texte.length; i++) {
    if (texte[i].includes("May") && !texte[i].includes("text")) {
        let string = texte[i].substring(texte[i].indexOf('May')).replace("an image of ", "");
        editedData.alt.push(string)
        editedData.url.push(imgurls[i])
    }

}


let textElements = []


for (i = 0; i < editedData.alt.length; i++) {

    textElements[i] = createNeuesElement(
        "p",
        i,
        "poem"
    )
    textElements[i].textContent = editedData.alt[i]
    // content.appendChild(textElements[i]);
    // console.log(textElements[i]);

}

setInterval(() => {
    // let old = document.querySelector(".poem")
    r = Math.floor(Math.random() * editedData.alt.length)
    content.prepend(textElements[r]);
}, 1500);


let title = document.querySelector("#title")
let col2 = document.querySelector("#col2")
let hoverimg = document.querySelector("#hoverimg");


title.addEventListener("mouseenter", (e) => {
    toggleInfos("show")
})

title.addEventListener("mouseleave", (e) => {
    toggleInfos("hide")
})

document.addEventListener("mousemove", (e) => {
    if (e.target.className == "poem") {
        moveImg(e.x, e.y)
    } else {
        hideImg()
    }

})


textElements.forEach((elem) => {
    elem.addEventListener("mouseenter", (e) => {
        changeImg(e.target.id)
    })
})

function createNeuesElement(type, id, klasse) {
    let elem = document.createElement(type);
    elem.setAttribute("id", id);
    elem.setAttribute("class", klasse);
    return elem;
}

function toggleInfos(action) {
    let infos = document.querySelector(".info")
    if (action == "show") {
        infos.style.display = "block"
    } else {
        infos.style.display = "none"
    }
}



function moveImg(mouseX, mouseY) {
    hoverimg.style.display = "block"
    hoverimg.style.left = mouseX + "px"
    hoverimg.style.top = mouseY + "px"


}

function hideImg() {
    hoverimg.style.display = "none"
}

function changeImg(id) {
    hoverimg.src = "/proxy?url=" + editedData.url[id]
    console.log(hoverimg.src);
}
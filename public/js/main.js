let content = document.querySelector("#col2")
let r = 0
let editedData = {
    "alt": [],
    "url": [],
}

for (let i = 0; i < texte.length; i++) {
    if (texte[i].includes("May be")) {
        let string = texte[i].substring(texte[i].indexOf('May')).replace("an image of ", "");
        editedData.alt.push(string)
        editedData.url.push(imgurls[i])
    }

}


let textElements = []
let imageElements = []

for (i = 0; i < editedData.alt.length; i++) {

    textElements[i] = createNeuesElement(
        "p",
        i,
        "poem"
    )
    textElements[i].textContent = editedData.alt[i]
    // content.appendChild(textElements[i]);
    // console.log(textElements[i]);
    imageElements[i] = createNeuesElement(
        "img",
        "img"+i,
        "hoverimg"
    )


}

setInterval(() => {
    // let old = document.querySelector(".poem")
    r = Math.floor(Math.random() * editedData.alt.length)
    let allCurr = document.querySelectorAll("poem")
    allCurr.forEach((e)=>{
        if (e.id == r) {
            console.log(dopplung);
            return
        }
    })
    content.prepend(textElements[r]);
    imageElements[r].src = "/proxy?url=" + editedData.url[r]
    content.appendChild(imageElements[r]);

}, 800);


let title = document.querySelector("#title")
let col1 = document.querySelector("#col1")
let col2 = document.querySelector("#col2")
let hoverimg = document.querySelector("#hoverimg");


title.addEventListener("mouseenter", (e) => {
    toggleInfos("show")
})

title.addEventListener("mouseleave", (e) => {
    toggleInfos("hide")
})

document.addEventListener("mousemove", (e) => {
    let hoverimgs = document.querySelectorAll(".hoverimg")
    if (e.target.className == "poem") {
        let curr = document.querySelector("#img"+e.target.id)

        
        hoverimgs.forEach((e) => {
            // e.style.display = "none"
        })
        curr.style.display = "block"
        curr.style.left = e.x + "px"
        curr.style.top = e.y + "px"
        // moveImg(curr, e.x, e.y)
    } else {
        // hideImg(hoverimgs)
    }

})


textElements.forEach((elem) => {
    elem.addEventListener("mouseenter", (e) => {
        // changeImg(e.target.id)
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



function moveImg(curr, mouseX, mouseY) {
    curr.style.display = "block"
    curr.style.left = mouseX + "px"
    curr.style.top = mouseY + "px"


}

function hideImg(hoverimgs) {
    hoverimgs.forEach((e) => {
        e.style.display = "none"
    })}

function changeImg(id) {
    hoverimg.src = "/proxy?url=" + editedData.url[id]
}
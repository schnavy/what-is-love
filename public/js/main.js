// console.log(alttexte)
let body = document.querySelector("body")
let r = 0
let maybetexte = []
alttexte.forEach(element => {
    if(element.includes("May") && !element.includes("text")){
        let string = element.substring(element.indexOf('May')).replace("an image of ","");
        maybetexte.push(string)
        console.log(string);
    }
});

let textElements = []

for (i = 0; i < maybetexte.length; i++) {

    textElements[i] = createNeuesElement(
        "p",
        "p"+i,
        "poem"
    )
    textElements[i].textContent = maybetexte[i]
    // body.appendChild(textElements[i]);
    // console.log(textElements[i]);

}

setInterval(() => {
    let old = document.querySelector(".poem")
    if (old) {
        
        body.removeChild(old);
    }

    r = Math.floor(Math.random()*maybetexte.length)
    console.log(r);
    
    body.appendChild(textElements[r]);


}, 1500);

function createNeuesElement(type, id, klasse) {
    let elem = document.createElement(type);
    elem.setAttribute("id", id);
    elem.setAttribute("class", klasse);
    return elem;
}
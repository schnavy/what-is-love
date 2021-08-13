// console.log(alttexte)
let body = document.querySelector("body")

let maybetexte = []
alttexte.forEach(element => {
    if(element.includes("May") && !element.includes("text")){
        let string = element.substring(element.indexOf('May'))
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
    body.appendChild(textElements[i]);
    // console.log(textElements[i]);

}



function createNeuesElement(type, id, klasse) {
    let elem = document.createElement(type);
    elem.setAttribute("id", id);
    elem.setAttribute("class", klasse);
    return elem;
}
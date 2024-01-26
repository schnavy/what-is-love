// let audiofiles = [
// 	"1gZqSLy0DB7z.128.mp3",
// 	"1RdXo0U49SrX.128.mp3",
// 	"MqbvwzoMBLpU.128.mp3",
// 	"Rkv86kYqZiXn.128.mp3",
// 	"szMUJCbEK9Q0.128.mp3",
// 	"ZuWdLHTBlxuM.128.mp3",
// ];

let audio = document.querySelector("audio")

document.addEventListener("click", (e) => {
	if (!audio.paused) {
		audio.pause();
	} else {
		audio.play();
	}
});
document.addEventListener("touchend", (e) => {
	if (!audio.paused) {
		audio.pause();
	} else {
		audio.play();
	}
});


let content = document.querySelector("#col1");

let editedAlts = [];
let index = 0;

for (let i = 0; i < 200; i++) {
	if (typeof texte[i] == "string" && texte[i].includes("May be")) {
		let string = texte[i]
		.substring(texte[i].indexOf("May"))
		.replace("an image of ", "");
		editedAlts.push(string);
	}
}
console.log(editedAlts);

let textElements = [];

for (i = 0; i < editedAlts.length; i++) {
	textElements[i] = createNeuesElement("p", i, "poem");
	textElements[i].textContent = editedAlts[i];
}
newLine();
setInterval(() => {
	newLine();
}, 4000);

let artefacts = [" <3", "(?)", "..", "?!", "*"];

setInterval(() => {
	let r = Math.floor(Math.random() * editedAlts.length);
	let r2 = Math.floor(Math.random() * artefacts.length);
	textElements[r].textContent += artefacts[r2];
}, 100000);

function newLine() {
	// let old = document.querySelector(".poem")
	r = Math.floor(Math.random() * editedAlts.length);
	let curr = textElements[r];
	content.prepend(curr);
	setTimeout(() => {
		curr.classList.add("visible");
	}, 300);
	index++;
	if (index > 100) {
		index = 0;
	}
	console.log(r);
}

let title = document.querySelector("#title");
let col1 = document.querySelector("#col1");
let col2 = document.querySelector("#col2");
let hoverimg = document.querySelector("#hoverimg");

title.addEventListener("mouseenter", (e) => {
	toggleInfos("show");
});

title.addEventListener("mouseleave", (e) => {
	toggleInfos("hide");
});

function createNeuesElement(type, id, klasse) {
	let elem = document.createElement(type);
	elem.setAttribute("id", id);
	elem.setAttribute("class", klasse);
	return elem;
}

function toggleInfos(action) {
	let infos = document.querySelector(".info");
	if (action == "show") {
		infos.style.display = "inline-block";
	} else {
		infos.style.display = "none";
	}
}

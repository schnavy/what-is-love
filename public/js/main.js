let content = document.querySelector("#col1");

let editedAlts = [];
let index = 0;
console.log(texte);

for (let i = 0; i < texte.length; i++) {
	if (texte[i].includes("May be")) {
		let string = texte[i]
			.substring(texte[i].indexOf("May"))
			.replace("an image of ", "");
		editedAlts.push(string);
	}
}

let textElements = [];

for (i = 0; i < editedAlts.length; i++) {
	textElements[i] = createNeuesElement("p", i, "poem");
	textElements[i].textContent = editedAlts[i];
}
newLine();
setInterval(() => {
	newLine();
}, 3000);

let artefacts = [" <333", ".       __?", "..", "?!", "*", "<3"];

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
	}, 200);
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

// document.addEventListener("mousemove", (e) => {
// 	let hoverimgs = document.querySelectorAll(".hoverimg");
// 	if (e.target.className == "poem") {
// 		let curr = document.querySelector("#img" + e.target.id);

// 		hoverimgs.forEach((e) => {
// 			// e.style.display = "none"
// 		});
// 		curr.style.display = "block";
// 		curr.style.left = e.x + "px";
// 		curr.style.top = window.scrollY + e.y + "px";
// 		// moveImg(curr, e.x, e.y)
// 	} else {
// 		// hideImg(hoverimgs)
// 	}
// });

textElements.forEach((elem) => {
	elem.addEventListener("mouseenter", (e) => {
		// changeImg(e.target.id)
	});
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

function moveImg(curr, mouseX, mouseY) {
	curr.style.display = "block";
	curr.style.left = mouseX + "px";
	curr.style.top = mouseY + "px";
}

function hideImg(hoverimgs) {
	hoverimgs.forEach((e) => {
		e.style.display = "none";
	});
}

function changeImg(id) {
	hoverimg.src = "/proxy?url=" + editedData.url[id];
}

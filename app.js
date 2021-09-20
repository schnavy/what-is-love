var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
const request = require("request");
const fs = require("fs");

var indexRouter = require("./routes/index");
var proxyRouter = require("./routes/proxy");

var app = express();

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(logger("dev"));
app.use(express.json());
app.use(
	express.urlencoded({
		extended: false,
	})
);
app.use(cookieParser());
app.use(express.static(__dirname + "/public"));

app.use("/", indexRouter);

app.use("/proxy", proxyRouter); //You can customise the route name

// catch 404 and forward to error handler
app.use(function (req, res, next) {
	next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
	// set locals, only providing error in development
	res.locals.message = err.message;
	res.locals.error = req.app.get("env") === "development" ? err : {};

	// render the error page
	res.status(err.status || 500);
	res.render("error");
});

module.exports = app;

let scraper = true;

if (scraper) {
	scrapeAlts();
	setInterval(scrapeAlts, 86400000);
	function scrapeAlts() {
		const options = {
			method: "GET",
			url: "https://instagram40.p.rapidapi.com/tag",
			qs: { tag: "love" },
			headers: {
				"x-rapidapi-host": config.xRapidapiHost,
				"x-rapidapi-key": config.xRapidapiKey,
				useQueryString: true,
			},
		};

		let oldArray;
		fs.readFile("poems.json", "utf-8", function (err, data) {
			if (err) throw err;

			oldArray = JSON.parse(data);
		});

		request(options, function (error, res, body) {
			if (error) {
				console.log(error);
				throw new Error(error);
			}

			let data = JSON.parse(body).data.recent.nodes;

			data.forEach((e) => {
				let alt = e.media.accessibility_caption;
				if (typeof alt != "undefined") {
					oldArray.unshift(e.media.accessibility_caption);
				}
			});
			console.log(oldArray);
			oldArray.length = 300;

			var jsonContent = JSON.stringify(oldArray);
			console.log(jsonContent);

			fs.writeFile("poems.json", jsonContent, "utf8", function (err) {
				if (err) {
					console.log("An error occured while writing JSON Object to File.");
					return console.log(err);
				}

				console.log("JSON file has been saved.");
			});
		});
	}
}

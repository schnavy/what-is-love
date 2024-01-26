const createError = require("http-errors");
const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const fs = require("fs");
const request = require("request");

const indexRouter = require("./routes/index");

const app = express();
const config = {
    xRapidapiHost: "instagram40.p.rapidapi.com",
    xRapidapiKey: "66b8aa8dafmsh5ea8017ee26afc8p1dd278jsned98e43dcb5b"
};

// View engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

// Middleware setup
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

// Route setup
app.use("/", indexRouter);

// Catch 404 and forward to error handler
app.use((req, res, next) => {
    next(createError(404));
});

// Error handler
app.use((err, req, res) => {
    res.locals.message = err.message;
    res.locals.error = req.app.get("env") === "development" ? err : {};
    res.status(err.status || 500).render("error");
});

// Server startup message
console.log("Started on PORT 3001");

// Scraper condition and functionality
const scraper = false;
if (scraper) {
    scrapeAlts();
    setInterval(scrapeAlts, 86400000); // 24 hours
}

function scrapeAlts() {
    const options = {
        method: "GET",
        url: "https://instagram40.p.rapidapi.com/tag",
        qs: { tag: "love" },
        headers: {
            "x-rapidapi-host": config.xRapidapiHost,
            "x-rapidapi-key": config.xRapidapiKey,
            useQueryString: true
        }
    };

    fs.readFile("poems.json", "utf-8", (err, data) => {
        if (err) throw err;
        let oldArray = JSON.parse(data);

        request(options, (error, res, body) => {
            if (error) throw new Error(error);

            let newData = JSON.parse(body).data.recent.nodes;
            newData.forEach(e => {
                let alt = e.media.accessibility_caption;
                if (typeof alt !== "undefined") {
                    oldArray.unshift(alt);
                }
            });

            oldArray.length = Math.min(oldArray.length, 300);
            let jsonContent = JSON.stringify(oldArray);

            fs.writeFile("poems.json", jsonContent, "utf8", (err) => {
                if (err) {
                    console.error("Error writing JSON to file:", err);
                } else {
                    console.log("JSON file has been saved.");
                }
            });
        });
    });
}

module.exports = app;

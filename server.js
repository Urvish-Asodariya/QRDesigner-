var QRCode = require('qrcode');
const express = require("express");
const app = express();
const path = require("path");
const port = process.env.PORT || 3000;
const bodyparser = require("body-parser");
const cors = require("cors");
const QRCodeStyling = require("qr-code-styling");
// const QRCodeStyling = require("qr-border-plugin");


app.use(cors());
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: true }));
app.set("view engine", "ejs");
app.set("views", path.resolve("views"));

app.post("/qrcode", (req, res) => {
    try {
        const prompt = req.body;
        const data = prompt.name + `\n` + prompt.address + `\n` + prompt.mno + `\n` + prompt.link;
        res.json({ data });
    } catch (err) {
        console.error(err);
        res.status(500).send("Error generating response");
    }
});

app.get("/", (req, res) => {
    res.render("index", { result: null });
});


app.listen(port, (err) => {
    if (err) {
        console.log(err);
    } else {
        console.log("server is running on port " + port);
    }
})



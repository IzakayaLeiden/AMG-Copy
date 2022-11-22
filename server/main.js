const fs = require("fs/promises");
const express = require("express");
const randomFile = require("select-random-file");
const h = require('./helper_main.js')
const port = process.env.PORT || 3000

const app = express();

app.use(express.json());

app.use(express.static('public'));

app.get('', (req, res) => {
    res.sendFile(__dirname + '/public/index.html')
})

app.get("/graph", async (req, res) => {
    const dir = "../assets/data"
    randomFile(dir, async (err, file) => {
        let rawContent;
        try {
            rawContent = await fs.readFile(`../assets/data/${file}`, "utf-8");
        } catch (err) {
            return res.sendStatus(404);
        }
        
        let content = h.splitStr(rawContent, "\n");
        cleanContent = content.filter(e => e);
        NumberContent = cleanContent.map(Number);
        x = Array.from(Array(1024).keys());
        number_x = x.map(String)

        var type = h.splitStr(file, "-")
        res.json({
            type: type[0],
            y: NumberContent,
            x: number_x
        });
      })
});

app.listen(3000, () => console.log("API Server is running..."))
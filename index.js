const express = require("express");
const data = require("./data.json");
const cors = require("cors");
const port = process.env.PORT || 3000;

function findById(data, id) {
    for (var i = 0; i < data.length; i++) {
        if (data[i] == id) {
            return data[i]
        }
    }
    return null
}

const app = express();
app.use(cors());

app.get("/", function(request, response) {
    response.json({data});
});

app.get("/:id", function(request, response) {
    var record = findById(data, request.params.id);
    if (!record) {
        response.status(404).json({
            error: {
                message: "No Record Found!"
            }
        });
    } else {
        response.json({data: record});
    }
})

app.listen(port);
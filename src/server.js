const app = require("./index.js");
const connect = require("./config/db");

app.listen(5000, async()=>{
    try {
        await connect();
    } catch (error) {
        console.log("error");
    }
    console.log("listening on port 5000");
});
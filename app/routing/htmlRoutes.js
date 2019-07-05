var path = require("path");

module.exports = function(app) {

    // if the users navs to survey.html or presses survey button, this will respond with the survey questions
    app.get("/survey", function(req,res) {
        res.sendFile(path.join(__dirname, "/../public/survey.html"));
    });

    // or they will get the regular home page
    app.use(function(req,res) {
        res.sendFile(path.join(__dirname, "/../public/home.html"));
    });
};
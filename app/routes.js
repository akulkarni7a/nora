// app/routes.js
var path = require("path");
const util = require('util');
var connection = require("../config/connection.js");

module.exports = function(app, passport) {

    // =====================================
    // HOME PAGE (with login links) ========
    // =====================================
    app.get('/', function(req, res) {
        // res.render('./../views/index.html'); // load the index.ejs file
        res.sendFile(path.join(__dirname, './../views/index.html'))
    });

    // =====================================
    // LOGIN ===============================
    // =====================================
    // show the login form
    // app.get('/main', function(req, res) {

    // 	// render the page and pass in any flash data if it exists
    // 	// res.render('./../views/main.html', { message: req.flash('loginMessage') });
    // res.sendFile(path.join(__dirname, "./../views/main.html"))
    // });

    // process the login form
    app.post('/login', passport.authenticate('local-login', {
            successRedirect: '/main', // redirect to the secure profile section
            failureRedirect: '/', // redirect back to the signup page if there is an error
            failureFlash: true // allow flash messages
        }),
        function(req, res) {
            console.log("hello");

            if (req.body.remember) {
                req.session.cookie.maxAge = 1000 * 60 * 3;
            } else {
                req.session.cookie.expires = false;
            }
            res.redirect('/');
        });

    // =====================================
    // SIGNUP ==============================
    // =====================================
    // show the signup form
    // app.get('/signup', function(req, res) {
    // 	// render the page and pass in any flash data if it exists
    // 	res.render('signup.ejs', { message: req.flash('signupMessage') });
    // });

    // process the signup form
    app.post('/signup', passport.authenticate('local-signup', {
        successRedirect: '/main', // redirect to the secure profile section
        failureRedirect: '/', // redirect back to the signup page if there is an error
        failureFlash: true // allow flash messages
    }));
    var currentUser;

    // =====================================
    // PROFILE SECTION =========================
    // =====================================
    // we will want this protected so you have to be logged in to visit
    // we will use route middleware to verify this (the isLoggedIn function)
    app.get('/main', isLoggedIn, function(req, res) {
        res.render('main.ejs', {
            user: req.user // get the user out of session and pass to template

        });
        currentUser = req.user;
    });

    // =====================================
    // LOGOUT ==============================
    // =====================================
    app.get('/logout', function(req, res) {
        req.logout();
        res.redirect('/');
    });

    app.get("/pageLoad", function(req, res) {
        console.log(util.inspect(currentUser, { showHidden: false, depth: null }))
        res.json(currentUser);
    });

    app.get("/permissions", function(req, res) {
        var dbQuery = "SELECT * FROM permissions where id = ?";
        connection.query(dbQuery, [currentUser.id], function(err, result) {
            res.json(result);
        });
    });

    app.get("/getID/:email?", function(req, res) {
        var dbQuery = "SELECT * FROM parents where Parent_email = ?";
        var reqEmail = req.params.email;
        console.log(util.inspect(reqEmail, { showHidden: false, depth: null }))
        connection.query(dbQuery, [req.params.email], function(err, result) {
            res.json(result);
        });
    });

    app.post("/addParent", function(req, res) {
        console.log("Entered:");
        var school = req.body.school;
        var childFirstName = req.body.childFirstName;
        var childLastName = req.body.childBirthdate;
        var childBirthdate = req.body.childLastName;
        var childGender = req.body.childGender;
        var childStartDate = req.body.childStartDate;
        var parent1FirstName = req.body.parent1FirstName;
        var parent1LastName = req.body.parent1LastName;
        var parent2FirstName = req.body.parent2FirstName;
        var parent2LastName = req.body.parent2LastName;
        var parentEmail = req.body.parentEmail;
        var parentPhone = req.body.parentPhone;

        var dbQuery = "Insert INTO parents (school,Parent1_first_name,Parent1_last_name,Parent2_first_name,Parent2_last_name,Parent_phone,Parent_email) values (?,?,?,?,?,?,?)"
        connection.query(dbQuery, [school,parent1FirstName,parent1LastName,parent2FirstName,parent2LastName,parentPhone,parentEmail], function(err, result) {
            res.json(result);
            console.log("query sent1");
        });

    });

    app.get("/getdata", function(req,res){
	    var dbQuery = "SELECT * FROM reenrollment"
	    connection.query(dbQuery, function(err, result) {
	      res.json(result);
	    });

	  });

    app.post("/addChild", function(req, res) {
        console.log("Entered2:");
        console.log(util.inspect(req.body, { showHidden: false, depth: null }))
        var school = req.body.school;
        var childFirstName = req.body.childFirstName;
        var childLastName = req.body.childLastName;
        var childBirthdate = req.body.childBirthdate;
        var childGender = req.body.childGender;
        var childStartDate = req.body.childStartDate;
        var parent1FirstName = req.body.parent1FirstName;
        var parent1LastName = req.body.parent1LastName;
        var parent2FirstName = req.body.parent2FirstName;
        var parent2LastName = req.body.parent2LastName;
        var parentEmail = req.body.parentEmail;
        var parentPhone = req.body.parentPhone;
        var parentID = req.body.parentID;
        console.log(parentID);



        var dbQuery = "INSERT INTO children (school,parent_id,child_first_name,child_last_name,child_birthday,child_gender,child_start_date) values(?,?,?,?,?,?,?);"
        connection.query(dbQuery, [school,parentID,childFirstName,childLastName,childBirthdate,childGender,childStartDate], function(err, result) {
            console.log("result "+result);
            console.log("err "+err);
            res.json(result);
            console.log("query sent2");
        });

    });







};

// route middleware to make sure
function isLoggedIn(req, res, next) {

    // if user is authenticated in the session, carry on
    if (req.isAuthenticated())
        return next();

    // if they aren't redirect them to the home page
    res.redirect('/');
}